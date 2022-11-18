const HomePanel = () => {
  return (
    <div className='font-bold text-white'>
      <div className='max-w-4xl'>
        <p className='text-4xl leading-normal'>Hi👋, my name is</p>
        <p className='bg-gradient-to-r from-cyan-500 via-blue-400 to-blue-500 bg-clip-text text-6xl leading-normal text-transparent'>
          Ismail Ajizou
        </p>
        <p className='text-2xl leading-normal'>
          Full stack web developer, specialized in turning ideas into code 👨‍💻.
        </p>
      </div>
      <button className='btn-colors relative mt-8 border p-4 backdrop-blur-xs'>
        <span className='absolute -top-2 -right-2 h-4 w-4 animate-ping rounded-full bg-blue-600' />
        <span className='absolute -top-2 -right-2 h-4 w-4 rounded-full bg-blue-600' />
        Check out my resume
      </button>
    </div>
  );
};
export default HomePanel;
