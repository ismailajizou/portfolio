import Portfolio from '@/components/Portfolio';
import type { Locale } from 'i18n-config';
import { getDictionary } from '../../dictionaries';

const Home = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const dict = await getDictionary(lang);
  return <Portfolio dictionary={dict} locale={lang} />;
};

export default Home;
