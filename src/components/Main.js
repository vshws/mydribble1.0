import React from 'react'
import img1 from '../img/img1.jpg'

function Main() {
  return (
    <div className='relative h-[480px]'>
       <div className='absolute z-20 flex h-full flex-col items-start justify-center space-y-4 ml-12 text-white font-bold w-[800px]'>
         <h2 className='text-4xl lg:text-6xl'>Discover the world's top designer and creative</h2>
         <p className='text-sm lg:text-base>
         The world’s leading brands use Dribbble to hire creative talent. Browse millions of top-rated portfolios to find your perfect creative match.
         </p>
         <button className='bg-pink-500 px-4 py-2 text-sm lg:text-base font-bold text-white rounded-md hover:bg-pink-400'>Sign up</button>
       </div>
    
    <div className='bg-black absolute opacity-70 inset-0'></div>
    <img className='w-full h-full object-cover' src={img1}></img>
    </div>
  )
}

export default Main
