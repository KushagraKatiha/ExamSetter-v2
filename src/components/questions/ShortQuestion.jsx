import React from 'react';
import { Image } from '../index';
import parse from 'html-react-parser';

function ShortQuestion({ QuesNo, Text, MM = 2, Unit, BTL, CO, ImageSrc = null, textColor = 'text-black' }) {
    return (
        <div className={`w-full flex mb-1 ${textColor}`}>
            <div className="flex flex-col">
                <div className="flex">
                    <span className={`font-medium text-xs mr-1 ${textColor}`}>{QuesNo}.</span>
                    <div className={`overflow-hidden w-[550px] text-xs text-justify ${textColor}`}>
                        {parse(Text)}
                    </div>
                </div>
                {ImageSrc && (
                    <div className="mr-auto ml-auto h-auto w-1/2">
                        <Image src={ImageSrc} />
                    </div>
                )}
            </div>
            <div className={`flex justify-between items-center w-[250px] ml-7 text-xs ${textColor}`}>
                <p className=''>{MM}</p>
                <p className=''>{Unit}</p>
                <p className=''>{BTL}</p>
                <p className=''>{CO}</p>
            </div>
        </div>
    );
}

export default ShortQuestion;
