import Image from 'next/image';
import { CgProfile } from 'react-icons/cg';
import { FaHome } from 'react-icons/fa';
import { IoImages } from 'react-icons/io5';
import { RiSendPlaneFill } from 'react-icons/ri';
import ButtonsStack from './ButtonsStack';
import IconButtonWithText from './IconButtonWithText';
import { HiTranslate } from 'react-icons/hi';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
const Navbar = () => {
  const { locale, asPath } = useRouter();
  const { t } = useTranslation();
  return (
    <div className='relative flex h-16 w-full items-center justify-between px-4 py-1'>
      <div className='relative aspect-square h-full'>
        <Image src='/icons/icon.svg' alt='logo' fill priority />
      </div>
      <ButtonsStack direction='horizontal'>
        <IconButtonWithText href='#home' icon={FaHome}>
          {t('navigation.home')}
        </IconButtonWithText>
        <IconButtonWithText href='#about' icon={CgProfile}>
          {t('navigation.about')}
        </IconButtonWithText>
        <IconButtonWithText href='#work' icon={IoImages}>
          {t('navigation.work')}
        </IconButtonWithText>
        <IconButtonWithText href='#contact' icon={RiSendPlaneFill}>
          {t('navigation.contact')}
        </IconButtonWithText>
        <IconButtonWithText
          href={asPath}
          locale={locale === 'en' ? 'fr' : 'en'}
          icon={HiTranslate}
        >
          {locale === 'en' ? 'fr' : 'en'}
        </IconButtonWithText>
      </ButtonsStack>
    </div>
  );
};
export default Navbar;
