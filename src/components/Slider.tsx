import { useState } from 'react';
import React from 'react';
import Image from 'next/image';
import Kitchen from '../../public/kitchen-gd52377716_1280.jpg';
import LivingRoom from '../../public/max-harlynking-7ptbiEPxKMQ-unsplash.jpg';
import SittingRoom from '../../public/emily-wang-Wv65tpVIdDg-unsplash.jpg';

const Slides = [Kitchen, LivingRoom, SittingRoom];

const Slider = () => {
  return (
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative'>
      <div className='w-full h-full duration-500 bg-black bg-center bg-cover rounded-2xl'></div>
    </div>
  );
};

export default Slider;
