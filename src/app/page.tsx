import Portfolio from '@/components/Portfolio';
import {dictionaries} from '@/dictionaries';

const Page = async () => {
  const dict = await dictionaries.en();
  return <Portfolio dictionary={dict} />;
};
export default Page;
