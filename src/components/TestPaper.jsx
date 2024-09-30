import React from 'react'
import { LongQuestion, ShortQuestion, ShortQuestionHeading, TestPaperHeader } from './index.js'
function TestPaper() {

  const longQuestions = [
    {
      ques: "Write a short note on the following: <br> a. Data Mining <br> b. Data Warehousing",
      image: "",
      unit: "Unit 1",
      bloomLevel: "3",
      co: "CO1",
      subQues: [{
        ques: "What is Data Mining?",
        image: "",
        unit: "Unit 1",
        bloomLevel: "3",
        co: "CO1"
      }, {
        ques: "What is Data Warehousing dfdfdfddddddddddd ddddddddd ddddddddddd dddddddddddddd dddddddddddd dddddddddddddddddd",
        image: "",
        unit: "Unit 1",
        bloomLevel: "3",
        co: "CO1"
      }]
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
      ques: "These are short questions with a lot of text which is overflowing dfdfdfdfdfdfdfdfdfdfdfdfdfdfddfdf I dont not know what to do with this but I need to fix it any how",
      unit: "Unit 1",
      image: "https://images.pexels.com/photos/28178064/pexels-photo-28178064/free-photo-of-a-woman-in-white-dress-standing-in-front-of-a-glass-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bloomLevel: "3",
      co: "CO1"
    },
    {
      ques: "These are short questions with a lot of text which is overflowing dfdfdfdfdfdfdfdfdfdfdfdfdfdfddfdf I dont not know what to do with this but I need to fix it any how",
      unit: "Unit 1",
      bloomLevel: "3",
      co: "CO1"
    },
    {
      ques: "These are short questions with a lot of text which is overflowing dfdfdfdfdfdfdfdfdfdfdfdfdfdfddfdf I dont not know what to do with this but I need to fix it any how",
      unit: "Unit 1",
      bloomLevel: "3",
      co: "CO1"
    },
    {
      ques: "These are all short questions",
      unit: "1",
      bloomLevel: "3",
      co: "CO1"
    },
    {
      ques: "These are all short questions",
      image: "https://images.pexels.com/photos/28178064/pexels-photo-28178064/free-photo-of-a-woman-in-white-dress-standing-in-front-of-a-glass-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      unit: "Unit 1",
      bloomLevel: "3",
      co: "CO1"
    },
    {
      ques: "These are all short questions",

      unit: "Unit 1",
      bloomLevel: "3",
      image: "https://images.pexels.com/photos/28178064/pexels-photo-28178064/free-photo-of-a-woman-in-white-dress-standing-in-front-of-a-glass-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      co: "CO1"
    },
  ]

  return (
    <div className='w-full border-black border-2 h-full'>
      <div className="px-12 bg-white">
        <TestPaperHeader />

        {/* Question Paper */}
        <h1 className="mt-4 mb-2 font-extrabold text-sm underline">
          Attempt All Questions.
        </h1>

        {/* Short Questions */}
        <ShortQuestionHeading/>

        {/* Questions */}
        <div>
          <h2 className="font-medium text-sm underline mb-1 mt-2 ml-4">Attemp any five question only.</h2>
          {shortQuestions.map((question, index) => {
            return (
              <ShortQuestion key={index} QuesNo={String.fromCharCode(65 + index)} Text={question.ques} Unit={question.unit} BTL={question.bloomLevel} CO={question.co} ImageSrc={question.image} />
            );
          })}
        </div>

        {/* Long Questions */}
        {longQuestions && (
          <>
            <div className="mt-6 ml-6 text-sm font-bold">
              <h2>LONG QUESTIONS</h2>
            </div>
            {/* Questions */}
            {/* Question 1 */}
            <div>
              <LongQuestion QuesNo="1" Text={longQuestions[0].ques} MM={longQuestions[0].maxMarks} Unit={longQuestions[0].unit} BTL={longQuestions[0].bloomLevel} CO={longQuestions[0].co} SubQues={longQuestions[0].subQues}/>
            </div>
            <h1 className="text-center font-semibold text-base">OR</h1>
            {/* Question 2 */}
            <div>
              <LongQuestion QuesNo="2" Text={longQuestions[1].ques} MM={longQuestions[1].maxMarks} Unit={longQuestions[1].unit} BTL={longQuestions[1].bloomLevel} CO={longQuestions[0].co} SubQues={longQuestions[1].subQues}/>
            </div>
            {/* Question 3 */}
            <LongQuestion QuesNo="3" Text={longQuestions[2].ques} MM={longQuestions[2].maxMarks} Unit={longQuestions[2].unit} BTL={longQuestions[2].bloomLevel} CO={longQuestions[0].co} SubQues={longQuestions[2].subQues}/>
            <h1 className="text-center font-semibold text-base">OR</h1>

            {/* Question 4 */}
            <LongQuestion QuesNo="4" Text={longQuestions[3].ques} MM={longQuestions[3].maxMarks} Unit={longQuestions[3].unit} BTL={longQuestions[3].bloomLevel} CO={longQuestions[3].co} SubQues={longQuestions[3].subQues}/>
          </>
        )}
      </div>
    </div>
  )
}

export default TestPaper