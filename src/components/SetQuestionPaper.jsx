import React, { useState, useEffect } from 'react'
import TextEditor from './TextEditor'
import Select from './Select';
import {
  courseOutcomeOptions, bloomLevelOptions, unitOptions, questionTypeOptions, longQuestionsSubTypeOptions
} from './index'
import { useDispatch, useSelector } from 'react-redux';
import { setShortQues } from '../store/features/questions/shortQuesSlice';
import { setLongQues } from '../store/features/questions/longQuesSlice';

function SetQuestionPaper() {

  const dispatch = useDispatch();
  // console.log('short question => ', useSelector(state => state.shortQues));
  console.log('long question => ', useSelector(state => state.longQues));

  // check if the four long questions are added
  const shortQuestionsLength = useSelector(state => state.shortQues.length);
  const longQuestionsLength = useSelector(state => state.longQues.length);
  console.log('short question length=>', shortQuestionsLength);
  console.log('long question length =>', longQuestionsLength);

  const [subQues, setSubQues] = useState([])
  // console.log('subQues => ', subQues);

  const [image, setImage] = useState('');
  const [addImage, setAddImage] = useState(false);
  const [questionText, setQuestionText] = useState('');

  const [longQuestionSubType, setLongQuestionSubType] = useState("1")

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
    setAddImage(false);
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
      alert('You can only add 8 short questions');

      resetFields();

      return;
    }

    dispatch((setShortQues(question)));

    resetFields()
  }

  const handleAddLongQuestion = () => {
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

    alert('Long question added successfully');
    resetFields()
  }

  const handleSubQuestion1 = () => {
    checkConditions()

    const question = {
      ques: questionText,
      maxMarks: 5,
      unit: unit,
      bloomLevel: bloomLevel,
      co: co,
      image: image ? URL.createObjectURL(image) : null,
    };

    setSubQues([...subQues, question]);
    alert('Sub question 1 added successfully');
    resetFields()
  }

  const handleSubQuestion2 = () => {
    checkConditions()

    const question = {
      ques: questionText,
      maxMarks: 5,
      unit: unit,
      bloomLevel: bloomLevel,
      co: co,
      image: image ? URL.createObjectURL(image) : null,
    };

    setSubQues([...subQues, question]);
    alert('Sub question 1 added successfully');
    resetFields()
  }

  const handleLongQuestionWithSubQuestions = () => {
    if (subQues.length < 2) {
      alert('Please add both sub questions');
      return;
    }
    dispatch(setLongQues({ subQues }));
  }

  const handleAddQuestion = () => {
    if (questionType === 'short') {
      handleAddShortQuestion();
    } else if (questionType === 'long' && longQuestionSubType === "1") {
      handleAddLongQuestion();
    } else if (questionType === 'long' && longQuestionSubType === "2") {
      if (subQues.length === 0) {
        handleSubQuestion1();
      } else if (subQues.length === 1) {
        handleSubQuestion2();
      }
    }
  };

  useEffect(() => {
    if (subQues.length === 2) {
      handleLongQuestionWithSubQuestions(); // Dispatch the long question with sub-questions
      setSubQues([]); // Clear the subQues array
    }
  }, [subQues]); // This effect runs when subQues changes


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