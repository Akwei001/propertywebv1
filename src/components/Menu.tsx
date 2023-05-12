import React, { useState } from 'react';
import Link from 'next/link';

export const Menu = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <>
      <nav className='bg-gray-800'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <div className='flex items-center'>
              <div className='flex-shrink-0'>
                <Link href='/'>
                  <span className='text-white font-bold text-xl'>My Site</span>
                </Link>
              </div>
              <div className='hidden md:block'>
                <div className='ml-10 flex items-baseline space-x-4'>
                  <Link href='/'>
                    <span className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                      Home
                    </span>
                  </Link>
                  <div className='relative'>
                    <button
                      className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
                      onClick={toggleDropdown}
                    >
                      Products
                    </button>
                    {showDropdown && (
                      <div
                        className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10'
                        role='menu'
                        aria-orientation='vertical'
                        aria-labelledby='options-menu'
                      >
                        <Link href='/products'>
                          <span
                            className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                            role='menuitem'
                          >
                            All Products
                          </span>
                        </Link>
                        <Link href='/products/categories'>
                          <span
                            className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                            role='menuitem'
                          >
                            By Category
                          </span>
                        </Link>
                        <Link href='/products/search'>
                          <span
                            className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                            role='menuitem'
                          >
                            Search
                          </span>
                        </Link>
                      </div>
                    )}
                  </div>
                  <Link href='/about'>
                    <span className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                      About
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
