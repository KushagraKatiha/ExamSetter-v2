import React, { useState, useEffect } from 'react';
import {
  courseOutcomeOptions, bloomLevelOptions, unitOptions, questionTypeOptions, longQuestionsSubTypeOptions, Button, Input, TextEditor, Select, Image
} from './index';
import { useDispatch, useSelector } from 'react-redux';
import { setShortQues } from '../store/features/questions/shortQuesSlice';
import { setLongQues } from '../store/features/questions/longQuesSlice';
import { FaTrash } from 'react-icons/fa'; 

function SetQuestionPaper() {
  const dispatch = useDispatch();

  const shortQuestionsLength = useSelector(state => state.shortQues.length);
  const longQuestionsLength = useSelector(state => state.longQues.length);

  const [subQues, setSubQues] = useState([]);
  const [image, setImage] = useState(null);  
  const [addImage, setAddImage] = useState(false);
  const [questionText, setQuestionText] = useState('');
  const [longQuestionSubType, setLongQuestionSubType] = useState('1');
  const [questionType, setQuestionType] = useState('-');
  const [unit, setUnit] = useState('-');
  const [bloomLevel, setBloomLevel] = useState('-');
  const [co, setCo] = useState('-');

  const handleAddImage = () => setAddImage(!addImage);
  const handleRemoveImage = () => {
    setImage(null);
    handleAddImage();
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const checkConditions = () => {
    if (questionType === '-' || unit === '-' || bloomLevel === '-' || co === '-') {
      alert('Please fill in all required fields');
      return false;
    }
    return true;
  };

  const resetFields = () => {
    setQuestionType('-');
    setUnit('-');
    setBloomLevel('-');
    setCo('-');
    setQuestionText('');
    setImage(null);
    setAddImage(false);
  };

  const handleAddShortQuestion = () => {
    if (!checkConditions()) return;

    const question = {
      ques: questionText,
      maxMarks: 2,
      unit,
      bloomLevel,
      co,
      image: image ? URL.createObjectURL(image) : null,
    };

    if (shortQuestionsLength >= 8) {
      alert('You can only add 8 short questions');
      resetFields();
      return;
    }

    dispatch(setShortQues(question));
    alert('Short question added successfully');
    resetFields();
  };

  const handleAddLongQuestion = () => {
    if (!checkConditions()) return;

    const question = {
      ques: questionText,
      maxMarks: 10,
      unit,
      bloomLevel,
      co,
      image: image ? URL.createObjectURL(image) : null,
    };

    if (longQuestionsLength >= 4) {
      alert('You can only add 4 long questions');
      resetFields();
      return;
    }

    dispatch(setLongQues(question));
    alert('Long question added successfully');
    resetFields();
  };

  const handleSubQuestion1 = () => {
    if (!checkConditions()) return;

    const question = {
      ques: questionText,
      maxMarks: 5,
      unit,
      bloomLevel,
      co,
      image: image ? URL.createObjectURL(image) : null,
    };

    setSubQues([...subQues, question]);
    alert('Sub-question 1 added successfully');
    resetFields();
  };

  const handleSubQuestion2 = () => {
    if (!checkConditions()) return;

    const question = {
      ques: questionText,
      maxMarks: 5,
      unit,
      bloomLevel,
      co,
      image: image ? URL.createObjectURL(image) : null,
    };

    setSubQues([...subQues, question]);
    alert('Sub-question 2 added successfully');
    resetFields();
  };

  const handleLongQuestionWithSubQuestions = () => {
    if (subQues.length < 2) {
      alert('Please add both sub-questions');
      return;
    }
    dispatch(setLongQues({ subQues }));
    setSubQues([]);
  };

  const handleAddQuestion = () => {
    if (questionType === 'short') {
      handleAddShortQuestion();
    } else if (questionType === 'long' && longQuestionSubType === '1') {
      handleAddLongQuestion();
    } else if (questionType === 'long' && longQuestionSubType === '2') {
      if (subQues.length === 0) {
        handleSubQuestion1();
      } else if (subQues.length === 1) {
        handleSubQuestion2();
      }
    }
  };

  useEffect(() => {
    if (subQues.length === 2) {
      handleLongQuestionWithSubQuestions();
    }
  }, [subQues]);

  return (
    <div>
      <h1 className="text-center text-3xl font-bold text-[#ffffff]">Set Questions Below</h1>

      {/* Question Details */}
      <div className="flex justify-around w-full mt-5">
        {/* Question Type */}
        <div className="bg-[#111827] p-2 rounded-lg border-2 border-[#4b5563]">
          <Select
            options={questionTypeOptions}
            label="Question Type"
            value={questionType}
            onChange={e => setQuestionType(e.target.value)}
            labelStyle="text-white"
          />
        </div>

        {/* Long Question SubType */}
        {questionType === 'long' && (
          <div className="bg-[#111827] p-2 rounded-lg border-2 border-[#4b5563]">
            <Select
              value={longQuestionSubType}
              options={longQuestionsSubTypeOptions}
              label="Two Parts Needed?"
              onChange={e => setLongQuestionSubType(e.target.value)}
              labelStyle="text-white"
            />
          </div>
        )}

        {/* Sub-Details */}
        <div className="flex gap-2 bg-[#111827] border-2 border-[#4b5563] p-2 w-full rounded-lg">
          <Select
            options={unitOptions}
            value={unit}
            onChange={e => setUnit(e.target.value)}
            label="Unit"
            labelStyle="text-white text-sm"
          />
          <Select
            options={bloomLevelOptions}
            value={bloomLevel}
            onChange={e => setBloomLevel(e.target.value)}
            label="BL"
            labelStyle="text-white text-sm"
          />
          <Select
            options={courseOutcomeOptions}
            value={co}
            onChange={e => setCo(e.target.value)}
            label="CO"
            labelStyle="text-white text-sm"
          />
        </div>
      </div>

      {/* Add Image and Question */}
      <div className="flex flex-col items-center gap-5 mt-5">
        <Button label={!addImage ? 'Add Image' : 'Close'} onClick={handleAddImage} className="bg-[#111827] border-2 border-[#4b5563] text-white px-4 py-2 rounded-lg" />

        {addImage && (
          <label className="custom-file-upload">
            Choose File
            <Input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
          </label>
        )}

        {image && (
          <div className="selected-image-box">
            <Image className="h-20 w-20" src={URL.createObjectURL(image)} alt="Selected" />
            <Button className="mt-1 p-1 remove-image-button" onClick={handleRemoveImage} label={<FaTrash />} />
          </div>
        )}

        <div id="editor" className="bg-[#111827] rounded-lg border-2 border-[#4b5563] p-2 w-full">
          <TextEditor value={questionText} setValue={setQuestionText} />
        </div>

        {/* Add Question Button */}
        <Button
          label="Add"
          onClick={handleAddQuestion}
          className="bg-[#111827] border-2 border-[#4b5563] text-white px-4 py-2 rounded-lg mt-4"
        />
      </div>
    </div>
  );
}

export default SetQuestionPaper;
