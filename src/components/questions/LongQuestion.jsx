import React from 'react';
import { Image, SubLongQuestion } from '../index';

function LongQuestion({ QuesNo, Text, MM = 10, Unit, BTL, CO, ImageSrc = null, SubQues = null }) {
  return (
    <div className="w-full">
      {SubQues ? (
        <div className="flex flex-col gap-3">
          {/* Main Question */}
          <div className="flex text-xs ">
            <span className="ml-2 font-medium text-sm mr-1">{QuesNo}</span>
            <p className="text-xs text-justify">{Text}</p>
          </div>
          {/* Image if present */}
          {ImageSrc && (
            <div className="ml-6 w-1/2">
              <Image src={ImageSrc} />
            </div>
          )}
          {/* Sub Questions */}
          <div className="ml-4">
            {SubLongQuestion.map((sub, index) => (
              <SubQuestion
                key={index}
                QuesNo={sub.QuesNo}
                Text={sub.Text}
                MM={sub.MM}
                Unit={sub.Unit}
                BTL={sub.BTL}
                CO={sub.CO}
                ImageSrc={sub.ImageSrc}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex gap-3 justify-between">
          <div className="flex flex-col">
            <div className="flex text-xs ">
              <span className="ml-2 font-medium text-sm mr-1">{QuesNo}</span>
              <p className="text-xs text-justify">{Text}</p>
            </div>
            {ImageSrc && (
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
      )}
    </div>
  );
}

export default LongQuestion;
