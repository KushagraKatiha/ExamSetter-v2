import React from 'react'
import { LongQuestion, ShortQuestion, ShortQuestionHeading, TestPaperHeader } from './index.js'
import { useSelector } from 'react-redux';

function TestPaper() {

  const longQuestions = useSelector(state => state.longQues);
  console.log(longQuestions);
  

  const shortQuestions = useSelector(state => state.shortQues);
  console.log(shortQuestions);
  

  return (
    <div className='border-black border-2'>
      <div className="px-12 bg-white h-[1500px] overflow-y-scroll">
        <TestPaperHeader />

        {/* Question Paper */}
        <h1 className="mt-4 mb-2 font-extrabold text-sm underline">
          Attempt All Questions.
        </h1>

        {/* Short Questions */}
        
        {shortQuestions.length > 0 && <ShortQuestionHeading/>}

        {/* Questions */}
        <div>
          <h2 className="font-medium text-sm underline mb-1 mt-2 ml-4">Attemp any five question only.</h2>
          {shortQuestions && shortQuestions.map((question, index) => {
            return (
              <ShortQuestion key={index} QuesNo={String.fromCharCode(65 + index)} Text={question.ques} Unit={question.unit} BTL={question.bloomLevel} CO={question.co} ImageSrc={question.image} />
            );
          })}
        </div>

        {/* Long Questions */}
        {longQuestions.length > 0 && (
          <>
            <div className="mt-6 ml-6 text-sm font-bold">
              <h2>LONG QUESTIONS</h2>
            </div>
            <div>
              {longQuestions[0] && <LongQuestion QuesNo="1" Text={longQuestions[0].ques && longQuestions[0].ques} MM={longQuestions[0].maxMarks && longQuestions[0].maxMarks} Unit={longQuestions[0].unit && longQuestions[0].unit} BTL={longQuestions[0].bloomLevel && longQuestions[0].bloomLevel} CO={longQuestions[0].co && longQuestions[0].co} SubQues={longQuestions[0].subQues && longQuestions[0].subQues} ImageSrc={longQuestions[0].image && longQuestions[0].image}/>}
            </div>
            <h1 className="text-center font-semibold text-base">OR</h1>
            {/* Question 2 */}
            <div>
            {longQuestions[1] && <LongQuestion QuesNo="2" Text={longQuestions[1].ques && longQuestions[1].ques} MM={longQuestions[1].maxMarks && longQuestions[1].maxMarks} Unit={longQuestions[1].unit && longQuestions[1].unit} BTL={longQuestions[1].bloomLevel && longQuestions[1].bloomLevel} CO={longQuestions[1].co && longQuestions[1].co} SubQues={longQuestions[1].subQues && longQuestions[1].subQues} ImageSrc={longQuestions[1].image && longQuestions[1].image}/>}
            </div>
            {/* Question 3 */}
            {longQuestions[2] && <LongQuestion QuesNo="3" Text={longQuestions[2].ques && longQuestions[2].ques} MM={longQuestions[2].maxMarks && longQuestions[2].maxMarks} Unit={longQuestions[2].unit && longQuestions[2].unit} BTL={longQuestions[2].bloomLevel && longQuestions[2].bloomLevel} CO={longQuestions[2].co && longQuestions[2].co} SubQues={longQuestions[2].subQues && longQuestions[2].subQues} ImageSrc={longQuestions[2].image && longQuestions[2].image}/>}
            <h1 className="text-center font-semibold text-base">OR</h1>

            {/* Question 4 */}
            {longQuestions[3] && <LongQuestion QuesNo="4" Text={longQuestions[3].ques && longQuestions[3].ques} MM={longQuestions[3].maxMarks && longQuestions[3].maxMarks} Unit={longQuestions[3].unit && longQuestions[3].unit} BTL={longQuestions[3].bloomLevel && longQuestions[3].bloomLevel} CO={longQuestions[3].co && longQuestions[3].co} SubQues={longQuestions[3].subQues && longQuestions[3].subQues} ImageSrc={longQuestions[3].image && longQuestions[3].image}/>}
          </>
        )}
      </div>
    </div>
  )
}

export default TestPaper