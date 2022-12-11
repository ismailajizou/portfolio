import Me from '@/assets/me.png';
import Image from 'next/image';
import { Trans, useTranslation } from 'react-i18next';

const AboutPanel = () => {
  const { t } = useTranslation()
  return (
    <div className='mx-auto flex max-w-5xl items-center'>
      <div className='relative mx-4'>
        <Image
          alt='me'
          src={Me}
          className='aspect-square w-52 rounded-lg bg-white bg-opacity-80 object-cover hover:bg-opacity-60'
        />
        <div className='absolute top-4 left-4 -z-10 h-52 w-52 rounded-lg border-2 border-blue-700' />
      </div>
      <div className='ml-4 max-w-3xl text-lg font-bold leading-8 text-white'>
        <h4 className='text-gradient gradient-blue mb-4 text-4xl'>{t('about.title')}</h4>
          <Trans as='p'>{t('about.description')}</Trans>
      </div>
    </div>
  );
};
export default AboutPanel;
