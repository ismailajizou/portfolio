'use client'
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Container, Engine } from 'tsparticles-engine';

const ParticlesBg = () => {
  const particlesInit = async (main: Engine) => {
    // console.log(main);

    await loadFull(main);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const particlesLoaded = (
    _container: Container | undefined
  ): Promise<void> => {
    // console.log(container);
    return new Promise(() => null);
  };

  return (
    <Particles
      className='fixed inset-0  m-0 h-screen w-screen p-0'
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        autoPlay: true,
        detectRetina: true,
        pauseOnBlur: false,
        fpsLimit: 60,
        pauseOnOutsideViewport: false,
        background: {
          // color: '#171717',
          position: 'fixed',
        },
        particles: {
          color: {
            value: '#fff',
          },
          links: {
            color: '#fff',
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 500,
            },
            value: 20,
          },
          opacity: {
            value: 0.3,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        interactivity: {
          modes: {
            grab: {
              distance: 250,
            },
          },
          events: {
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            // onClick: {
            //   enable: true,
            //   mode: 'repulse',
            // },
          },
        },
        backgroundMode: {
          zIndex: -50,
          enable: false,
        },
      }}
    />
  );
};
export default ParticlesBg;
