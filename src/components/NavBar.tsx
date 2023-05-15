import React from 'react';

const NavBar = () => {
  return (
    <>
      <nav className='flex items-center bg-black'>
        <a className='flex text-lg font-medium text-teal-500 bg-black title-font'>
          PropertyWeb
        </a>
        <div className='flex flex-wrap justify-end w-full p-2 text-base text-white bg-black md:ml-auto md:mr-auto'>
          <a className='mr-5'>Services</a>
          <a className='mr-5'>About Us</a>
          <a className='mr-5'>News</a>
          <a className='mr-5'>Contact Us</a>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
