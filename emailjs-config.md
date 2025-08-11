# EmailJS Setup Guide for Contact Form

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up for a free account
2. Verify your email address

## Step 2: Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID**

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

**Subject:** New Contact Form Message from {{name}}

**Content:**
```
Name: {{name}}
Email: {{email}}
Message: {{query}}

This message was sent from your portfolio contact form.
```

4. Save the template and note down your **Template ID**

## Step 4: Get Your Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key**

## Step 5: Update Your Code
Replace the placeholder values in `components/ContactSection.tsx`:

```tsx
const result = await emailjs.sendForm(
  'YOUR_SERVICE_ID',        // Replace with your actual Service ID
  'YOUR_TEMPLATE_ID',       // Replace with your actual Template ID
  formRef.current!,
  'YOUR_PUBLIC_KEY'         // Replace with your actual Public Key
);
```

## Step 6: Test
1. Fill out your contact form
2. Submit a test message
3. Check your email inbox

## Free Tier Limits
- 200 emails per month
- Perfect for portfolio websites

## Troubleshooting
- Make sure all IDs are correct
- Check browser console for errors
- Verify your email service is properly connected
