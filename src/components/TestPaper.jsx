import React from 'react';
import { LongQuestion, ShortQuestion, ShortQuestionHeading, TestPaperHeader, Button } from './index.js';
import { useSelector } from 'react-redux';

function TestPaper() {
  const handlePrint = () => {
    const printContent = document.getElementById("test-paper-content").innerHTML;
    const originalContent = document.body.innerHTML;

    // Display the hidden div
    document.getElementById("test-paper-content").style.display = "flex";

    // Replace the current content of the body with the content to be printed
    document.body.innerHTML = printContent;

    // Print the content
    window.print();

    // Restore the original content after printing
    document.body.innerHTML = originalContent;

    // Hide the hidden div again
    document.getElementById("test-paper-content").style.display = "hidden";
  }


  const longQuestions = useSelector(state => state.longQues);
  const shortQuestions = useSelector(state => state.shortQues);
  return (
    <div>
      <div className="px-12 bg-white h-auto overflow-y-scroll no-scrollbar">
        <TestPaperHeader textColour={'text-white'} />

        {/* Question Paper */}
        <h1 className="mt-4 mb-2 text-black font-extrabold text-sm underline">
          Attempt All Questions.
        </h1>

        {/* Short Questions */}
        {shortQuestions.length > 0 && <ShortQuestionHeading />}
        <div>
          <h2 className="font-medium text-black text-sm underline mb-1 mt-2 ml-4">Attempt any five questions only.</h2>
          {shortQuestions && shortQuestions.map((question, index) => (
            <ShortQuestion
              key={index}
              QuesNo={String.fromCharCode(65 + index)}
              Text={question.ques}
              Unit={question.unit}
              BTL={question.bloomLevel}
              CO={question.co}
              ImageSrc={question.image}
            />
          ))}
        </div>

        {/* Long Questions */}
        {longQuestions.length > 0 && (
          <>
            <div className="mt-6 ml-6 text-sm font-bold">
              <h2>LONG QUESTIONS</h2>
            </div>
            <div>
              {longQuestions.map((question, index) => (
                <div key={index}>
                  <LongQuestion
                    QuesNo={`${index + 1}`}
                    Text={question.ques}
                    MM={question.maxMarks}
                    Unit={question.unit}
                    BTL={question.bloomLevel}
                    CO={question.co}
                    SubQues={question.subQues}
                    ImageSrc={question.image}
                  />
                  {index % 2 !== 0 && <h1 className="text-center font-semibold text-base">OR</h1>}
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <div className='hidden' id='test-paper-content'>
        <div className='flex'>
          <div className="px-12 bg-white h-[1500px] overflow-y-scroll no-scrollbar">
            <TestPaperHeader />

            {/* Question Paper */}
            <h1 className="mt-4 mb-2 font-extrabold text-sm underline">
              Attempt All Questions.
            </h1>

            {/* Short Questions */}
            {shortQuestions.length > 0 && <ShortQuestionHeading />}
            <div>
              <h2 className="font-medium text-sm underline mb-1 mt-2 ml-4">Attempt any five questions only.</h2>
              {shortQuestions && shortQuestions.map((question, index) => (
                <ShortQuestion
                  key={index}
                  QuesNo={String.fromCharCode(65 + index)}
                  Text={question.ques}
                  Unit={question.unit}
                  BTL={question.bloomLevel}
                  CO={question.co}
                  ImageSrc={question.image}
                />
              ))}
            </div>

            {/* Long Questions */}
            {longQuestions.length > 0 && (
              <>
                <div className="mt-6 ml-6 text-sm font-bold">
                  <h2>LONG QUESTIONS</h2>
                </div>
                <div>
                  {longQuestions.map((question, index) => (
                    <div key={index}>
                      <LongQuestion
                        QuesNo={`${index + 1}`}
                        Text={question.ques}
                        MM={question.maxMarks}
                        Unit={question.unit}
                        BTL={question.bloomLevel}
                        CO={question.co}
                        SubQues={question.subQues}
                        ImageSrc={question.image}
                      />
                      {index % 2 !== 0 && <h1 className="text-center font-semibold text-base">OR</h1>}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="px-12 bg-white h-[1500px] overflow-y-scroll no-scrollbar">
            <TestPaperHeader />

            {/* Question Paper */}
            <h1 className="mt-4 mb-2 font-extrabold text-sm underline">
              Attempt All Questions.
            </h1>

            {/* Short Questions */}
            {shortQuestions.length > 0 && <ShortQuestionHeading />}
            <div>
              <h2 className="font-medium text-sm underline mb-1 mt-2 ml-4">Attempt any five questions only.</h2>
              {shortQuestions && shortQuestions.map((question, index) => (
                <ShortQuestion
                  key={index}
                  QuesNo={String.fromCharCode(65 + index)}
                  Text={question.ques}
                  Unit={question.unit}
                  BTL={question.bloomLevel}
                  CO={question.co}
                  ImageSrc={question.image}
                />
              ))}
            </div>

            {/* Long Questions */}
            {longQuestions.length > 0 && (
              <>
                <div className="mt-6 ml-6 text-sm font-bold">
                  <h2>LONG QUESTIONS</h2>
                </div>
                <div>
                  {longQuestions.map((question, index) => (
                    <div key={index}>
                      <LongQuestion
                        QuesNo={`${index + 1}`}
                        Text={question.ques}
                        MM={question.maxMarks}
                        Unit={question.unit}
                        BTL={question.bloomLevel}
                        CO={question.co}
                        SubQues={question.subQues}
                        ImageSrc={question.image}
                      />
                      {index % 2 !== 0 && <h1 className="text-center font-semibold text-base">OR</h1>}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <Button label={'Print'} onClick={handlePrint} className={'w-full rounded-sm hover:bg-slate-700'} />
    </div>
  );
}

export default TestPaper;
