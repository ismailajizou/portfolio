import Me from '@/assets/me.png';
import { type TDictionary } from '@/dictionaries';
import Image from 'next/image';

const AboutPanel = ({
  dictionary,
}: {
  dictionary: TDictionary;
}) => {
  // const dict = await getDictionary(locale);
  return (
    <div className='mx-auto flex max-w-5xl items-center'>
      <div className='relative mx-4'>
        <Image
          alt='me'
          src={Me}
          className='aspect-square w-52 rounded-lg bg-white bg-opacity-80 object-cover hover:bg-opacity-60'
        />
        <div className='absolute left-4 top-4 -z-10 h-52 w-52 rounded-lg border-2 border-blue-700' />
      </div>
      <div className='ml-4 max-w-3xl text-lg font-bold leading-8 text-white'>
        <h4 className='text-gradient gradient-blue mb-4 text-4xl'>
          {dictionary['about'].title}
        </h4>
        <p>{dictionary['about'].description}</p>
      </div>
    </div>
  );
};
export default AboutPanel;
