// @ts-check
import { z } from 'zod';

/**
 * Specify your server-side environment variables schema here.
 * This way you can ensure the app isn't built with invalid env vars.
 */
export const serverSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']),
  MAILTRAP_TOKEN: z.string(),
  MAILTRAP_HOST: z.string(),
  MAIL_RECEIVER: z.string().email(),
  MAILTRAP_USER: z.string(),
  MAILTRAP_PASS: z.string(),
});

/**
 * Specify your client-side environment variables schema here.
 * This way you can ensure the app isn't built with invalid env vars.
 * To expose them to the client, prefix them with `NEXT_PUBLIC_`.
 */
export const clientSchema = z.object({
  NEXT_PUBLIC_GOOGLE_ANALYTICS: z.string(),
  NEXT_PUBLIC_PROFILE_LINKEDIN: z.string().url(),
  NEXT_PUBLIC_PROFILE_GITHUB: z.string().url(),
  NEXT_PUBLIC_PROFILE_TWITTER: z.string().url(),
  NEXT_PUBLIC_PROFILE_FACEBOOK: z.string().url(),
  NEXT_PUBLIC_PHONE_NUMBER: z.string(),
  NEXT_PUBLIC_APP_URL: z.string().url(),
});

/**
 * You can't destruct `process.env` as a regular object, so you have to do
 * it manually here. This is because Next.js evaluates this at build time,
 * and only used environment variables are included in the build.
 * @type {{ [k in keyof z.infer<typeof clientSchema>]: z.infer<typeof clientSchema>[k] | undefined }}
 */
export const clientEnv = {
  NEXT_PUBLIC_GOOGLE_ANALYTICS: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
  NEXT_PUBLIC_PROFILE_LINKEDIN: process.env.NEXT_PUBLIC_PROFILE_LINKEDIN,
  NEXT_PUBLIC_PROFILE_GITHUB: process.env.NEXT_PUBLIC_PROFILE_GITHUB,
  NEXT_PUBLIC_PROFILE_TWITTER: process.env.NEXT_PUBLIC_PROFILE_TWITTER,
  NEXT_PUBLIC_PROFILE_FACEBOOK: process.env.NEXT_PUBLIC_PROFILE_FACEBOOK,
  NEXT_PUBLIC_PHONE_NUMBER: process.env.NEXT_PUBLIC_PHONE_NUMBER,
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
};
