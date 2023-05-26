import React from 'react';

const FeatureSection = () => {
  return (
    <div className='max-w-6xl p-4 m-4 mx-auto bg-blue-400'>
      <div className='m-4 border border-gray-300 rounded-lg flex-col-4 b-2'>
        <h2>Title</h2>
        <p>Subtitle</p>
        <div className='flex justify-end'>Image</div>
      </div>
      <div className='p-4 m-4 border border-gray-300 rounded-lg b-2'>
        <h2>Title</h2>
        <p>Subtitle</p>
        <div>Image</div>
      </div>
    </div>
  );
};

export default FeatureSection;
