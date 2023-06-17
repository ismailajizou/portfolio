import EmailTemplate from '@/components/EmailTemplate';
import { env } from '@/env/server.mjs';
import { mailSchema } from '@/utils/schemas/mail.schema';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const reqBody = await req.json();
    const { name, email, subject, body } = mailSchema.parse(reqBody);
    await resend.emails.send({
      from: email,
      to: env.MAIL_RECEIVER,
      subject: subject,
      react: EmailTemplate({ name, body }),
    });
    return NextResponse.json({
      message: 'Email sent!',
    });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { message: 'Invalid inputs', error: err },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { message: 'An unknown error occurred.', error: err },
      { status: 500 }
    );
  }
}
