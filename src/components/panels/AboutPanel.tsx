import Me from '@/assets/me.png';
import Image from 'next/image';

const AboutPanel = () => {
  return (
    <div className='mx-auto flex max-w-5xl items-center'>
      <div className='relative mx-4'>
        <Image
          alt='me'
          src={Me}
          className='aspect-square w-52 rounded-lg bg-white bg-opacity-80 object-cover hover:bg-opacity-60'
        />
        <div className='absolute top-4 left-4 -z-10 h-52 w-52 rounded-lg border-2 border-blue-700' />
      </div>
      <div className='ml-4 max-w-3xl text-lg font-bold leading-8 text-white'>
        <h4 className='text-gradient gradient-blue mb-4 text-4xl'>Who am I</h4>
        <div className='flex flex-col gap-y-2'>
          <p>
            My name is Ismail AJIZOU full stack web developer based in Morocco,
            with +3 years of experience in JavaScript, React.js & Express.js.
          </p>
          <p>
            My enthusiasm for programming started back in 2018, when I decided
            to replicate a simple bash script created by a friend. Then I fell
            in love with computers and started learning web dev.
          </p>
          <p>
            My motiviation is to build projects and turn ideas into code, so
            each time I want to learn something I use it in a project.
          </p>
          <p>
            After getting a computer science degree in 2022, I immediately
            landed my first job as a full stack web developer.
          </p>
          <p>
            Currently I work as web developer, and never miss the chance to
            learn new technologies and improve my skills.
          </p>
        </div>
      </div>
    </div>
  );
};
export default AboutPanel;
