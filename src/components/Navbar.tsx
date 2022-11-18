import Image from 'next/image';
import { CgProfile } from 'react-icons/cg';
import { FaHome } from 'react-icons/fa';
import { IoImages } from 'react-icons/io5';
import { RiSendPlaneFill } from 'react-icons/ri';
import ButtonsStack from './ButtonsStack';
import IconButtonWithText from './IconButtonWithText';

const Navbar = () => {
  return (
    <div className='flex h-16 w-full items-center justify-between px-4 py-1'>
      <div className='relative h-full'>
        <Image src='/icons/icon.svg' alt='logo' fill priority />
      </div>
      <ButtonsStack direction='horizontal'>
        <IconButtonWithText icon={FaHome}>Home</IconButtonWithText>
        <IconButtonWithText icon={CgProfile}>About</IconButtonWithText>
        <IconButtonWithText icon={IoImages}>Work</IconButtonWithText>
        <IconButtonWithText icon={RiSendPlaneFill}>Contact</IconButtonWithText>
      </ButtonsStack>
    </div>
  );
};
export default Navbar;
