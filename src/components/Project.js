import React, { useRef } from 'react'
import { HeartIcon } from '@heroicons/react/solid'
import { EyeIcon } from '@heroicons/react/solid'

function Project({ name, team, likes, views }) {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    videoRef.current.play();
  };

  const handleMouseLeave = () => {
    videoRef.current.pause();
  };

  return (
    <div className='w-full h-[320px] rounded-xl mb-5 shadow-lg'>
      <div
        className='relative w-full h-[200px] overflow-hidden rounded-t-xl'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <video
          ref={videoRef}
          src="https://cdn.dribbble.com/userupload/4267939/file/large-42e8eb5d3a992bdf9e3712f6ddef3969.mp4"
          className='w-full h-full object-cover'
          muted
        />
      </div>
      
      <div className='p-4'>
        <div className='flex items-center'>
          <h3 className='text-[15px] text-black font-bold'>{name}</h3>
          <h3 className='bg-gray-300 text-white p-[2px] text-xs font-bold rounded-md ml-2'>{team}</h3>
        </div>
        <div className='flex space-x-2 mt-2'>
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
