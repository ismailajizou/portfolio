import { z } from 'zod';
import { t } from 'i18next';
import { i18n } from 'next-i18next';

export const mailSchema = z.object({
  name: z
    .string({
      invalid_type_error: i18n?.t('zod-errors.invalid_type_error') ?? '',
      required_error: i18n?.t('zod-errors.required_error') ?? '',
    })
    .min(3, i18n?.t('zod-errors.min') ?? '')
    .max(50, i18n?.t('zod-errors.max') ?? ''),
  email: z
    .string({
      invalid_type_error: i18n?.t('zod-errors.invalid_type_error') ?? '',
      required_error: i18n?.t('zod-errors.required_error') ?? '',
    })
    .email(i18n?.t('zod-errors.email') ?? ''),
  subject: z
    .string({
      invalid_type_error: i18n?.t('zod-errors.invalid_type_error') ?? '',
      required_error: i18n?.t('zod-errors.required_error') ?? '',
    })
    .min(3, i18n?.t('zod-errors.min') ?? '')
    .max(60, i18n?.t('zod-errors.max') ?? ''),
  body: z
    .string({
      invalid_type_error: i18n?.t('zod-errors.invalid_type_error') ?? '',
      required_error: i18n?.t('zod-errors.required_error' ?? ''),
    })
    .min(10, i18n?.t('zod-errors.min') ?? '')
    .max(500, i18n?.t('zod-errors.max') ?? ''),
});

export type TMail = z.infer<typeof mailSchema>;
