import { getDictionary } from '@/dictionaries';
import { env } from '@/env/server.mjs';
import { init } from '@/utils/init_i18n';
import { mailSchema } from '@/utils/schemas/mail.schema';
import { type Locale } from 'i18n-config';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

const transport = nodemailer.createTransport({
  host: env.MAILTRAP_HOST,
  port: 2525,
  auth: {
    user: env.MAILTRAP_USER,
    pass: env.MAILTRAP_PASS,
  },
});

export async function POST(
  req: Request,
  context: { params: { lang: Locale } }
) {
  init(context.params.lang);
  const dictionary = await getDictionary(context.params.lang);
  try {
    const reqBody = await req.json();
    const { name, email, subject, body } = mailSchema.parse(reqBody);
    await transport.sendMail({
      from: { address: email, name },
      to: env.MAIL_RECEIVER,
      subject,
      text: body,
    });
    return NextResponse.json({
      message: dictionary['extra']['email-sent'],
    });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { message: dictionary['extra']['invalid-inputs'], error: err },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { message: dictionary['extra']['unknown-error'], error: err },
      { status: 500 }
    );
  }
}
