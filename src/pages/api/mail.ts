import { env } from '@/env/server.mjs';
import { mailSchema } from '@/utils/schemas/mail.schema';
import type { NextApiRequest, NextApiResponse } from 'next';
import { i18n } from 'next-i18next';
import nodemailer from 'nodemailer';
import { z } from 'zod';

const transport = nodemailer.createTransport({
  service: 'mailtrap',
  auth: {
    user: env.MAILTRAP_USER,
    pass: env.MAILTRAP_PASS,
  },
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST')
    return res.status(404).json({ message: i18n?.t('extra.404') });
  try {
    const { name, email, subject, body } = mailSchema.parse(req.body);
    const data = await transport.sendMail({
      from: { address: email, name },
      to: env.MAIL_RECEIVER,
      subject,
      text: body,
    });
    res.status(200).json({ message: i18n?.t('extra.email-sent'), response: data });
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
