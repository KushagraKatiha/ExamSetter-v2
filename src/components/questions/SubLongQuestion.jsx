import React from 'react'
import { Image } from '../index'
import parse from 'html-react-parser'

function SubLongQuestion({ QuesNo, Text, MM = 5, Unit, BTL, CO, ImageSrc = null }) {
  return (
    <>
      <div className="w-full flex mb-1 ">
        <div className="flex flex-col">
          <div className="flex text-xs ">
            <span className="font-medium text-xs mr-1">{QuesNo}</span>
            <div className="overflow-hidden w-[546px] text-xs text-justify">
              {parse(Text)}
            </div>
          </div>
          {ImageSrc && (
            <div className="mr-auto ml-auto h-auto w-1/2">
              <Image src={ImageSrc} />
            </div>
          )}
        </div>
        <div className="flex justify-between  w-[30%] ml-6 text-xs">
          <p className=''>{MM}</p>
          <p className=''>{Unit}</p>
          <p className=''>{BTL}</p>
          <p className=''>{CO}</p>
        </div>
      </div>
    </>
  )
}

export default SubLongQuestion