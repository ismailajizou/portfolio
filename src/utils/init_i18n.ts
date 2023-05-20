import { zodI18nMap } from 'zod-i18n-map';
import en from 'zod-i18n-map/locales/en/zod.json';
import fr from 'zod-i18n-map/locales/fr/zod.json';
import i18next from 'i18next';
import type { Locale } from 'i18n-config';
import { z } from 'zod';

export const init = (locale: Locale) => {
  i18next.init({
    lng: locale,
    resources: {
      fr: { zod: fr },
      en: { zod: en },
    },
  });
  z.setErrorMap(zodI18nMap);
};
