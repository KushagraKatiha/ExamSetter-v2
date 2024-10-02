import React from 'react'
import { Image } from '../index'
import parse from 'html-react-parser'

function ShortQuestion({ QuesNo, Text, MM = 2, Unit, BTL, CO, ImageSrc = null }) {
    return (
        <div className="w-full flex mb-1 border-2 border-blue-600">
            <div className="flex flex-col">
                <div className="flex">
                    <span className="font-medium text-xs mr-1">{QuesNo}.</span>
                    <div className="overflow-hidden border-2 border-red-600 w-[550px] text-xs text-justify">
                       {parse(Text)}
                    </div>
                </div>
                {ImageSrc && (
                    <div className="mr-auto ml-auto h-auto w-1/2">
                        <Image src={ImageSrc} />
                    </div>
                )}
            </div>
            <div className="flex border-2 justify-between border-pink-900 w-[30%] ml-6 text-xs">
                <p className='border-2 border-green-800'>{MM}</p>
                <p className='border-2 border-green-800'>{Unit}</p>
                <p className='border-2 border-green-800'>{BTL}</p>
                <p className='border-2 border-green-800'>{CO}</p>
            </div>

        </div>

    )
}

export default ShortQuestion