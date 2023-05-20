'use client'
import { type TDictionary } from '@/dictionaries';
import type { FC, ReactNode } from 'react';
import Navbar from './Navbar';
import ParticlesBg from './ParticlesBg';
import Sidebar from './Sidebar';

interface Props {
  className?: string;
  children?: ReactNode;
  locale: string
  dictionary: TDictionary
}


const Layout: FC<Props> = ({ children, locale, dictionary }) => {
  return (
    <div
      className={`relative h-screen w-screen scroll-smooth bg-black`}
    >
      <ParticlesBg />
      <div className='max-w-screen relative  flex h-screen max-h-screen w-screen flex-col'>
        <Navbar locale={locale} dictionary={dictionary} />
        <div className='flex flex-grow'>
          <Sidebar />
          <div className='relative h-full max-h-full w-full max-w-full overflow-auto'>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Layout;
