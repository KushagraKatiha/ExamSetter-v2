import React from 'react';
import {Image} from './index';

function Banner({ logo, title }) {
  return (
    <div className='bg-gradient-to-r from-gray-800 to-gray-900 flex justify-around items-center py-3'>

        <Image src={logo} alt='logo' className='bg-gradient-to-r from-gray-200 to-gray-400 w-40 ml-4 h-auto rounded-lg shadow-lg' />

        <h1 className='text-center font-extrabold text-4xl text-white'>{title}</h1>
    </div>
  );
}

export default Banner;
