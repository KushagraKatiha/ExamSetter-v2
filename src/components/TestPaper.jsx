import React from 'react'
import {LongQuestion, ShortQuestion, TestPaperHeader} from './index.js'
function TestPaper() {

  const longQuestions = [
    {
      ques: "Write a short note on the following: <br> a. Data Mining <br> b. Data Warehousing",
      image: "",
      unit: "Unit 1",
      bloomLevel: "3",
      co: "CO1"
    },
    {
      ques: "Write a short note on the following: <br> a. Data Mining <br> b. Data Warehousing",
      image: "",
      unit: "Unit 1",
      bloomLevel: "3",
      co: "CO1"
    },
    {
      ques: "Write a short note on the following: <br> a. Data Mining <br> b. Data Warehousing",
      image: "",
      unit: "Unit 1",
      bloomLevel: "3",
      co: "CO1"
    },
    {
      ques: "Write a short note on the following: <br> a. Data Mining <br> b. Data Warehousing",
      image: "",
      unit: "Unit 1",
      bloomLevel: "3",
      co: "CO1"
    },
  ]

  const shortQuestions = [
    {
      ques: "These are short questions",
      unit: "Unit 1",
      bloomLevel: "3",
      co: "CO1"
    },
    {
      ques: "These are all short questions",
      unit: "Unit 1",
      bloomLevel: "3",
      co: "CO1"
    },
    {
      ques: "These are all short questions",
      unit: "Unit 1",
      bloomLevel: "3",
      co: "CO1"
    },
    {
      ques: "These are all short questions",
      unit: "Unit 1",
      bloomLevel: "3",
      co: "CO1"
    },
    {
      ques: "These are all short questions",
     
      unit: "Unit 1",
      bloomLevel: "3",
      co: "CO1"
    },
    {
      ques: "These are all short questions",
     
      unit: "Unit 1",
      bloomLevel: "3",
      image: null,
      co: "CO1"
    },
  ]

  return (
    <div className='w-full border-black border-2 h-full'>
        <div className="px-12 bg-white">
          {/* College Banner Container */}
          {/* College Banner */}
         <TestPaperHeader/>

          {/* Question Paper */}
          <h1 className="mt-4 mb-2 font-extrabold text-sm underline">
            Attempt All Questions.
          </h1>

          {/* Short Questions */}
          <div className="text-sm font-bold flex justify-between">
            <h2>1. SHORT QUESTIONS</h2>
            <div className="flex gap-3 text-sm">
              <h2>MM</h2>
              <h2>Unit</h2>
              <h2>BTL</h2>
              <h2>CO</h2>
            </div>
          </div>

          {/* Questions */}
          <div>
            <h2 className="font-medium text-sm underline mb-1 mt-2 ml-4">Attemp any five question only.</h2>
            {shortQuestions.map((question, index) => {
              return (
                <ShortQuestion key={index} QuesNo={String.fromCharCode(65 + index)} Text={question.ques} Unit={question.unit} BTL={question.bloomLevel} CO={question.co} ImageSrc={question.image}/>
              );
            })}
          </div>

          {/* Long Questions */}
          {longQuestions &&(
            <>
              <div className="mt-6 ml-6 text-sm font-bold">
                <h2>LONG QUESTIONS</h2>
              </div>
              {/* Questions */}
              {/* Question 1 */}
              <div>
                <LongQuestion QuesNo="1" Text={longQuestions[0].ques} MM={longQuestions[0].maxMarks} Unit={longQuestions[0].unit} BTL={longQuestions[0].bloomLevel} CO={longQuestions[0].co} />
              </div>
              <h1 className="text-center font-semibold text-base">OR</h1>
              {/* Question 2 */}
              <div>
                <LongQuestion QuesNo="1" Text={longQuestions[0].ques} MM={longQuestions[0].maxMarks} Unit={longQuestions[0].unit} BTL={longQuestions[0].bloomLevel} CO={longQuestions[0].co} />
              </div>
              {/* Question 3 */}
              <LongQuestion QuesNo="1" Text={longQuestions[0].ques} MM={longQuestions[0].maxMarks} Unit={longQuestions[0].unit} BTL={longQuestions[0].bloomLevel} CO={longQuestions[0].co} />
              <h1 className="text-center font-semibold text-base">OR</h1>

              {/* Question 4 */}
              <LongQuestion QuesNo="1" Text={longQuestions[0].ques} MM={longQuestions[0].maxMarks} Unit={longQuestions[0].unit} BTL={longQuestions[0].bloomLevel} CO={longQuestions[0].co} />
            </>
          )}
        </div>
      </div>
  )
}

export default TestPaper