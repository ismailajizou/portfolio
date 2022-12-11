import { env } from '@/env/server.mjs';
import { mailSchema } from '@/utils/schemas/mail.schema';
import { MailtrapClient } from 'mailtrap';
import type { NextApiRequest, NextApiResponse } from 'next';
import { i18n } from 'next-i18next';
import { z } from 'zod';

const client = new MailtrapClient({
  endpoint: env.MAILTRAP_ENDPOINT,
  token: env.MAILTRAP_TOKEN,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST')
    return res.status(404).json({ message: i18n?.t('extra.404') });
  try {
    const { name, email, subject, body } = mailSchema.parse(req.body);
    await client.send({
      from: { email, name },
      to: [{ email: env.MAIL_RECEIVER }],
      subject,
      text: body,
      category: 'contact',
    });
    res.status(200).json({ message: i18n?.t('extra.email-sent') });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res
        .status(400)
        .json({ message: i18n?.t('extra.invalid-inputs'), error: err });
    }
    res
      .status(500)
      .json({ message: i18n?.t('extra.unknown-error'), error: err });
  }
}
