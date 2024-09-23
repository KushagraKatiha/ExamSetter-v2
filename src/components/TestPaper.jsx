import React from 'react'
import {ShortQuestion, TestPaperHeader} from './index.js'
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
          {longQuestions && longQuestions.length == 4 && (
            <>
              <div className="mt-6 ml-6 text-sm font-bold">
                <h2>LONG QUESTIONS</h2>
              </div>
              {/* Questions */}
              {/* Question 1 */}
              <div>
                <div className="flex mt-1">
                  <span className="font-bold text-sm">2.</span>
                  {/* If long question have a object which have two more objects inside it */}
                  {longQuestions[0].subQuestion1 && longQuestions[0].subQuestion2 ? (
                    <div className="flex flex-col gap-3">
                      <div className="w-full flex gap-5 justify-between">
                        <div className="flex flex-col">
                          <div className="flex text-xs ">
                            <span className="ml-2 font-medium text-sm mr-1">A. </span><span className="ml-2 font-medium text-sm mr-1">a.</span><div className="text-xs text-justify" dangerouslySetInnerHTML={{ __html: longQuestions[0].subQuestion1.ques }}></div>
                          </div>
                          {longQuestions[0].subQuestion1.image && (
                            <div className="ml-6 w-1/2">
                              <img src={longQuestions[0].subQuestion1.image} alt="Question Image" />
                            </div>
                          )}

                        </div>
                        <div className="flex gap-7 mr-3 text-xs">
                          <p>({longQuestions[0].subQuestion1.maxMarks})</p>
                          <p>{longQuestions[0].subQuestion1.unit}</p>
                          <p>{longQuestions[0].subQuestion1.bloomLevel}</p>
                          <p>{longQuestions[0].subQuestion1.co}</p>
                        </div>
                      </div>

                      {/* Subquestion 2 */}
                      <div className="w-full flex gap-5 justify-between">
                        <div className="flex flex-col">
                          <div className="flex text-xs ">
                            <span className="ml-8 font-medium text-sm mr-1">b. </span><div className="text-xs text-justify" dangerouslySetInnerHTML={{ __html: longQuestions[0].subQuestion2.ques }}></div>
                          </div>
                          {longQuestions[0].subQuestion2.image && (
                            <div className="ml-6 w-1/2">
                              <img src={longQuestions[0].subQuestion2.image} alt="Question Image" />
                            </div>
                          )}

                        </div>
                        <div className="flex gap-7 mr-3 text-xs">
                          <p>({longQuestions[0].subQuestion2.maxMarks})</p>
                          <p>{longQuestions[0].subQuestion2.unit}</p>
                          <p>{longQuestions[0].subQuestion2.bloomLevel}</p>
                          <p>{longQuestions[0].subQuestion2.co}</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full flex gap-3 justify-between">
                      <div className="flex flex-col">
                        <div className="flex text-xs ">
                          <span className="ml-2 font-medium text-sm mr-1">A. </span><div className="text-xs text-justify" dangerouslySetInnerHTML={{ __html: longQuestions[0].ques }}></div>
                        </div>
                        {longQuestions[0].image && (
                          <div className="ml-6 w-1/2">
                            <img src={longQuestions[0].image} alt="Question Image" />
                          </div>
                        )}
                      </div>
                      <div className="flex gap-7 mr-3 text-xs">
                        <p>({longQuestions[0].maxMarks})</p>
                        <p>{longQuestions[0].unit}</p>
                        <p>{longQuestions[0].bloomLevel}</p>
                        <p>{longQuestions[0].co}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <h1 className="text-center font-semibold text-base">OR</h1>
              {/* Question 2 */}
              <div className="flex mt-1">
                  {/* If long question have a object have two more objects inside it */}
                  {longQuestions[1].subQuestion1 && longQuestions[1].subQuestion2 ? (
                    <div className="flex flex-col gap-3">
                      <div className="w-full flex gap-5 justify-between">
                        <div className="flex flex-col">
                          <div className="flex text-xs ">
                            <span className="ml-5 font-medium text-sm mr-1">B. </span><span className="ml-2 font-medium text-sm mr-1">a.</span><div className="text-xs text-justify" dangerouslySetInnerHTML={{ __html: longQuestions[1].subQuestion1.ques }}></div>
                          </div>
                          {longQuestions[1].subQuestion1.image && (
                            <div className="ml-6 w-1/2">
                              <img src={longQuestions[1].subQuestion1.image} alt="Question Image" />
                            </div>
                          )}

                        </div>
                        <div className="flex gap-7 mr-3 text-xs">
                          <p>({longQuestions[1].subQuestion1.maxMarks})</p>
                          <p>{longQuestions[1].subQuestion1.unit}</p>
                          <p>{longQuestions[1].subQuestion1.bloomLevel}</p>
                          <p>{longQuestions[1].subQuestion1.co}</p>
                        </div>
                      </div>

                      {/* Subquestion 2 */}
                      <div className="w-full flex gap-5 justify-between">
                        <div className="flex flex-col">
                          <div className="flex text-xs ">
                            <span className="ml-11 font-medium text-sm mr-1">b. </span><div className="text-xs text-justify" dangerouslySetInnerHTML={{ __html: longQuestions[1].subQuestion2.ques }}></div>
                          </div>
                          {longQuestions[1].subQuestion2.image && (
                            <div className="ml-6 w-1/2">
                              <img src={longQuestions[1].subQuestion2.image} alt="Question Image" />
                            </div>
                          )}

                        </div>
                        <div className="flex gap-7 mr-3 text-xs">
                          <p>({longQuestions[1].subQuestion2.maxMarks})</p>
                          <p>{longQuestions[1].subQuestion2.unit}</p>
                          <p>{longQuestions[1].subQuestion2.bloomLevel}</p>
                          <p>{longQuestions[1].subQuestion2.co}</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full flex gap-3 justify-between">
                      <div className="flex flex-col">
                        <div className="flex text-xs ">
                          <span className="ml-2 font-medium text-sm mr-1">B. </span><div className="text-xs text-justify" dangerouslySetInnerHTML={{ __html: longQuestions[1].ques }}></div>
                        </div>
                        {longQuestions[1].image && (
                          <div className="ml-6 w-1/2">
                            <img src={longQuestions[1].image} alt="Question Image" />
                          </div>
                        )}

                      </div>
                      <div className="flex gap-7 mr-3 text-xs">
                        <p>({longQuestions[1].maxMarks})</p>
                        <p>{longQuestions[1].unit}</p>
                        <p>{longQuestions[1].bloomLevel}</p>
                        <p>{longQuestions[1].co}</p>
                      </div>
                    </div>
                  )}
                </div>
              {/* Question 3 */}
              <div className="flex mt-5">
                  <span className="font-bold text-sm">3.</span>
                  {/* If long question have a object have two more objects inside it */}
                  {longQuestions[2].subQuestion1 && longQuestions[2].subQuestion2 ? (
                    <div className="flex flex-col gap-3">
                      <div className="w-full flex gap-5 justify-between">
                        <div className="flex flex-col">
                          <div className="flex text-xs ">
                            <span className="ml-2 font-medium text-sm mr-1">A. </span><span className="ml-2 font-medium text-sm mr-1">a.</span><div className="text-xs text-justify" dangerouslySetInnerHTML={{ __html: longQuestions[2].subQuestion1.ques }}></div>
                          </div>
                          {longQuestions[2].subQuestion1.image && (
                            <div className="ml-6 w-1/2">
                              <img src={longQuestions[2].subQuestion1.image} alt="Question Image" />
                            </div>
                          )}

                        </div>
                        <div className="flex gap-7 mr-3 text-xs">
                          <p>({longQuestions[2].subQuestion1.maxMarks})</p>
                          <p>{longQuestions[2].subQuestion1.unit}</p>
                          <p>{longQuestions[2].subQuestion1.bloomLevel}</p>
                          <p>{longQuestions[2].subQuestion1.co}</p>
                        </div>
                      </div>

                      {/* Subquestion 2 */}
                      <div className="w-full flex gap-5 justify-between">
                        <div className="flex flex-col">
                          <div className="flex text-xs ">
                            <span className="ml-8 font-medium text-sm mr-1">b. </span><div className="text-xs text-justify" dangerouslySetInnerHTML={{ __html: longQuestions[2].subQuestion2.ques }}></div>
                          </div>
                          {longQuestions[2].subQuestion2.image && (
                            <div className="ml-6 w-1/2">
                              <img src={longQuestions[2].subQuestion2.image} alt="Question Image" />
                            </div>
                          )}

                        </div>
                        <div className="flex gap-7 mr-3 text-xs">
                          <p>({longQuestions[2].subQuestion2.maxMarks})</p>
                          <p>{longQuestions[2].subQuestion2.unit}</p>
                          <p>{longQuestions[2].subQuestion2.bloomLevel}</p>
                          <p>{longQuestions[2].subQuestion2.co}</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full flex gap-3 justify-between">
                      <div className="flex flex-col">
                        <div className="flex text-xs ">
                          <span className="ml-2 font-medium text-sm mr-1">A. </span><div className="text-xs text-justify" dangerouslySetInnerHTML={{ __html: longQuestions[2].ques }}></div>
                        </div>
                        {longQuestions[2].image && (
                          <div className="ml-6 w-1/2">
                            <img src={longQuestions[2].image} alt="Question Image" />
                          </div>
                        )}

                      </div>
                      <div className="flex gap-7 mr-3 text-xs">
                        <p>({longQuestions[2].maxMarks})</p>
                        <p>{longQuestions[2].unit}</p>
                        <p>{longQuestions[2].bloomLevel}</p>
                        <p>{longQuestions[2].co}</p>
                      </div>
                    </div>
                  )}
                </div>
              <h1 className="text-center font-semibold text-base">OR</h1>

              {/* Question 4 */}
              <div className="flex mt-1">
                  {/* If long question have a object have two more objects inside it */}
                  {longQuestions[3].subQuestion1 && longQuestions[3].subQuestion2 ? (
                    <div className="flex flex-col gap-3">
                      <div className="w-full flex gap-5 justify-between">
                        <div className="flex flex-col">
                          <div className="flex text-xs ">
                            <span className="ml-5 font-medium text-sm mr-1">B. </span><span className="ml-2 font-medium text-sm mr-1">a.</span><div className="text-xs text-justify" dangerouslySetInnerHTML={{ __html: longQuestions[3].subQuestion1.ques }}></div>
                          </div>
                          {longQuestions[3].subQuestion1.image && (
                            <div className="ml-6 w-1/2">
                              <img src={longQuestions[3].subQuestion1.image} alt="Question Image" />
                            </div>
                          )}

                        </div>
                        <div className="flex gap-7 mr-3 text-xs">
                          <p>({longQuestions[3].subQuestion1.maxMarks})</p>
                          <p>{longQuestions[3].subQuestion1.unit}</p>
                          <p>{longQuestions[3].subQuestion1.bloomLevel}</p>
                          <p>{longQuestions[3].subQuestion1.co}</p>
                        </div>
                      </div>

                      {/* Subquestion 2 */}
                      <div className="w-full flex gap-5 justify-between">
                        <div className="flex flex-col">
                          <div className="flex text-xs ">
                            <span className="ml-11 font-medium text-sm mr-1">b. </span><div className="text-xs text-justify" dangerouslySetInnerHTML={{ __html: longQuestions[3].subQuestion2.ques }}></div>
                          </div>
                          {longQuestions[3].subQuestion2.image && (
                            <div className="ml-6 w-1/2">
                              <img src={longQuestions[3].subQuestion2.image} alt="Question Image" />
                            </div>
                          )}

                        </div>
                        <div className="flex gap-7 mr-3 text-xs">
                          <p>({longQuestions[3].subQuestion2.maxMarks})</p>
                          <p>{longQuestions[3].subQuestion2.unit}</p>
                          <p>{longQuestions[3].subQuestion2.bloomLevel}</p>
                          <p>{longQuestions[3].subQuestion2.co}</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full flex gap-3 justify-between">
                      <div className="flex flex-col">
                        <div className="flex text-xs ">
                          <span className="ml-5 font-medium text-sm mr-1">B. </span><div className="text-xs text-justify" dangerouslySetInnerHTML={{ __html: longQuestions[3].ques }}></div>
                        </div>
                        {longQuestions[3].image && (
                          <div className="ml-6 w-1/2">
                            <img src={longQuestions[3].image} alt="Question Image" />
                          </div>
                        )}

                      </div>
                      <div className="flex gap-7 mr-3 text-xs">
                        <p>({longQuestions[3].maxMarks})</p>
                        <p>{longQuestions[3].unit}</p>
                        <p>{longQuestions[3].bloomLevel}</p>
                        <p>{longQuestions[3].co}</p>
                      </div>
                    </div>
                  )}
                </div>
            </>
          )}
        </div>
      </div>
  )
}

export default TestPaper