import React from 'react';
import { SearchIcon } from "@heroicons/react/outline";

function Navbar() {
    return (
        <nav className='flex flex-col lg:lex-row justify-between p-6 lg:h-20'>
            <div className='flex item-center lg:w-2/3'>
                <h2 className='font-bold text-xl'>dribble</h2>
                <ul className='hidden lg:flex flex-1 justify-between ml-8 text-sm text-gray-600 font-bold'>
                    <li>Inspiration</li>
                    <li>Find Work</li>
                    <li>Learn Design</li>
                    <li>Go Pro</li>
                    <li>Marketplace</li>
                    <li>Hire Designerd</li>
                </ul>
            </div>
            <div className='flex items-center justify-end w-[28%] lg:w-1/3'>
                <SearchIcon className="h-4 mr-4 lg:hidden" />
                <h3 className='hidden lg:block'>Sign in ? Sign up</h3>
                <button className='bg-pink-500 px-4 py-2 text-sm font-bold text-white rounded-md hover:bg-pink-400 ml-4 lg:ml-8'>Start a free project </button>
            </div>


        </nav>
    );
}

export default Navbar;
