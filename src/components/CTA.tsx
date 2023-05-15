import React from 'react';

const CTA = () => {
  return (
    <div className='flex flex-wrap mx-auto mb-2'>
      <div className='flex flex-col flex-wrap mx-auto mb-2'>
        <div className='flex flex-wrap px-4 py-8 m-auto bg-black rounded-lg shadow-lg justify-startmax-w-2xl md:py-16'>
          <div className='max-w-2xl m-auto text-center'>
            <h2 className='mt-4 text-3xl font-bold text-center text-teal-500 md:text-4xl'>
              Get in touch
            </h2>
            <p className='my-8 text-lg font-medium text-center text-white'>
              Get in touch so we can talk to you about how we can help and how
              we are different to other residential property agents.
            </p>
            <div
              // onClick={onCTAClick}
              className='inline-block w-full py-3 text-xl font-medium duration-200 bg-white border-2 border-white rounded-lg cursor-pointer md:w-auto px-7 text-primary hover:opacity-50'
            >
              contact us
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col h-[350px] w-[700px]  flex-wrap mx-auto mb-2'>
        <div className='flex flex-wrap w-full h-full px-4 py-8 m-auto bg-black rounded-lg shadow-lg md:py-16'></div>
      </div>
    </div>
  );
};

export default CTA;
