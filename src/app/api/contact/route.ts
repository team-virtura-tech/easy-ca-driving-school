import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

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
    .min(1, 'Phone number is required')
    .refine(
      (val) => /^[\d\s()+.-]+$/.test(val),
      'Please enter a valid phone number'
    ),
  email: z.string().email('Please enter a valid email address'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must be less than 2000 characters'),
  topics: z.array(z.string()).max(6, 'Please select up to 6 topics').optional(),
  company: z.string().optional(), // honeypot
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Check honeypot - if filled, silently reject (bot protection)
    if (body.company) {
      return NextResponse.json({ ok: true }); // Pretend success to bot
    }

    // Validate the request body
    const validatedData = contactSchema.parse(body);

    // TODO: Rate limiting
    // TODO: Send email or save to database

    // For now, just log the contact form submission
    console.log('Contact form submission:', {
      name: `${validatedData.firstName} ${validatedData.lastName}`,
      email: validatedData.email,
      phone: validatedData.phone,
      message: validatedData.message,
      topics: validatedData.topics,
      timestamp: new Date().toISOString(),
    });

    // Return success response
    return NextResponse.json({
      ok: true,
      message: 'Message received successfully',
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
