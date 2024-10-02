import React, { useState, useEffect } from 'react'
import TextEditor from './TextEditor'
import Select from './Select';
import {
  courseOutcomeOptions, bloomLevelOptions, unitOptions, questionTypeOptions, longQuestionsSubTypeOptions
} from './index'
import { useDispatch, useSelector } from 'react-redux';
import { setShortQues } from '../store/features/questions/shortQuesSlice';
import {setLongQues} from '../store/features/questions/longQuesSlice';

function SetQuestionPaper() {

  const dispatch = useDispatch();
  console.log('short question => ', useSelector(state => state.shortQues));
  console.log('long question => ', useSelector(state => state.longQues));

  // check if the four long questions are added
  const shortQuestionsLength = useSelector(state => state.shortQues.length);
  const longQuestionsLength = useSelector(state => state.longQues.length);
  console.log('short question length=>', shortQuestionsLength);
  console.log('long question length =>', longQuestionsLength);

  const [image, setImage] = useState('');
  const [addImage, setAddImage] = useState(false);
  const [questionText, setQuestionText] = useState('');

  const [longQuestionSubType, setLongQuestionSubType] = useState(1)
  // const [subQuestion1, setSubQuestion1] = useState('')
  // const [subQuestion2, setSubQuestion2] = useState('')
  const [selectedImage, setSelectedImage] = useState('');
  const [questionType, setQuestionType] = useState('-');
  const [unit, setUnit] = useState('-');
  const [bloomLevel, setBloomLevel] = useState('-');
  const [co, setCo] = useState('-');


  const handleAddImage = () => {
    setAddImage(!addImage);
    setSelectedImage(null);
  };

  const handleRemoveImage = () => {
    setImage(null); 
    setSelectedImage(null);
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
    setSelectedImage(selectedImage); 
  };

  const checkConditions = () => {
    if (questionType === '-') {
      alert('Please select the question type');
      return; // Exit the function early
    }

    // Check if unit, bloomLevel, and co are not selected
    if (unit === '-' || bloomLevel === '-' || co === '-') {
      alert('Please select Unit, Bloom\'s Level, and Course Outcome.');
      return; // Exit the function early
    }
  }

  const resetFields = () => {
    setQuestionType('-');
      setUnit('-');
      setBloomLevel('-');
      setCo('-');
      setQuestionText('');
      setImage(null);   // Clear the selected image
      setSelectedImage(null)
      setAddImage(false);
  }

  // const handleAddSubQuestion1 = () => {
  //   if (Object.keys(longQuestion).length == 1) {
  //     alert('Already Added')
  //     return;
  //   }

  //   if (Object.keys(longQuestion).length == 2) {
  //     alert('Both the quesions already added')
  //     return;
  //   }

  //   if (subQuestion1 == null || subQuestion1 === '<p><br></p>') {
  //     alert('Please enter the question');
  //     return; // Exit the function early
  //   }

  //   // Check if bloomLevel, unit, and co are not selected
  //   if (unit === '-' || bloomLevel === '-' || co === '-') {
  //     alert('Please select Unit, Bloom\'s Level, and Course Outcome.');
  //     return; // Exit the function early
  //   }

  //   const question = {
  //     ques: subQuestion1, // Set the ques property to the content from the Froala Editor
  //     maxMarks: 5,
  //     unit: unit,
  //     bloomLevel: bloomLevel,
  //     co: co,
  //     image: image ? URL.createObjectURL(image) : null,
  //   };
  //   setLongQuestion({ ...longQuestion, subQuestion1: question });
  //   setSubQuestion1(null);
  //   setImage(null);   // Clear the selected image
  //   setSelectedImage(null)
  //   setAddImage(false);
  //   setBloomLevel('-');
  //   setUnit('-');
  //   setCo('-');
  //   alert('Sub Question 1 added')
  // }

  // const handleAddSubQuestion2 = () => {
  //   if (Object.keys(longQuestion).length == 0) {
  //     alert('Enter First Questions First')
  //     return;
  //   }

  //   if (Object.keys(longQuestion).length == 2) {
  //     alert('Both the questions already added')
  //     return;
  //   }

  //   if (subQuestion2 == null || subQuestion2 === '<p><br></p>') {
  //     alert('Please enter the question');
  //     return; // Exit the function early
  //   }

  //   // Check if bloomLevel, unit, and co are not selected
  //   if (unit === '-' || bloomLevel === '-' || co === '-') {
  //     alert('Please select Unit, Bloom\'s Level, and Course Outcome.');
  //     return; // Exit the function early
  //   }

  //   const question = {
  //     ques: subQuestion2, // Set the ques property to the content from the Froala Editor
  //     maxMarks: 5,
  //     unit: unit,
  //     bloomLevel: bloomLevel,
  //     co: co,
  //     image: image ? URL.createObjectURL(image) : null,
  //   };
  //   setLongQuestion({ ...longQuestion, subQuestion2: question });
  //   setSubQuestion2(null);
  //   setImage(null);   // Clear the selected image
  //   setAddImage(false);
  //   alert('Sub Question 2 added')
  // }

  // const handleAddQuestion = () => {
  //   // Check if the question type is not selected
  //   if (questionType === 'choose') {
  //     alert('Please select the question type');
  //     return; // Exit the function early
  //   }

  //   // Check if unit, bloomLevel, and co are not selected
  //   if (unit === '-' || bloomLevel === '-' || co === '-') {
  //     alert('Please select Unit, Bloom\'s Level, and Course Outcome.');
  //     return; // Exit the function early
  //   }

  //   if (
  //     (questionType === 'short' && shortQuestions.length < 8) ||
  //     (questionType === 'long' && longQuestions.length < 4)
  //   ) {
  //     const marks = questionType === 'long' ? 10 : 2;
  //     // check if long question has sub question
  //     if (longQuestionSubType === '2') {
  //       if (Object.keys(longQuestion).length != 2) {
  //         alert('Please enter both sub questions');
  //         return; // Exit the function early
  //       }
  //       setLongQuestions((prevLongQuestions) => [...prevLongQuestions, longQuestion]);
  //       alert(`${longQuestions.length + 1} Long question added`);
  //       setLongQuestion({});
  //       setLongQuestionSubType(1);
  //       setSubQuestion1(null);
  //       setSubQuestion2(null);
  //       setQuestionType('choose');
  //       setUnit('');
  //       setBloomLevel('');
  //       setCo('');
  //       setQuestionText(null);
  //       setImage(null);   // Clear the selected image
  //       setSelectedImage(null)
  //       setAddImage(false);
  //       return;
  //     }

  //     // Check if the question is not empty
  //     if (questionText == null || questionText === '<p><br></p>') {
  //       alert('Please enter the question');
  //       return; // Exit the function early
  //     }

  //     const question = {
  //       ques: questionText, // Set the ques property to the content from the Froala Editor
  //       maxMarks: marks,
  //       unit: unit,
  //       bloomLevel: bloomLevel,
  //       co: co,
  //       image: image ? URL.createObjectURL(image) : null,
  //     };
  //     if (questionType === 'long') {
  //       setLongQuestions((prevLongQuestions) => [...prevLongQuestions, question]);
  //       alert(`${longQuestions.length + 1} Long question added`);
  //     } else if (questionType === 'short') {
  //       setShortQuestions([...shortQuestions, question]);
  //       alert(`${shortQuestions.length + 1} Short question added`);
  //     }
  //     setQuestionType('choose');
  //     setUnit('');
  //     setBloomLevel('');
  //     setCo('');
  //     setQuestionText(null);
  //     setImage(null);   // Clear the selected image
  //     setSelectedImage(null)
  //     setAddImage(false);
  //   } else {
  //     alert('You can only add 8 short and 4 long questions');
  //   }
  // };

  const handleAddShortQuestion = () => {
    
    checkConditions()

    const question = {
      ques: questionText,
      maxMarks: 2,
      unit: unit,
      bloomLevel: bloomLevel,
      co: co,
      image: image ? URL.createObjectURL(image) : null,
    };

    if (shortQuestionsLength >= 8) {
      alert('You can only add 4 long questions');

      resetFields();
      
      return;
    }

    dispatch((setShortQues(question)));

    resetFields()
  }

  const handleLongQuestion = () => {
    checkConditions()

    const question = {
      ques: questionText,
      maxMarks: 10,
      unit: unit,
      bloomLevel: bloomLevel,
      co: co,
      image: image ? URL.createObjectURL(image) : null,
    };

    if (longQuestionsLength >= 4) {
      alert('You can only add 4 long questions');

      resetFields();
      
      return;
    }

    dispatch((setLongQues(question)));

    resetFields()
  }

  const handleAddQuestion = () => {
    if(questionType === 'short') {
      handleAddShortQuestion()
    }else if(questionType === 'long') {
      handleLongQuestion()
    }
  }

  return (
    <div>
      <h1 className='text-center text-3xl font-bold'>Set Questions Below</h1>

      {/* Container for other details */}
      <div className='flex justify-around w-full'>
        {/* Container to set question type */}
        <div className='bg-black h-fit p-2 rounded-lg border-2 border-[#9c36b5]'>
          <Select options={questionTypeOptions} labelStyle={'text-white'} value={questionType} label='Question Type' onChange={e => setQuestionType(e.target.value)} />
        </div>

        {/* Container to set question subtype */}
        {questionType === 'long' && (
          <div className='bg-black h-fit p-2 rounded-lg border-2 border-[#9c36b5]'>
            <Select value={longQuestionSubType} options={longQuestionsSubTypeOptions} label='Two Parts Needed ?' labelStyle='text-white' onChange={e => setLongQuestionSubType(e.target.value)} />
          </div>
        )}

        {/* Container to set sub details */}
        <div className='flex justify-evenly gap-2 bg-black border-2 border-[#9c36b5] p-2 w-full rounded-lg'>
          {/* container to set unit */}
          <Select options={unitOptions} optionStyle='w-fit' onChange={e => setUnit(e.target.value)} value={unit} label='Unit' labelStyle='text-white text-sm' />


          {/* Container to set Bloom's Level */}

          <Select options={bloomLevelOptions} optionStyle='w-fit' onChange={e => setBloomLevel(e.target.value)} value={bloomLevel} label='BL' labelStyle='text-white text-sm' />

          {/* Container to set Course Outcome */}

          <Select options={courseOutcomeOptions} optionStyle='w-fit' onChange={e => setCo(e.target.value)} value={co} label='CO' labelStyle='text-white text-sm' />
        </div>

      </div>

      <div className='flex ml-10 items-end mt-5 gap-10 font-extrabold'>
        
        {/* Container to set question */}
        {/* If long questions sub type is two add two questions of 5 marks each*/}
        {/* {questionType === 'long' && longQuestionSubType === '2' ? ( */}
          {/* <div className='flex flex-col justify-center items-center w-full'>
          
            <div className='text-center w-11/12 flex flex-col gap-1'>

              <div className='flex gap-5 justify-between items-center w-full'>
                <button className='bg-black mb-2 border-2 border-[#9c36b5] text-[#9c36b5] px-4 py-2 rounded-lg mt-4' onClick={handleAddImage}>
                  Add Image
                </button>
                
                <label className={addImage ? "visible custom-file-upload" : "hidden custom-file-upload"} >
                  Choose File
                  <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                </label>
              </div>

              <div className="selected-image-container">
                {selectedImage && (
                  <div className="selected-image-box">
                    <img className='h-40 w-40' src={URL.createObjectURL(selectedImage)} alt="Selected" />
                    <button className="remove-image-button" onClick={handleRemoveImage}>
                      &#10005;
                    </button>
                  </div>
                )}
              </div>
              <div id="editor" className='h-fit bg-black rounded-lg border-2 border-[#9c36b5] p-2'>
                <TextEditor value={questionText} setValue={setQuestionText} />
              </div>

              <div className='flex'>
                <button className='bg-black border-2 border-[#9c36b5] text-[#9c36b5] px-4 py-2 rounded-lg mt-4' >Add sub question 1</button>
              </div>
            </div>

            <div className='text-center w-11/12 flex flex-col gap-1'>
              <div className='flex gap-5 justify-between items-center w-full'>
                <button className='bg-black mb-2 border-2 border-[#9c36b5] text-[#9c36b5] px-4 py-2 rounded-lg mt-4' onClick={handleAddImage}>
                  Add Image
                </button>
                <label className={addImage ? "visible custom-file-upload" : "hidden custom-file-upload"} >
                  Choose File
                  <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                </label>
              </div>

              <div className="selected-image-container">
                {selectedImage && (
                  <div className="selected-image-box">
                    <img className='h-40 w-40' src={URL.createObjectURL(selectedImage)} alt="Selected" />
                    <button className="remove-image-button" onClick={handleRemoveImage}>
                      &#10005;
                    </button>
                  </div>
                )}
              </div>
              <div id="editor" className=' bg-black rounded-lg border-2 border-[#9c36b5] p-2'>
                <TextEditor value={questionText} setValue={setQuestionText} />
              </div>

              <div className='flex'>
                <button className='bg-black border-2 border-[#9c36b5] text-[#9c36b5] px-4 py-2 rounded-lg mt-4' >Add sub question 2</button>
              </div>
            </div>

            <div className='flex'>
              <button className='bg-black border-2 border-[#9c36b5] text-[#9c36b5] px-4 py-2 rounded-lg mt-4'>Add Question</button>
            </div>
          </div> */}
        {/* // ) : ( */}
          <div className='text-center w-4/5 flex flex-col gap-1'>

            <div className='flex gap-5 justify-between items-center w-full'>
              <button className='bg-black mb-2 border-2 border-[#9c36b5] text-[#9c36b5] px-4 py-2 rounded-lg mt-4' onClick={handleAddImage}>
                Add Image
              </button>
              {/* Create a custom button to trigger file input */}
              <label className={addImage ? "visible custom-file-upload" : "hidden custom-file-upload"} >
                Choose File
                <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
              </label>
            </div>

            <div className="selected-image-container">
              {selectedImage && (
                <div className="selected-image-box">
                  <img className='h-40 w-40' src={URL.createObjectURL(selectedImage)} alt="Selected" />
                  <button className="remove-image-button" onClick={handleRemoveImage}>
                    &#10005;
                  </button>
                </div>
              )}
            </div>
            <div id="editor" className=' bg-black rounded-lg border-2 border-[#9c36b5] p-2'>
              <TextEditor value={questionText} setValue={setQuestionText} />
            </div>

            {/* Container to put add and done buttons */}
            <div className='flex'>
              <button className='bg-black border-2 border-[#9c36b5] text-[#9c36b5] px-4 py-2 rounded-lg mt-4' onClick={handleAddQuestion}>Add</button>

              <button className='bg-black border-2 border-[#ff0000] text-[#523bff] px-4 py-2 rounded-lg mt-4 ml-4' >Print</button>
            </div>
          </div>
        {/* // )
      } */}

      </div>
    </div>
  )
}

export default SetQuestionPaper