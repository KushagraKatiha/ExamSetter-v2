import React from 'react';

function ShortQuestionHeading({ textColor = 'text-black' }) {
  return (
    <div className={`w-full flex mb-1 font-bold ${textColor}`}>
      <div className="flex">
        <span className={`font-medium mr-1 ${textColor}`}>1.</span>
        <p className={`w-[550px] text-justify ${textColor}`}>SHORT QUESTIONS</p>
      </div>
      <div className={`flex gap-7 justify-between w-[250px] ml-5 text-sm ${textColor}`}>
        <p className='text-center'>{textColor === 'text-black' ? 'MM' : <span className={`{textColor} text-center`}>MM</span>}</p>
        <p className='text-center'>{textColor === 'text-black' ? 'Unit' : <span className={`{textColor} text-center`}>Unit</span>}</p>
        <p className='text-center'>{textColor === 'text-black' ? 'BTL' : <span className={`{textColor} text-center`}>BTL</span>}</p>
        <p className='text-center'>{textColor === 'text-black' ? 'CO' : <span className={`{textColor} text-center`}>CO</span>}</p>
      </div>
    </div>
  );
}

export default ShortQuestionHeading;
