import React from 'react';

export const Menu = () => {
  return (
    <>
      <div className='flex flex-col flex-wrap  mx-auto '>
        <div className='flex flex-wrap justify-center w-full text-base text-white bg-black md:ml-auto md:mr-auto'>
          <a className='mr-5'>Services</a>
          <a className='mr-5'>About Us</a>
          <a className='mr-5'>News</a>
          <a className='mr-5'>Contact Us</a>
        </div>
      </div>
    </>
  );
};
