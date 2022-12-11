import { env } from '@/env/client.mjs';
import Head from 'next/head';
import Script from 'next/script';

const AppHead = () => {
  return (
    <>
      <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=${env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy='lazyOnload' id='analytics'>
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });`}
      </Script>
      <Head>
        <title>Ismail AJIZOU</title>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
        <meta
          name='twitter:description'
          content="Hi! I'm Ismail Ajizou, full stack developer based in Morocco."
        />
        <meta name='twitter:card' content='summary' />
        <meta
          name='description'
          content="Hello! I'm Ismail AJIZOU, full stack developer based in Morocco."
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content={`/icon.png`}
        />
        <meta name='twitter:title' content='Ismail AJIZOU' />
        <link
          rel='apple-touch-icon'
          type='image/png'
          sizes='180x180'
          href='/icons/apple-touch-icon-180x180.png?h=b7d676e19d7c1e3b73cb4467b5e2e297'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/icons/favicon-16x16.png?h=329fa8aa2d5883614940429e5efabbcd'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/icons/favicon-32x32.png?h=75196a140f3d7ef0ad355a2962dd68f2'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='180x180'
          href='/icons/apple-touch-icon-180x180.png?h=b7d676e19d7c1e3b73cb4467b5e2e297'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='192x192'
          href='/icons/android-chrome-192x192.png?h=d01ebd4daf1f08aa03e2b75fbba2454f'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='500x500'
          href='/icons/icon.png?h=f8061fafc375c0ea13feaf2d08db9f6f'
        />
      </Head>
    </>
  );
};
export default AppHead;
