import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  firstName: z
    .string()
    .min(1, 'First name is required')
    .max(30, 'First name must be less than 30 characters'),
  lastName: z
    .string()
    .min(1, 'Last name is required')
    .max(30, 'Last name must be less than 30 characters'),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^[\d\s()+.-]+$/.test(val),
      'Please enter a valid phone number'
    ),
  email: z.string().email('Please enter a valid email address'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must be less than 2000 characters'),
  topics: z.array(z.string()).max(6, 'Please select up to 6 topics').optional(),
  company: z.string().optional(), // honeypot
  recaptchaToken: z.string().min(1, 'reCAPTCHA token is required'),
});

// reCAPTCHA verification function
async function verifyRecaptcha(token: string): Promise<boolean> {
  try {
    const projectId = process.env.RECAPTCHA_PROJECT_ID;
    const apiKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

    if (!projectId || !apiKey) {
      console.error('reCAPTCHA configuration missing');
      return false;
    }

    // Get Google Application Credentials from environment
    const credentialsJson = process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON;
    if (!credentialsJson) {
      console.error('Google Application Credentials JSON not found');
      return false;
    }

    const credentials = JSON.parse(credentialsJson);

    // Create JWT for authentication
    const { JWT } = await import('google-auth-library');
    const client = new JWT({
      email: credentials.client_email,
      key: credentials.private_key,
      scopes: ['https://www.googleapis.com/auth/cloud-platform'],
    });

    const accessToken = await client.authorize();

    const response = await fetch(
      `https://recaptchaenterprise.googleapis.com/v1/projects/${projectId}/assessments`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken.access_token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          event: {
            token,
            expectedAction: 'contact_form_submit',
            siteKey: apiKey,
          },
        }),
      }
    );

    if (!response.ok) {
      console.error('reCAPTCHA verification failed:', response.statusText);
      return false;
    }

    const result = await response.json();

    // Check if the token is valid and the score is acceptable
    return (
      result.tokenProperties?.valid === true &&
      result.riskAnalysis?.score >= 0.5
    );
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Check honeypot - if filled, silently reject (bot protection)
    if (body.company) {
      return NextResponse.json({ ok: true }); // Pretend success to bot
    }

    // Validate the request body
    const validatedData = contactSchema.parse(body);

    // Verify reCAPTCHA
    const isRecaptchaValid = await verifyRecaptcha(
      validatedData.recaptchaToken
    );
    if (!isRecaptchaValid) {
      console.error(
        'reCAPTCHA verification failed for token:',
        validatedData.recaptchaToken?.substring(0, 20) + '...'
      );
      return NextResponse.json(
        { message: 'reCAPTCHA verification failed. Please try again.' },
        { status: 400 }
      );
    }

    // Format topics for display
    const topicsText = validatedData.topics?.length
      ? `\n\nTopics of interest:\n${validatedData.topics.map((topic) => `• ${topic}`).join('\n')}`
      : '';

    // Send notification email to business
    const { data: businessEmailData, error: businessEmailError } =
      await resend.emails.send({
        from: process.env.FROM_EMAIL || 'contact@easyca-driving.com',
        to: process.env.TO_EMAIL || 'contact@easyca-driving.com',
        replyTo: validatedData.email,
        subject: `New Contact Form Submission from ${validatedData.firstName} ${validatedData.lastName}`,
        text: `
New contact form submission:

Name: ${validatedData.firstName} ${validatedData.lastName}
Email: ${validatedData.email}
Phone: ${validatedData.phone || 'Not provided'}

Message:
${validatedData.message}${topicsText}

---
Submitted from Easy CA Driving School website
      `.trim(),
        html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #f97316; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>

          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #555;">Contact Details</h3>
            <p><strong>Name:</strong> ${validatedData.firstName} ${validatedData.lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${validatedData.email}">${validatedData.email}</a></p>
            <p><strong>Phone:</strong> ${validatedData.phone || 'Not provided'}</p>
          </div>

          <div style="background: #fff; padding: 20px; border-left: 4px solid #f97316; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #555;">Message</h3>
            <p style="white-space: pre-line;">${validatedData.message}</p>
          </div>

          ${
            validatedData.topics?.length
              ? `
          <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #555;">Topics of Interest</h3>
            <ul style="margin: 0; padding-left: 20px;">
              ${validatedData.topics.map((topic) => `<li style="margin: 5px 0;">${topic}</li>`).join('')}
            </ul>
          </div>
          `
              : ''
          }

          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #888; font-size: 14px;">
              Submitted from Easy CA Driving School website
            </p>
          </div>
        </div>
      `,
      });

    if (businessEmailError) {
      console.error('Business email error:', businessEmailError);
      return NextResponse.json(
        { message: 'Failed to send message. Please try again.' },
        { status: 500 }
      );
    }

    // Send confirmation email to customer
    const { data: confirmationEmailData, error: confirmationEmailError } =
      await resend.emails.send({
        from: process.env.FROM_EMAIL || 'contact@easyca-driving.com',
        to: validatedData.email,
        subject: 'Thanks for contacting Easy CA Driving School!',
        text: `
Hi ${validatedData.firstName},

Thank you for reaching out to Easy CA Driving School! We've received your message and will get back to you within 1 business day.

Your message:
${validatedData.message}

If you have any urgent questions, feel free to call us directly.

Best regards,
Easy CA Driving School Team
      `.trim(),
        html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; padding: 20px;">
          <div style="background: white; border-radius: 8px; padding: 30px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #f97316; margin: 0; font-size: 28px;">Easy CA Driving School</h1>
              <div style="height: 3px; background: linear-gradient(to right, #f97316, #fb923c); margin: 10px auto; width: 100px;"></div>
            </div>

            <h2 style="color: #333; margin-bottom: 20px;">Thanks for reaching out, ${validatedData.firstName}!</h2>

            <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; border-left: 4px solid #f97316; margin: 20px 0;">
              <p style="margin: 0; color: #555; line-height: 1.6;">
                We've received your message and will get back to you <strong>within 1 business day</strong>.
                Our team is excited to help you with your driving goals!
              </p>
            </div>

            <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #555; font-size: 16px;">Your Message:</h3>
              <p style="color: #666; white-space: pre-line; margin: 0;">${validatedData.message}</p>
            </div>

            ${
              validatedData.topics?.length
                ? `
            <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #555; font-size: 16px;">Topics You're Interested In:</h3>
              <ul style="margin: 0; padding-left: 20px; color: #666;">
                ${validatedData.topics.map((topic) => `<li style="margin: 5px 0;">${topic}</li>`).join('')}
              </ul>
            </div>
            `
                : ''
            }

            <div style="text-align: center; margin: 30px 0;">
              <a href="https://easy-ca-driving-school.vercel.app/"
                 style="display: inline-block; background: #f97316; color: white; text-decoration: none; padding: 12px 30px; border-radius: 8px; font-weight: 600; font-size: 16px;">
                🏠 Visit Our Website
              </a>
            </div>

            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
              <p style="color: #666; margin: 10px 0;">
                <strong>Need immediate assistance?</strong><br>
                Feel free to call us or check out our website for more information.
              </p>
              <p style="color: #888; font-size: 14px; margin: 0;">
                Best regards,<br>
                <span style="color: #f97316; font-weight: bold;">Easy CA Driving School Team</span>
              </p>
            </div>
          </div>
        </div>
      `,
      });

    if (confirmationEmailError) {
      console.error('Confirmation email error:', confirmationEmailError);
      // Don't fail the whole request if confirmation email fails
    }

    console.log('Business email sent:', businessEmailData);
    console.log('Confirmation email sent:', confirmationEmailData);

    return NextResponse.json({
      ok: true,
      message: 'Message sent successfully',
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          ok: false,
          message: 'Validation failed',
          errors: error.issues,
        },
        { status: 422 }
      );
    }

    console.error('Contact form error:', error);
    return NextResponse.json(
      {
        ok: false,
        message: 'Internal server error',
      },
      { status: 500 }
    );
  }
}

// Only allow POST requests
export async function GET() {
  return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
}
