'use server';

import { z } from 'zod';

const contactFormSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  message: z.string().min(1, 'Message is required'),
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
