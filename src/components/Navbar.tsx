'use client';
import { type TDictionary } from '@/dictionaries';
import type { Locale } from 'i18n-config';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { CgProfile } from 'react-icons/cg';
import { FaHome } from 'react-icons/fa';
import { HiTranslate } from 'react-icons/hi';
import { IoImages } from 'react-icons/io5';
import { RiSendPlaneFill } from 'react-icons/ri';
import ButtonsStack from './ButtonsStack';
import IconButtonWithText from './IconButtonWithText';

const Navbar = ({
  dictionary,
  locale,
}: {
  dictionary: TDictionary;
  locale: string;
}) => {
  const pathName = usePathname();
  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <div className='relative flex h-16 w-full items-center justify-between px-4 py-1'>
      <div className='relative aspect-square h-full'>
        <Image src='/icons/icon.svg' alt='logo' fill priority />
      </div>
      <ButtonsStack direction='horizontal'>
        <IconButtonWithText target='_blank' href='#home' icon={FaHome}>
          {dictionary['navigation'].home}
        </IconButtonWithText>
        <IconButtonWithText target='_blank' href='#about' icon={CgProfile}>
          {dictionary['navigation'].about}
        </IconButtonWithText>
        <IconButtonWithText target='_blank' href='#work' icon={IoImages}>
          {dictionary['navigation'].work}
        </IconButtonWithText>
        <IconButtonWithText
          target='_blank'
          href='#contact'
          icon={RiSendPlaneFill}
        >
          {dictionary['navigation'].contact}
        </IconButtonWithText>
        <IconButtonWithText
          href={redirectedPathName(locale === 'en' ? 'fr' : 'en')}
          icon={HiTranslate}
        >
          {locale === 'en' ? 'fr' : 'en'}
        </IconButtonWithText>
      </ButtonsStack>
    </div>
  );
};
export default Navbar;
