import Portfolio from '@/components/Portfolio';
// import { getDictionary } from '@/dictionaries';
import {dictionaries} from '@/dictionaries';
const Page = async () => {
  const dict = await dictionaries.en();
  return <Portfolio dictionary={dict} locale='en' />;
};
export default Page;
