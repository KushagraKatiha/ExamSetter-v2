import React from 'react'

function Image({src}) {
  return (
    <div>
        <img src={src} alt="quesImage" className="w-full h-[100px]" />
    </div>
  )
}

export default Image