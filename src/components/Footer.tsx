import type { TDictionary } from '@/dictionaries';

const Footer = ({ dictionary }: { dictionary: TDictionary }) => {
  return (
    <div className='text-center text-sm text-white'>
      <p>{dictionary['footer'].main}</p>
      <p>{dictionary['footer'].copyright}</p>
    </div>
  );
};
export default Footer;
