import React from 'react';

const Footer = () => {
  return (
    <footer className='flex flex-wrap pb-10 text-white bg-black mb justify-evenly'>
      <ul>
        <h2 className='mt-8 mb-4 text-2xl font-bold text-teal-500 '>
          Information
        </h2>
        <li className='mb-2 hover:text-gray-500'>Information for Sellers</li>
        <li className='mb-2 hover:text-gray-500'>Information for Buyers</li>
        <li className='mb-2 hover:text-gray-500'>Information for Landlords</li>
        <li className='mb-2 hover:text-gray-500'>Information for Tenants</li>
        <li className='mb-2 hover:text-gray-500'>Information for Developers</li>
      </ul>
      <ul>
        <h2 className='mt-8 mb-4 text-2xl font-bold text-teal-500 '>
          Our Services
        </h2>
        <li className='mb-2 hover:text-gray-500'>Residential Sales</li>
        <li className='mb-2 hover:text-gray-500'>Residential lettings</li>
        <li className='mb-2 hover:text-gray-500'>New Land</li>
        <li className='mb-2 hover:text-gray-500'>Asset Management</li>
      </ul>
      <ul>
        <h2 className='mt-8 mb-4 text-2xl font-bold text-teal-500 '>
          Help & Contact
        </h2>
        <li className='mb-2 hover:text-gray-500'>Contact Us</li>
        <li className='mb-2 hover:text-gray-500'>FAQ</li>
        <li className='mb-2 hover:text-gray-500'>Support</li>
      </ul>
      <ul>
        <h2 className='mt-8 mb-4 text-2xl font-bold text-teal-500 '>Connect</h2>
        <li className='mb-2 hover:text-gray-500'>Facebook</li>
        <li className='mb-2 hover:text-gray-500'>Twitter</li>
        <li className='mb-2 hover:text-gray-500'>Instagram</li>
      </ul>

      <h2></h2>
    </footer>
  );
};

export default Footer;
