import i18n from 'i18next';
import { z } from 'zod';
import { makeZodI18nMap } from 'zod-i18n-map';
import en from 'zod-i18n-map/locales/en/zod.json';
import fr from 'zod-i18n-map/locales/fr/zod.json';

i18n.init({
  lng: i18n.language,
  fallbackLng: 'en',
  resources: {
    en: { zod: en },
    fr: { zod: fr },
  },
  interpolation: {
    skipOnVariables: false,
  },
});

z.setErrorMap(makeZodI18nMap(i18n.t));

export const mailSchema = z.object({
  name: z.string().min(3).max(50),
  email: z.string().email(),
  subject: z.string().min(3).max(60),
  body: z.string().min(10).max(500),
});

export type TMail = z.infer<typeof mailSchema>;
