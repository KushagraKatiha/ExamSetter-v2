import React from 'react';
import { Image, SubLongQuestion } from '../index';
import parse from 'html-react-parser';

function LongQuestion({ QuesNo = null, Text = null, MM = 10, Unit = null, BTL = null, CO = null, ImageSrc = null, SubQues = null, textColor = 'text-black' }) {
  return (
    <div className="w-full">
      {SubQues ? (
        <div className="flex items-baseline">
          {/* Sub Questions */}
          {QuesNo == '2' && <span className={`font-medium mr-1 ${textColor}`}>{QuesNo}.</span>}
              {QuesNo == '3' && <span className={`font-medium mr-1 ${textColor}`}>{QuesNo}.</span>}
          <div className={QuesNo == '2' ? 'flex w-full justify-between' : QuesNo == '3' ? 'flex w-full justify-between' : 'ml-[1rem] flex w-full justify-between'}>
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
                  textColor={textColor} 
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className={`w-full flex mb-1 ${textColor}`}>
          <div className="flex flex-col">
            <div className="flex text-xs">
              {QuesNo == '2' && <span className={`font-medium mr-1 ${textColor}`}>{QuesNo}.</span>}
              {QuesNo == '3' && <span className={`font-medium mr-1 ${textColor}`}>{QuesNo}.</span>}
              <div className={QuesNo == '2' ? `overflow-hidden w-[550px] text-xs text-justify ${textColor}` : QuesNo == '3' ? `overflow-hidden w-[550px] text-xs text-justify ${textColor}` : `ml-[1rem] overflow-hidden w-[550px] text-xs text-justify ${textColor}`}>
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
      )}
    </div>
  );
}

export default LongQuestion;
