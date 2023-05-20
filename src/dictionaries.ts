import 'server-only';
import type { Locale } from '../i18n-config';

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  en: () => import('./dictionaries/en.json').then(module => module.default),
  fr: () => import('./dictionaries/fr.json').then(module => module.default),
};

export const getDictionary = async (locale: Locale) => {
  if(!dictionaries[locale]) throw new Error(`No dictionary for locale ${locale}`);
  return dictionaries[locale]();
};
export type TDictionary = Awaited<ReturnType<typeof getDictionary>>;
