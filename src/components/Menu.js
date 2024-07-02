import React, { useState } from 'react';

function Menu({ projects, setFilteredProjects }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSortByLikes = () => {
    const sortedProjects = [...projects].sort((a, b) => b.likes - a.likes);
    setFilteredProjects(sortedProjects);
    setIsOpen(false);
  };

  const handleSortByViews = () => {
    const sortedProjects = [...projects].sort((a, b) => parseFloat(b.views) - parseFloat(a.views));
    setFilteredProjects(sortedProjects);
    setIsOpen(false);
  };

  const handleRandomSort = () => {
    const shuffledProjects = [...projects].sort(() => Math.random() - 0.5);
    setFilteredProjects(shuffledProjects);
    setIsOpen(false);
  };

  return (
    <div className='flex flex-col items-center justify-center max-w-8xl mt-8 text-gray-600'>
      <div className='flex items-center space-x-4 mb-4'>
        <button className='border border-gray-400 rounded-md h-8 px-3' onClick={handleSortByLikes}>
          Popular
        </button>
        <div className='w-full lg:w-[800px]'>
          <ul className='ml-4 flex flex-wrap justify-between sm:p-[20px]'>
            <li className='hover:text-black cursor-pointer'>All</li>
            <li className='hover:text-black cursor-pointer'>Animation</li>
            <li className='hover:text-black cursor-pointer'>Branding</li>
            <li className='hover:text-black cursor-pointer'>Illustration</li>
            <li className='hover:text-black cursor-pointer'>Mobile</li>
            <li className='hover:text-black cursor-pointer'>Print</li>
            <li className='hover:text-black cursor-pointer'>Product</li>
            <li className='hover:text-black cursor-pointer'>Typography</li>
            <li className='hover:text-black cursor-pointer'>Web Design</li>
          </ul>
        </div>
      </div>
      <div className='flex items-center space-x-4'>
        <button onClick={toggleDropdown} className='flex items-center border border-gray-400 rounded-md h-8 w-[100px] px-3'>
          Filter
        </button>

        {isOpen && (
          <div className='dropdown-menu mt-2 w-full lg:w-[800px]'>
            <ul className='bg-white border border-gray-200 rounded-md shadow-md'>
              <li className='p-2 hover:bg-gray-100 cursor-pointer' onClick={handleSortByLikes}>
                Popularity
              </li>
              <li className='p-2 hover:bg-gray-100 cursor-pointer' onClick={handleSortByViews}>
                Net Worthy
              </li>
              <li className='p-2 hover:bg-gray-100 cursor-pointer' onClick={handleRandomSort}>
                New
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Menu;
