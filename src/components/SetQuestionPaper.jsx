import React, { useState, useEffect } from 'react'
import TextEditor from './TextEditor'
import Select from './Select';

function SetQuestionPaper() {
  
  const [image, setImage] = useState(null);
  const [addImage, setAddImage] = useState(false);
  const [questionText, setQuestionText] = useState(null)
  const [examName, setExamName] = useState('')
  const [selectedPrograms, setSelectedPrograms] = useState([])
  const [semester, setSemester] = useState('')
  const [year, setYear] = useState('')
  const [courseCode, setCourseCode] = useState('')
  const [courseName, setCourseName] = useState('')
  const [otherProgram, setOtherProgram] = useState('')
  // set Questions
  const [shortQuestions, setShortQuestions] = useState([])
  const [longQuestions, setLongQuestions] = useState([])
  // long question will have subtype, if subtype is 1 then do nothing, if subtype is 2 two question of 5 makrs each
  const [longQuestionSubType, setLongQuestionSubType] = useState(1)
  const [subQuestion1, setSubQuestion1] = useState(null)
  const [subQuestion2, setSubQuestion2] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null);

  // long question with sub question
  const [longQuestion, setLongQuestion] = useState({})
  const [questionType, setQuestionType] = useState('choose');
  const [unit, setUnit] = useState('-');
  const [bloomLevel, setBloomLevel] = useState('-');
  const [co, setCo] = useState('-');

  // Navigate to the next page

  const handlePreview = () => {
    if (shortQuestions.length === 8 && longQuestions.length === 4) {
      // Navigate to the next page
      navigate('/format')
    } else {
      alert('You have to add 8 short and 4 long questions')
    }
  }

  // Save long question array into local storage
  useEffect(() => {
    localStorage.setItem('longQuestions', JSON.stringify(longQuestions));
  }, [longQuestions]);

  // Save short question array into local storage
  useEffect(() => {
    localStorage.setItem('shortQuestions', JSON.stringify(shortQuestions));
  }, [shortQuestions]);

  // Print long questions and short questions from local storage when the component mounts

  // Save Exams Details into the local storage
  useEffect(() => {
    localStorage.setItem('examName', JSON.stringify(examName));
    localStorage.setItem('selectedPrograms', JSON.stringify(selectedPrograms));
    localStorage.setItem('semester', JSON.stringify(semester));
    localStorage.setItem('year', JSON.stringify(year));
    localStorage.setItem('courseCode', JSON.stringify(courseCode));
    localStorage.setItem('courseName', JSON.stringify(courseName));
    localStorage.setItem('otherProgram', JSON.stringify(otherProgram));
  }, [examName, selectedPrograms, semester, year, courseCode, courseName, otherProgram]);

  const handleAddImage = () => {
    setAddImage(!addImage);
    // Clear previously selected image
    setSelectedImage(null);
  };

  const handleRemoveImage = () => {
    setImage(null); // Clear the selected image
    setSelectedImage(null); // Clear the selected image from state
  };

  // Function to allow user to add image to the question
const handleImageChange = (e) => {
  const selectedImage = e.target.files[0];
  setImage(selectedImage); // Update state with selected image
  setSelectedImage(selectedImage); // Update state with selected image
};

  // Function to handle exam name
  const handleExamName = (e) => {
    setExamName(e.target.value)
  }

  // Function to handle adding selected program
  const handleProgramSelection = (e) => {
    const program = e.target.value;
    if (!selectedPrograms.includes(program)) {
      setSelectedPrograms([...selectedPrograms, program]);
    }
  };

  // Function to handle removing selected program
  const handleRemoveProgram = (program) => {
    setSelectedPrograms(selectedPrograms.filter((p) => p !== program));
  };

  const handleSemester = (e) => {
    setSemester(e.target.value)
  }

  const handleYear = () => {
    if (semester === 'I' || semester === 'II') {
      setYear('I')
    } else if (semester === 'III' || semester === 'IV') {
      setYear('II')
    } else if (semester === 'V' || semester === 'VI') {
      setYear('III')
    } else if (semester === 'VII' || semester === 'VIII') {
      setYear('IV')
    }
  }

  useEffect(() => {
    handleYear()
  }, [semester])

  const handleCourseCode = (e) => {
    setCourseCode(e.target.value)
  }

  const handleOtherProgram = (e) => {
    setOtherProgram(e.target.value)
  }

  const handleCourseName = (e) => {
    setCourseName(e.target.value)
  }

  const handleQuestionType = (e) => {
    setQuestionType(e.target.value)
  }

  const handleLongQuestionSubType = (e) => {
    setLongQuestionSubType(e.target.value)
  }

  const handleBloomLevel = (e) => {
    setBloomLevel(e.target.value)
  }

  const handleUnit = (e) => {
    setUnit(e.target.value)
  }

  const handleCo = (e) => {
    setCo(e.target.value)
  }

  const handleAddSubQuestion1 = () => {
    if(Object.keys(longQuestion).length == 1){
      alert('Already Added')
      return;
    }

    if(Object.keys(longQuestion).length == 2){
      alert('Both the quesions already added')
      return;
    }

    if (subQuestion1 == null || subQuestion1 === '<p><br></p>') {
      alert('Please enter the question');
      return; // Exit the function early
    }

    // Check if bloomLevel, unit, and co are not selected
    if (unit === '-' || bloomLevel === '-' || co === '-') {
      alert('Please select Unit, Bloom\'s Level, and Course Outcome.');
      return; // Exit the function early
    }

    const question = {
      ques: subQuestion1, // Set the ques property to the content from the Froala Editor
      maxMarks: 5,
      unit: unit,
      bloomLevel: bloomLevel,
      co: co,
      image: image ? URL.createObjectURL(image) : null,
    };
    setLongQuestion({ ...longQuestion, subQuestion1: question });
    setSubQuestion1(null);
    setImage(null);   // Clear the selected image
    setSelectedImage(null)
    setAddImage(false);
    setBloomLevel('-');
    setUnit('-');
    setCo('-');
    alert('Sub Question 1 added')
  }

  const handleAddSubQuestion2 = () => {
    if(Object.keys(longQuestion).length == 0){
      alert('Enter First Questions First')
      return;
    }

    if(Object.keys(longQuestion).length == 2){
      alert('Both the questions already added')
      return;
    }

    if (subQuestion2 == null || subQuestion2 === '<p><br></p>') {
      alert('Please enter the question');
      return; // Exit the function early
    }

    // Check if bloomLevel, unit, and co are not selected
    if (unit === '-' || bloomLevel === '-' || co === '-') {
      alert('Please select Unit, Bloom\'s Level, and Course Outcome.');
      return; // Exit the function early
    }

    const question = {
      ques: subQuestion2, // Set the ques property to the content from the Froala Editor
      maxMarks: 5,
      unit: unit,
      bloomLevel: bloomLevel,
      co: co,
      image: image ? URL.createObjectURL(image) : null,
    };
    setLongQuestion({ ...longQuestion, subQuestion2: question });
    setSubQuestion2(null);
    setImage(null);   // Clear the selected image
    setAddImage(false);
    alert('Sub Question 2 added')
  }

  const handleAddQuestion = () => {
    // Check if the question type is not selected
    if (questionType === 'choose') {
      alert('Please select the question type');
      return; // Exit the function early
    }

    // Check if unit, bloomLevel, and co are not selected
    if (unit === '-' || bloomLevel === '-' || co === '-') {
      alert('Please select Unit, Bloom\'s Level, and Course Outcome.');
      return; // Exit the function early
    }

    if (
      (questionType === 'short' && shortQuestions.length < 8) ||
      (questionType === 'long' && longQuestions.length < 4)
    ) {
      const marks = questionType === 'long' ? 10 : 2;
      // check if long question has sub question
      if (longQuestionSubType === '2') {
        if (Object.keys(longQuestion).length != 2) {
          alert('Please enter both sub questions');
          return; // Exit the function early
        }
        setLongQuestions((prevLongQuestions) => [...prevLongQuestions, longQuestion]);
        alert(`${longQuestions.length + 1} Long question added`);
        setLongQuestion({});
        setLongQuestionSubType(1);
        setSubQuestion1(null);
        setSubQuestion2(null);
        setQuestionType('choose');
        setUnit('');
        setBloomLevel('');
        setCo('');
        setQuestionText(null);
        setImage(null);   // Clear the selected image
        setSelectedImage(null)
        setAddImage(false);
        return;
      }

      // Check if the question is not empty
      if (questionText == null || questionText === '<p><br></p>') {
        alert('Please enter the question');
        return; // Exit the function early
      }

      const question = {
        ques: questionText, // Set the ques property to the content from the Froala Editor
        maxMarks: marks,
        unit: unit,
        bloomLevel: bloomLevel,
        co: co,
        image: image ? URL.createObjectURL(image) : null,
      };
      if (questionType === 'long') {
        setLongQuestions((prevLongQuestions) => [...prevLongQuestions, question]);
        alert(`${longQuestions.length + 1} Long question added`);
      } else if (questionType === 'short') {
        setShortQuestions([...shortQuestions, question]);
        alert(`${shortQuestions.length + 1} Short question added`);
      }
      setQuestionType('choose');
      setUnit('');
      setBloomLevel('');
      setCo('');
      setQuestionText(null);
      setImage(null);   // Clear the selected image
      setSelectedImage(null)
      setAddImage(false);
    } else {
      alert('You can only add 8 short and 4 long questions');
    }
  };

  const questionTypeOptions = [
    {
      value: '-',
      fullName: 'Choose'
    },
    {
      value: 'short',
      fullName: 'Short',
    },
    {
      value: 'long',
      fullName: 'Long',
    },
  ]

  const longQuestionsSubTypeOptions = [
    {
      value: '-',
      fullName: 'Choose'
    },
    {
      value: '1',
      fullName: 'No',
    },
    {
      value: '2',
      fullName: 'Yes',
    },
  ]

  const unitOptions = [
    {
      value: '-',
      fullName: 'Choose'
    },
    {
      value: '1',
      fullName: '1',
    },
    {
      value: '2',
      fullName: '2',
    },
    {
      value: '3',
      fullName: '3',
    },
    {
      value: '4',
      fullName: '4',
    },
    {
      value: '5',
      fullName: '5',
    },
  ]

  const bloomLevelOptions = [
    {
      value: '-',
      fullName: 'Choose'
    },
    {
      value: '1',
      fullName: '1',
    },
    {
      value: '2',
      fullName: '2',
    },
    {
      value: '3',
      fullName: '3',
    },
    {
      value: '4',
      fullName: '4',
    },
    {
      value: '5',
      fullName: '5',
    },
    {
      value: '6',
      fullName: '6',
    },
  ]

  const courseOutcomeOptions = [
    {
      value: '-',
      fullName: 'Choose'
    },
    {
      value: '1',
      fullName: '1',
    },
    {
      value: '2',
      fullName: '2',
    },
    {
      value: '3',
      fullName: '3',
    },
    {
      value: '4',
      fullName: '4',
    },
    {
      value: '5',
      fullName: '5',
    },
    {
      value: '6',
      fullName: '6',
    },
  ]

  return (
    <div>
        <h1 className='text-center text-3xl font-bold'>Set Questions Below</h1>

        {/* Container for other details */}
        <div className='flex justify-around w-full'>
            {/* Container to set question type */}
            <div className='bg-black h-fit p-2 rounded-lg border-2 border-[#9c36b5]'>
              <Select options={questionTypeOptions} labelStyle={'text-white'} label='Question Type' onChange={handleQuestionType} />
            </div>

            {/* Container to set question subtype */}
            {questionType === 'long' && (
              <div className='bg-black h-fit p-2 rounded-lg border-2 border-[#9c36b5]'>
                <Select value={longQuestionSubType} options={longQuestionsSubTypeOptions} label='Two Parts Needed ?' labelStyle='text-white' onChange={handleLongQuestionSubType}/>
              </div>
            )}

            {/* Container to set sub details */}
            <div className='flex justify-evenly gap-2 bg-black border-2 border-[#9c36b5] p-2 w-full rounded-lg'>
              {/* container to set unit */}
                <Select options={unitOptions} optionStyle='w-fit' onChange={handleUnit} value={unit} label='Unit' labelStyle='text-white text-sm'/>
      

              {/* Container to set Bloom's Level */}
              
                <Select options={bloomLevelOptions} optionStyle='w-fit' onChange={handleBloomLevel} value={bloomLevel} label='BL' labelStyle='text-white text-sm'/>
        

              {/* Container to set Course Outcome */}
             
              <Select options={courseOutcomeOptions} optionStyle='w-fit' onChange={handleCo} value={co} label='CO' labelStyle='text-white text-sm'/>
              </div>
           
        </div>

        <div className='flex ml-10 items-end mt-5 gap-10 font-extrabold'>
          {/* Container to set question */}
          {/* If long questions sub type is two add two questions of 5 marks each*/}

          {questionType === 'long' && longQuestionSubType === '2' ? (
            <div className='flex flex-col justify-center items-center w-full'>
              {/* Long Sub Question 1 container */}
              <div className='text-center w-11/12 flex flex-col gap-1'>

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
                <div id="editor" className='h-fit bg-black rounded-lg border-2 border-[#9c36b5] p-2'>
                  <TextEditor/>
                </div>

                {/* Container to put add button*/}
                <div className='flex'>
                  <button className='bg-black border-2 border-[#9c36b5] text-[#9c36b5] px-4 py-2 rounded-lg mt-4' onClick={handleAddSubQuestion1}>Add sub question 1</button>
                </div>
              </div>

              {/* Long Sub Question 2 container */}
              <div className='text-center w-11/12 flex flex-col gap-1'>
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
                  <TextEditor/>
                </div>

                {/* Container to put add button*/}
                <div className='flex'>
                  <button className='bg-black border-2 border-[#9c36b5] text-[#9c36b5] px-4 py-2 rounded-lg mt-4' onClick={handleAddSubQuestion2}>Add sub question 2</button>
                </div>
              </div>

              <div className='flex'>
                <button className='bg-black border-2 border-[#9c36b5] text-[#9c36b5] px-4 py-2 rounded-lg mt-4' onClick={handleAddQuestion}>Add Question</button>
              </div>
            </div>
          ) : (
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
                <TextEditor />
              </div>

              {/* Container to put add and done buttons */}
              <div className='flex'>
                <button className='bg-black border-2 border-[#9c36b5] text-[#9c36b5] px-4 py-2 rounded-lg mt-4' onClick={handleAddQuestion}>Add</button>

                <button className='bg-black border-2 border-[#ff0000] text-[#523bff] px-4 py-2 rounded-lg mt-4 ml-4' onClick={handlePreview}>Preview</button>
              </div>
            </div>
          )}

        </div>
    </div>
  )
}

export default SetQuestionPaper