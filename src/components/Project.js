import React, { useState } from 'react';
import { HeartIcon, EyeIcon } from '@heroicons/react/solid';

function Project({ name, team, likes, views, img }) {
  const [isHovered, setIsHovered] = useState(false);
  const [currentLikes, setCurrentLikes] = useState(likes);
  const [isLiked, setIsLiked] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleLikeClick = () => {
    if (isLiked) {
      setCurrentLikes(currentLikes - 1);
    } else {
      setCurrentLikes(currentLikes + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div
      className='w-full h-[320px] rounded-xl mb-5 shadow-lg'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className='relative w-full h-[200px] overflow-hidden rounded-t-xl'>
        {/* Using an img tag to fill the div */}
        <img
          src={img}
          alt={name}
          className='absolute inset-0 w-full h-full object-cover rounded-t-xl'
        />
        {isHovered && (
          <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
            <div className='text-white text-center'>
              <h3 className='text-[15px] font-bold'>{name}</h3>
              <h3 className='bg-gray-300 text-white p-[2px] text-xs font-bold rounded-md mt-2'>{team}</h3>
              <div className='flex space-x-2 mt-2'>
                <div className='flex items-center cursor-pointer' onClick={handleLikeClick}>
                  <HeartIcon className={`h-5 w-5 ${isLiked ? 'text-red-500' : 'text-gray-500'}`} />
                  <h2 className='ml-1'>{currentLikes}</h2>
                </div>
                <div className='flex items-center'>
                  <EyeIcon className='h-5 w-5 text-gray-500' />
                  <h2 className='text-sm'>{views}</h2>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className='p-4'>
        <div className='flex items-center'>
          <h3 className='text-[15px] text-black font-bold'>{name}</h3>
          <h3 className='bg-gray-300 text-white p-[2px] text-xs font-bold rounded-md ml-2'>{team}</h3>
        </div>
        <div className='flex space-x-2 mt-2'>
          <div className='flex items-center cursor-pointer' onClick={handleLikeClick}>
            <HeartIcon className={`h-5 w-5 ${isLiked ? 'text-red-500' : 'text-gray-500'}`} />
            <h2 className='ml-1'>{currentLikes}</h2>
          </div>
          <div className='flex items-center'>
            <EyeIcon className='h-5 w-5 text-gray-500' />
            <h2 className='text-sm'>{views}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
