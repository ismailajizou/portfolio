import type { FC, ReactNode } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import ParticlesBg from './ParticlesBg';
import Sidebar from './Sidebar';
import { Space_Mono } from '@next/font/google'

interface Props {
  className?: string;
  children?: ReactNode;
}

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono'
});

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className={`relative h-screen w-screen ${spaceMono.variable} font-sans`}>
      <ParticlesBg />
      <div className='max-w-screen relative flex h-screen max-h-screen w-screen flex-col'>
        <Navbar />
        <div className='flex flex-grow'>
          <Sidebar />
          <div className='relative h-full max-h-full w-full max-w-full overflow-auto'>
            {children}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default Layout;
