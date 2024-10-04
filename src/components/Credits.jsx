import React from 'react';
import {Image} from './index'; // Import your custom Image component

function Credits({ logo, name, work, link, course }) {
  return (
    <div className='flex bg-gradient-to-r from-gray-800 to-gray-900 justify-center gap-3 pt-10 pb-8 items-center'>
      <div className='w-fit flex justify-center items-center'>

        {/* Container for image */}
        <div className='mx-3'>
          <Image src={logo} alt='logo' className='w-16 h-16 rounded-full border-2 border-white' /> {/* Adjust size and style as needed */}
        </div>

        {/* Container for name */}
        <div className='text-white'>
          <h2 className='font-light text-sm'>{work}</h2>
          <a className='font-bold text-sm underline hover:text-gray-300' href={link} target='_blank' rel="noopener noreferrer">
            {name}
          </a>
          <p className='font-light text-sm'>{course}</p>
        </div>
      </div>
    </div>
  );
}

export default Credits;
