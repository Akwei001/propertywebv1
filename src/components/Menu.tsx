import React, { useState } from 'react';
import Link from 'next/link';

export const Menu = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const toggleDropdown1 = () => {
    setShowDropdown1(!showDropdown1);
  };
  const toggleDropdown2 = () => {
    setShowDropdown2(!showDropdown2);
  };
  return (
    <>
      <nav className='bg-gray-800'>
        <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
          <div className='flex items-center justify-end h-16'>
            <div className='flex items-center'>
              <div className='flex-shrink-0'>
                <Link href='/'>
                  <span className='text-xl font-bold text-white'>My Site</span>
                </Link>
              </div>
              <div className='hidden md:block'>
                <div className='flex items-baseline ml-10 space-x-4'>
                  <div className='relative'>
                    <button
                      className='px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
                      onClick={toggleDropdown1}
                    >
                      Home
                    </button>
                    {showDropdown1 && (
                      <div
                        className='absolute right-0 z-10 w-56 mt-2 origin-top-left bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5'
                        role='menu'
                        aria-orientation='vertical'
                        aria-labelledby='options-menu'
                      >
                        <Link href='/'>
                          <span
                            className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                            role='menuitem'
                          >
                            Lorem ipsum.
                          </span>
                        </Link>
                        <Link href='/'>
                          <span
                            className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                            role='menuitem'
                          >
                            Lorem ipsum.
                          </span>
                        </Link>
                        <Link href='/'>
                          <span
                            className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                            role='menuitem'
                          >
                            Lorem ipsum.
                          </span>
                        </Link>
                      </div>
                    )}

                    <button
                      className='px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
                      onClick={toggleDropdown}
                    >
                      Products
                    </button>
                    {showDropdown && (
                      <div
                        className='absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5'
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
                  <Link href='/'>
                    <button
                      className='px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white'
                      onClick={toggleDropdown2}
                    >
                      Lorem.
                    </button>
                    {showDropdown2 && (
                      <div
                        className='absolute right-0 z-10 w-56 mt-2 origin-top-left bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5'
                        role='menu'
                        aria-orientation='vertical'
                        aria-labelledby='options-menu'
                      >
                        <Link href='/'>
                          <span
                            className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                            role='menuitem'
                          >
                            Lorem ipsum.
                          </span>
                        </Link>
                        <Link href='/'>
                          <span
                            className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                            role='menuitem'
                          >
                            Lorem ipsum.
                          </span>
                        </Link>
                        <Link href='/'>
                          <span
                            className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                            role='menuitem'
                          >
                            Lorem ipsum.
                          </span>
                        </Link>
                      </div>
                    )}
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
