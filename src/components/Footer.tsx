import { Trans, useTranslation } from 'next-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className='text-center text-sm text-white'>
      <Trans as='div'>{t('footer')}</Trans>
    </div>
  );
};
export default Footer;
