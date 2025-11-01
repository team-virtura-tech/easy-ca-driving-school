# reCAPTCHA v3 Integration

This project uses Google reCAPTCHA v3 Enterprise to protect the contact form from spam and bot submissions.

### 🌐 Environment Variables Used

Your environment variables needed:

- `RECAPTCHA_PROJECT_ID` - For API calls
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` - For frontend script
- `RECAPTCHA_SECRET_KEY` - For API authentication

## How it Works

1. **Frontend (Contact Form):**
   - reCAPTCHA script loads only on contact page for better performance
   - `useRecaptcha` hook manages reCAPTCHA execution
   - Form submission triggers `executeRecaptcha('contact_form_submit')`
   - Token is sent to API with form data2. **Backend (API Route):**
   - Receives form data + reCAPTCHA token
   - Uses reCAPTCHA API key to authenticate with Google Cloud
   - Calls reCAPTCHA Enterprise API to verify token
   - Checks token validity and risk score (≥0.5)
   - Proceeds with email sending only if verification passes

## Files Modified

- `src/app/contact-us/page.tsx` - Added reCAPTCHA script (page-specific)
- `src/hooks/useRecaptcha.ts` - Custom hook for reCAPTCHA
- `src/app/contact-us/ContactForm.tsx` - Integrated reCAPTCHA
- `src/app/api/contact/route.ts` - Server-side verification

## Security Features

- **v3 Invisible**: No user interaction required
- **Action-based**: Specific to 'contact_form_submit'
- **Score-based**: Only allows submissions with score ≥ 0.5
- **Honeypot**: Additional bot protection via hidden field
- **Enterprise API**: More robust than standard reCAPTCHA

## Testing

1. Visit the contact form at `/contact-us`
2. Fill out and submit the form
3. Check browser network tab for reCAPTCHA calls
4. Verify server logs show successful verification
