import React from 'react'
import { Image } from '../index'

function ShortQuestion({ QuesNo, Text, MM = 2, Unit, BTL, CO, ImageSrc = null }) {
    return (
        <div className='border-2 border-red-600'>
            <div className="w-full flex gap-3 justify-between mb-1">
                <div className="flex flex-col">
                    <div className="flex text-xs ">
                        <span className="ml-2 font-medium text-xs mr-1">{QuesNo}.</span><p className="text-xs text-justify">
                            {Text}
                        </p>
                    </div>
                    {ImageSrc&& (
                        <div className="ml-6 w-1/2">
                            <Image src={ImageSrc} />
                        </div>
                    )}
                </div>
                <div className="flex gap-7 mr-3 text-xs">
                    <span>{MM}</span>
                    <span>{Unit}</span>
                    <span>{BTL}</span>
                    <span>{CO}</span>
                </div>
            </div>
        </div>
    )
}

export default ShortQuestion