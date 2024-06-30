import React from 'react';
import { SearchIcon } from "@heroicons/react/outline";

function Navbar() {
    return (
        <nav className='flex flex-col lg:flex-row lg:justify-between lg:items-center p-6 lg:h-20'>
            <div className='flex items-center lg:w-[740px]'>
                <h2 className='font-bold text-xl'>dribble</h2>
                <ul className='flex flex-wrap items-center justify-center lg:justify-start ml-0 lg:ml-8 text-sm lg:text-base text-gray-600 font-bold'>
                    <li className='mx-1 lg:mx-2'>Inspiration</li>
                    <li className='mx-1 lg:mx-2'>Find Work</li>
                    <li className='mx-1 lg:mx-2'>Learn Design</li>
                    <li className='mx-1 lg:mx-2'>Go Pro</li>
                    <li className='mx-1 lg:mx-2'>Marketplace</li>
                    <li className='mx-1 lg:mx-2'>Hire Designers</li>
                </ul>
            </div>
            
         
            <div className='flex justify-between items-center w-full lg:w-auto mt-4 lg:mt-0'>
                <div className='flex items-center w-full lg:w-[28%]'>
                    <SearchIcon className="h-4 mr-2 " /> 
                    <h3 className='text-gray-600'>Sign in / Sign up</h3>
                </div>
                <button className='bg-pink-500 px-4 py-2 text-[15px] font-bold text-white rounded-md lg:ml-4 hover:bg-pink-400'>
                    Start a free project
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
