import { type NextPage } from 'next';
import Layout from '@/components/Layout';
import Panel from '@/components/Panel';
import HomePanel from '@/components/panels/HomePanel';
import { type IParallax, Parallax } from '@react-spring/parallax';
import { useRef } from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { FaNode } from 'react-icons/fa';
import {
  SiBootstrap,
  SiDjango,
  SiGit,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiNextdotjs,
  SiPhp,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import AboutPanel from '@/components/panels/AboutPanel';
import Technology from '@/components/Technology';
import EProject from '@/assets/eclothing.png';
import Image from 'next/image';
import AppHead from '@/components/AppHead';

const Home: NextPage = () => {
  const refParallax = useRef<IParallax | null>(null);
  return (
    <>
      <AppHead />

      <Layout>
        <Parallax
          ref={refParallax}
          className='no-scrollbar inset-0 p-4 lg:p-8'
          pages={10}
        >
          <Panel offset={0} speed={2.5} className='flex items-center' id='home'>
            <HomePanel />
          </Panel>
          <Panel
            id='about'
            offset={1}
            speed={0.5}
            className='flex items-center justify-center'
          >
            <AboutPanel />
          </Panel>
          <Panel
            offset={2}
            speed={0.7}
            className='flex flex-col items-center justify-center'
          >
            <h4 className='text-gradient gradient-blue mb-8 text-4xl'>
              Technologies I Love & Use everyday
            </h4>
            <div className='grid grid-cols-7 justify-center gap-8 text-white text-opacity-70'>
              <Technology icon={AiFillHtml5} name='HTML5' />
              <Technology icon={DiCss3} name='CSS3' />
              <Technology icon={SiJavascript} name='Javascript' />
              <Technology icon={SiTypescript} name='Typescript' />
              <Technology icon={SiReact} name='React.js' />
              <Technology icon={FaNode} name='Node.js' />
              <Technology icon={SiMysql} name='Mysql' />
              <Technology
                icon={SiNextdotjs}
                name='Next.js'
                className='col-start-3 col-end-4'
              />
              <Technology
                icon={SiTailwindcss}
                name='TailwindCSS'
                className='col-start-4 col-end-5'
              />
              <Technology
                icon={SiGit}
                name='Git'
                className='col-start-5 col-end-6'
              />
            </div>
          </Panel>
          <Panel
            offset={3}
            speed={0.6}
            className='flex flex-col items-center justify-center'
          >
            <h4 className='text-gradient gradient-blue mb-8 text-4xl'>
              Technologies I Use every once in a while
            </h4>
            <div className='grid grid-flow-col justify-center gap-8 text-white text-opacity-70'>
              <Technology icon={SiPython} name='Python' />
              <Technology icon={SiDjango} name='Django' />
              <Technology icon={SiPhp} name='PHP' />
              <Technology icon={SiLaravel} name='Laravel' />
              <Technology icon={SiBootstrap} name='Bootstrap' />
            </div>
          </Panel>
          <Panel
            offset={4}
            speed={0.5}
            className='flex flex-col items-center justify-center'
          >
            <h4 className='text-gradient gradient-blue mb-8 text-4xl'>
              Projects
            </h4>
            <div>
              <div className='flex max-w-2xl flex-col items-center overflow-hidden rounded-lg border bg-white bg-opacity-70 shadow-md hover:bg-opacity-80'>
                <Image
                  className='aspect-video w-full rounded-t-lg object-cover'
                  src={EProject}
                  alt='e-commerce'
                />
                <div className='flex flex-col justify-between p-4 leading-normal'>
                  <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
                    Noteworthy technology acquisitions 2021
                  </h5>
                  <p className='mb-3 font-normal text-gray-700'>
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                </div>
              </div>
            </div>
          </Panel>
        </Parallax>
      </Layout>
    </>
  );
};

export default Home;
