import { useTranslation } from 'react-i18next';
import { TypeAnimation } from 'react-type-animation';

const HomePanel = () => {
  const { t } = useTranslation();
  return (
    <div className='text-white'>
      <div className='max-w-4xl'>
        <p className='text-xl leading-normal'>{t('hero.title')}</p>
        <p className='bg-gradient-to-r from-cyan-500 via-blue-400 to-blue-500 bg-clip-text text-7xl font-bold leading-normal text-transparent'>
          Ismail AJIZOU
        </p>
        <TypeAnimation
          className='text-3xl leading-normal'
          sequence={[
            'Full stack web developer',
            1000,
            'Javascript / Typescript developer',
            1000,
            'React.js / Next.js developer',
            1000,
            'JAM stack developer',
            1000,
          ]}
          wrapper='p'
          cursor={true}
          repeat={Infinity}
        />
      </div>
      <button className='btn-colors relative mt-8 border p-4 backdrop-blur-xs'>
        <span className='absolute -top-2 -right-2 h-4 w-4 animate-ping rounded-full bg-blue-600' />
        <span className='absolute -top-2 -right-2 h-4 w-4 rounded-full bg-blue-600' />
        {t('hero.button')}
      </button>
    </div>
  );
};
export default HomePanel;
