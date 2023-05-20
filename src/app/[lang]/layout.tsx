import '@/styles/globals.css';
import { Space_Mono } from 'next/font/google';
import type { Locale } from '../../../i18n-config';
import { i18n } from '../../../i18n-config';
import type { Metadata } from 'next';
import Script from 'next/script';
import { env } from '@/env/client.mjs';

export const metadata: Metadata = {
  title: 'Ismail Ajizou',
  description:
    "Hello! I'm Ismail AJIZOU, full stack developer based in Morocco.",
  twitter: {
    title: 'Ismail Ajizou',
    description:
      "Hi! I'm Ismail Ajizou, full stack developer based in Morocco.",
    card: 'summary',
  },
  openGraph: {
    type: 'website',
    title: 'Ismail Ajizou',
    description:
      "Hi! I'm Ismail Ajizou, full stack developer based in Morocco.",
  },
};

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }));
}
const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
});
const RootLayout = async ({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) => {
  if ((lang as unknown) === 'favicon.ico') return;
  return (
    <html lang={lang}>
      <body className={`${spaceMono.className}`}>{children}</body>
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
    </html>
  );
};
export default RootLayout;
