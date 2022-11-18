import { AiOutlineDown } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='flex h-16 items-center justify-center text-center text-sm text-white'>
      <p className='animate-bounce'>
        Scroll to bottom <AiOutlineDown className='mx-auto' />
      </p>
    </div>
  );
};
export default Footer;
