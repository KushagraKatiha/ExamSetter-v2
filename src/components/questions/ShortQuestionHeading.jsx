import React from 'react'

function ShortQuestionHeading() {
  return (
    <div className="w-full flex mb-1 font-bold">
          <div className="flex">
            <span className="font-medium mr-1">1.</span>
            <p className="w-[550px] text-justify">SHORT QUESTIONS</p>
          </div>
          <div className="flex justify-between w-[30%] ml-5 text-sm">
            <p>MM</p>
            <p>Unit</p>
            <p>BTL</p>
            <p>CO</p>
          </div>
        </div>
  )
}

export default ShortQuestionHeading