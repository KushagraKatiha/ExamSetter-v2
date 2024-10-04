import React from 'react';
import { Image, SubLongQuestion } from '../index';
import parse from 'html-react-parser';

function LongQuestion({ QuesNo = null, Text = null, MM = 10, Unit = null, BTL = null, CO = null, ImageSrc = null, SubQues = null, textColor = 'text-black' }) {
  return (
    <div className="w-full">
      {SubQues ? (
        <div className="flex ">
          {/* Sub Questions */}
          <span className={`${textColor} mr-1 text-xs`}>{QuesNo}</span>
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
                  textColor={textColor} // Pass textColor to SubLongQuestion
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className={`w-full flex mb-1 ${textColor}`}>
          <div className="flex flex-col">
            <div className="flex text-xs">
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
          <div className={`flex justify-between w-[30%] ml-6 text-xs ${textColor}`}>
            <p className=''>{MM}</p>
            <p className=''>{Unit}</p>
            <p className=''>{BTL}</p>
            <p className=''>{CO}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default LongQuestion;
