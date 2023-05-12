import React from 'react';

const NavBar = () => {
  return (
    <>
      <nav className='flex flex-col flex-wrap  mx-auto '>
        <a className='flex items-center font-medium text-white bg-black title-font'>
          PropertyWeb
        </a>
        <div className='flex flex-wrap justify-center w-full text-base text-white bg-black md:ml-auto md:mr-auto'>
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
