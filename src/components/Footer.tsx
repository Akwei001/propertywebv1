import React from 'react';

const Footer = () => {
  return (
    <footer className='flex flex-wrap p-5 text-white bg-black justify-evenly'>
      <ul>
        <h2 className='font-bold'>Information</h2>
        <li>Information for Sellers</li>
        <li>Information for Buyers</li>
        <li>Information for Landlords</li>
        <li>Information for Tenants</li>
        <li>Information for Developers</li>
      </ul>
      <ul>
        <h2 className='font-bold'>Our Services</h2>
        <li>Residential Sales</li>
        <li>Residential lettings</li>
        <li>New Land</li>
        <li>Asset Management</li>
      </ul>
      <ul>
        <h2 className='font-bold'>Help & Contact</h2>
        <li>Contact Us</li>
        <li>FAQ</li>
        <li>Support</li>
      </ul>
      <ul>
        <h2 className='font-bold'>Connect</h2>
        <li>Facebook</li>
        <li>Twitter</li>
        <li>Instagram</li>
      </ul>

      <h2></h2>
    </footer>
  );
};

export default Footer;
