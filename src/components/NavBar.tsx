import React from 'react';

const NavBar = () => {
  return (
    <>
      <div className='flex flex-col flex-wrap p-5 mx-auto '>
        <a className='flex items-center font-medium text-white bg-black title-font'>
          PropertyWeb
        </a>
        <div className='flex flex-wrap justify-center text-base text-white bg-black md:ml-auto md:mr-auto'>
          <a className='mr-5'>First Link</a>
          <a className='mr-5'>Second Link</a>
          <a className='mr-5'>Third Link</a>
          <a className='mr-5'>Fourth Link</a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
