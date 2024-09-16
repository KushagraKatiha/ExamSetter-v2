import React from 'react'

function Credits({logo, name, work, link, course}) {
  return (
    <div className='h-full w-full flex bg-gradient-to-r from-orange-500 to-orange-700 justify-center gap-3 pt-10 pb-8 items-center'>
        <div className='w-fit flex'>

            {/* Container for image */}
            <div className='mx-3'>
              <img src={logo} alt='logo' />
            </div>
            
            {/* Container for name */}
            <div className='text-white'>
              <h2 className='font-light text-xs'>{work}</h2>
              <a className='font-bold text-xs' href={link} target='_blank'>{name}</a>
              <p className='font-light text-xs'>{course}</p>
            </div>
          </div>
    </div>
  )
}

export default Credits