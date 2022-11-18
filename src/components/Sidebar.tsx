import { FaLinkedinIn, FaGithub, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import ButtonsStack from './ButtonsStack';
import IconButton from './IconButton';

const Sidebar = () => {
  return (
    <div className='mx-auto flex h-full w-16 items-center justify-center'>
      <ButtonsStack className=''>
        <IconButton icon={SiGmail} />
        <IconButton icon={FaLinkedinIn} />
        <IconButton icon={FaGithub} />
        <IconButton icon={FaFacebookF} />
        <IconButton icon={FaTwitter} />
      </ButtonsStack>
    </div>
  );
};
export default Sidebar;
