import React from 'react';

const NavBar = () => {
  return (
    <>
      <div className='container flex flex-col flex-wrap p-5 mx-auto'>
        <a className='flex items-center mb-4 font-medium text-gray-900 title-font'>
          PropertyWeb
        </a>
        <div className='flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto'>
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
