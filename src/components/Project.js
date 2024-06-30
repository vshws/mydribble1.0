import React from 'react'
import img2 from '../img/img2.jpg'
import { HeartIcon } from '@heroicons/react/solid'
import { EyeIcon } from '@heroicons/react/solid'

function Project({ name, team, likes, views }) {
  return (
    <div className='w-full h-[270px] rounded-xl mb-5 shadow-lg'>
      <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/9d/27/b3/fb-img-1536833683869.jpg?w=1200&h=-1&s=1" alt='' className='w-full h-2/3 object-cover rounded-t-xl'/>
      <div className='p-3 flex justify-between'>
        <div className='flex items-center'>
          <h3 className='text-[15px] text-black font-bold'>{name}</h3>
          <h3 className='bg-gray-300 text-white p-[2px] text-xs font-bold rounded-md ml-2'>{team}</h3>
        </div>
        <div className='flex space-x-2'>
          <div className='flex items-center'>
            <HeartIcon className='h-5 w-5 text-red-500'/>
            <h2 className='ml-1'>{likes}</h2>
          </div>
          <div className='flex items-center'>
            <EyeIcon className='h-5 w-5 text-gray-500'/>
            <h2 className='text-sm'>{views}</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
