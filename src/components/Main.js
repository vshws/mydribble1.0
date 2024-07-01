import React from 'react';
import img1 from '../img/img1.jpg';

function Main() {
  return (
    <div className='relative h-[480px] w-full'>
      <div className='mx-auto absolute z-20 flex flex-col items-start justify-center space-y-4 ml-12 text-white font-bold w-full h-full p-4'>
        <h2 className='text-5xl leading-tight'>
          Discover the world's top designers and creatives
        </h2>
        <p className='ml-0 text-lg'>
          The world’s leading brands use Dribbble to hire creative talent. Browse millions of top-rated portfolios to find your perfect creative match.
        </p>
        <button className='bg-pink-500 px-4 py-2 text-lg font-bold text-white rounded-md hover:bg-pink-400'>
          Sign up
        </button>
      </div>
      <div className='bg-black absolute opacity-70 w-full h-full'></div>
      <img className='w-full h-full object-cover' src={img1} alt='Background' />
    </div>
  );
}

export default Main;
