'use client';
import { type TDictionary } from '@/dictionaries';
import { env } from '@/env/client.mjs';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';

const HomePanel = ({ dictionary }: { dictionary: TDictionary }) => {
  return (
    <div className='flex flex-col items-start text-white'>
      <div className='relative max-w-4xl'>
        <p className='text-xl leading-normal'>{dictionary['hero'].title}</p>
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
      <Link
        href={`${env.NEXT_PUBLIC_APP_URL}/resume/en.pdf`}
        target='_blank'
        className='btn-colors relative mt-8 border p-4 backdrop-blur-xs'
      >
        <span className='absolute -right-2 -top-2 h-4 w-4 animate-ping rounded-full bg-blue-600' />
        <span className='absolute -right-2 -top-2 h-4 w-4 rounded-full bg-blue-600' />
        {dictionary['hero'].button}
      </Link>
    </div>
  );
};
export default HomePanel;
