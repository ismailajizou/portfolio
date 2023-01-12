import Brain from '@/assets/brain.png';
import EProject from '@/assets/eclothing.png';
import AppHead from '@/components/AppHead';
import Footer from '@/components/Footer';
import IconButtonWithText from '@/components/IconButtonWithText';
import Layout from '@/components/Layout';
import Panel from '@/components/Panel';
import AboutPanel from '@/components/panels/AboutPanel';
import ContactPanel from '@/components/panels/ContactPanel';
import HomePanel from '@/components/panels/HomePanel';
import Technology from '@/components/Technology';
import { Parallax, type IParallax } from '@react-spring/parallax';
import type {
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import { useRef } from 'react';
import { AiFillEye, AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { FaGithub, FaNode } from 'react-icons/fa';
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

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
}

const Home: NextPage = (
  _props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  const { t } = useTranslation();

  const refParallax = useRef<IParallax | null>(null);
  return (
    <>
      <AppHead />

      <Layout>
        <Parallax
          ref={refParallax}
          className='no-scrollbar inset-0 p-4 lg:p-8'
          pages={7}
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
            <h4 className='text-gradient gradient-blue mb-8 text-4xl font-bold'>
              {t('about.lovedLangs')}
            </h4>
            <div className='grid grid-cols-7 justify-center gap-8 text-white text-opacity-70'>
              <Technology icon={AiFillHtml5} name='HTML5' />
              <Technology icon={DiCss3} name='CSS3' />
              <Technology icon={SiJavascript} name='Javascript' />
              <Technology icon={SiTypescript} name='Typescript' />
              <Technology icon={SiReact} name='React.js' />
              <Technology icon={FaNode} name='Node.js' />
              <Technology icon={SiMysql} name='MySQL' />
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
            <h4 className='text-gradient gradient-blue mb-8 text-4xl font-bold'>
              {t('about.casualLangs')}
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
            id='work'
            offset={4}
            speed={0.5}
            className='flex flex-col items-center justify-center'
          >
            <h4 className='text-gradient gradient-blue mb-8 text-4xl font-bold'>
              {t('projects.title')}
            </h4>
            <div className='mx-auto mt-4 flex max-w-5xl items-center'>
              <Image
                className='aspect-video w-96 overflow-hidden rounded-lg object-cover'
                src={EProject}
                alt='e-clothing app'
              />
              <div className='ml-4 max-w-3xl text-lg font-bold leading-8 text-white'>
                <h4 className='text-gradient gradient-blue mb-4 text-4xl italic'>
                  {t('projects.eclothing.title')}
                </h4>
                <div className='flex flex-col gap-y-2'>
                  <p>{t('projects.eclothing.description')}</p>

                  <div>
                    <p>{t('extra.built-with')}</p>
                    <ul className='flex items-center divide-x-2 text-gray-300'>
                      <li className='px-2'>React.js</li>
                      <li className='px-2'>SASS</li>
                      <li className='px-2'>Firebase</li>
                      <li className='px-2'>Stripe</li>
                    </ul>
                  </div>
                  <div className='flex gap-4'>
                    <IconButtonWithText
                      href='https://github.com/ismailajizou/E-Clothing'
                      icon={FaGithub}
                    >
                      {t('extra.code')}
                    </IconButtonWithText>
                    <IconButtonWithText
                      href='https://e-clothing.vercel.app'
                      icon={AiFillEye}
                    >
                      {t('extra.preview')}
                    </IconButtonWithText>
                  </div>
                </div>
              </div>
            </div>
          </Panel>
          <Panel
            offset={5}
            speed={0.5}
            className='flex flex-col items-center justify-center'
          >
            <div className='mx-auto flex max-w-5xl items-center'>
              <Image
                className='aspect-video w-96 overflow-hidden rounded-lg object-cover'
                src={Brain}
                alt='brain project'
              />
              <div className='ml-4 max-w-3xl text-lg font-bold leading-8 text-white'>
                <h4 className='text-gradient gradient-blue mb-4 text-4xl italic'>
                  {t('projects.brain.title')}
                </h4>
                <div className='flex max-w-3xl flex-col gap-y-2'>
                  <p>{t('projects.brain.description')}</p>

                  <div>
                    <p>{t('extra.built-with')}</p>
                    <ul className='flex items-center divide-x-2 text-gray-300'>
                      <li className='px-2'>React.js</li>
                      <li className='px-2'>Chakra.UI</li>
                      <li className='px-2'>Express.js</li>
                      <li className='px-2'>PostgreSQL</li>
                    </ul>
                  </div>
                  <div className='flex gap-4'>
                    <IconButtonWithText
                      href='https://github.com/ismailajizou/Face-Detection-App'
                      icon={FaGithub}
                    >
                      {t('extra.code')}
                    </IconButtonWithText>
                  </div>
                </div>
              </div>
            </div>
          </Panel>
          <Panel
            id='contact'
            offset={6}
            speed={0.2}
            className='flex flex-col items-center justify-center'
          >
            <div>
              <ContactPanel />
              <Footer />
            </div>
          </Panel>
        </Parallax>
      </Layout>
    </>
  );
};

export default Home;
