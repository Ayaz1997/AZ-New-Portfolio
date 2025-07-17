
'use server';

import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

export async function submitContactForm(formData: unknown) {
  const validatedFields = contactFormSchema.safeParse(formData);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Here you would typically send an email.
  // For this example, we'll just log the data to the console.
  console.log('Contact form submitted:');
  console.log(validatedFields.data);

  return {
    message: 'Your message has been sent successfully!',
  };
}
