import React from 'react'

function Banner({logo, title}) {
  return (
    <div className='bg-gradient-to-r from-orange-500 to-orange-700 flex justify-center items-center py-5 border-b-black border-b-2'>
        <div>
            <h1 className='text-center font-extrabold py-4 w-auto text-5xl'>{title}</h1>
        </div>
        <div>
            <img src={logo} alt='logo' className='w-full' />
        </div>
    </div>
  )
}

export default Banner