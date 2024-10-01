import React from 'react';
import { Image, SubLongQuestion } from '../index';

function LongQuestion({ QuesNo, Text, MM = 10, Unit, BTL, CO, ImageSrc = null, SubQues = null }) {
  return (
    <div className="w-full">
      {SubQues ? (
        <div className="flex border-4 border-green-600">
          {/* Sub Questions */}
          <span>{QuesNo}</span>
          <div className='flex w-full justify-between'>
            <div className="w-full">
              {SubQues.map((sub, index) => (
                <SubLongQuestion
                  key={index}
                  QuesNo={String.fromCharCode(65 + index)}
                  Text={sub.ques}
                  MM={sub.MM}
                  Unit={sub.unit}
                  BTL={sub.bloomLevel}
                  CO={sub.co}
                  ImageSrc={sub.image}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full flex mb-1 border-2 border-blue-600">
          <div className="flex flex-col">
            <div className="flex text-xs">
              <span className="font-medium text-xs mr-1">{QuesNo}.</span>
              <p className="overflow-hidden border-2 border-red-600 w-[550px] text-xs text-justify">
                {Text}
              </p>
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
      )}
    </div>
  );
}

export default LongQuestion;
