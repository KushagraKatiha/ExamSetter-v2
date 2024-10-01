import React, { useState } from 'react'
import { Select, courses, Input, Button, examList, semesterList } from './index'
import { useDispatch, useSelector } from 'react-redux'
import { editDetails, setDetails } from '../store/features/questionPaperDetails/detailsSlice'

function TestPaperDetails() {
    const dispatch = useDispatch();
    const { disabled } = useSelector(state => state.details);

    const [examName, setExamName] = useState('');
    const [selectedPrograms, setSelectedPrograms] = useState([]);
    const [semester, setSemester] = useState('');
    const [courseCode, setCourseCode] = useState('');
    const [courseName, setCourseName] = useState('');
    const [otherProgram, setOtherProgram] = useState('');
    const [teacherName, setTeacherName] = useState('');
    const [teacherId, setTeacherId] = useState('');

    const handleProgramSelection = (e) => {
        const program = e.target.value;
        if (!selectedPrograms.includes(program)) {
            setSelectedPrograms([...selectedPrograms, program]);
        }
    };

    const handleRemoveProgram = (program) => {
        setSelectedPrograms(selectedPrograms.filter((p) => p !== program));
    };

    const handleSave = () => {

        if (semester === '' || examName === '' || courseCode === '' || courseName === '' || teacherName === '' || teacherId === '' || selectedPrograms.length === 0) {
            alert('Please fill all the exam details');
            return;
        }

        const details = {
            examName,
            selectedPrograms,
            semester,
            courseCode,
            courseName,
            otherProgram,
            teacherName,
            teacherId
        };
        dispatch(setDetails(details));
    };

    const handleEdit = () => {
        dispatch(editDetails());
    }


    return (
        <div className='bg-[#a77ed6] mb-2'>
            <table className='w-full border-collapse'>
                <tbody>
                    {/* First Row */}
                    <tr>
                        <td className='p-2'>
                            <Select
                                options={examList}
                                label='Exam Name'
                                value={examName}
                                onChange={(e) => setExamName(e.target.value)}
                                disabled={disabled}
                            />
                        </td>
                        <td className='p-2'>
                            <Input
                                label='Teacher'
                                type='text'
                                placeholder='Teacher...'
                                value={teacherName}
                                onChange={(e) => setTeacherName(e.target.value)}
                                disabled={disabled}
                            />
                        </td>
                        <td className='p-2'>
                            <Input
                                label='Teacher ID'
                                type='text'
                                placeholder='Id...'
                                value={teacherId}
                                onChange={(e) => setTeacherId(e.target.value)}
                                disabled={disabled}
                            />
                        </td>
                    </tr>

                    {/* Second Row */}
                    <tr>
                        <td className='p-2'>
                            <Input
                                label='Course Name'
                                type='text'
                                placeholder='Enter course name...'
                                value={courseName}
                                onChange={(e) => setCourseName(e.target.value)}
                                disabled={disabled}
                            />
                        </td>
                        <td className='p-2'>
                            <Input
                                label='Course Code'
                                type='text'
                                placeholder='Enter course code...'
                                value={courseCode}
                                onChange={(e) => setCourseCode(e.target.value)}
                                disabled={disabled}
                            />
                        </td>
                        <td className='p-2'>
                            <Select
                                options={semesterList}
                                label='Semester'
                                value={semester}
                                onChange={(e) => setSemester(e.target.value)}
                                disabled={disabled}
                            />
                        </td>
                    </tr>

                    {/* Third Row */}
                    <tr>
                        <td className='p-2'>
                            <Select
                                options={courses}
                                label='Program Name'
                                onChange={handleProgramSelection}
                                disabled={disabled}
                            />
                        </td>
                        <td className='p-2 content-end'>
                            <Input
                                type='text'
                                placeholder='Other Program...'
                                value={otherProgram}
                                onChange={(e) => setOtherProgram(e.target.value)}
                                disabled={disabled}
                            />
                        </td>
                        <td className='p-2 content-end'>
                                <Button
                                    className='w-full'
                                    label= {disabled ? 'Edit' : 'Save'}
                                    onClick={disabled ? handleEdit : handleSave}
                                />
                        </td>


                    </tr>

                    {/* Fourth Row */}
                    <tr>
                        <td colSpan="3" className='p-2'>
                            <div className='mt-1'>
                                {selectedPrograms.map((program, index) => (
                                    <div key={index} className='inline-block mb-1 bg-black rounded-lg px-2 py-1 mr-2'>
                                        <span className='text-white text-sm'>{program}</span>
                                        <button
                                            onClick={() => handleRemoveProgram(program)}
                                            className='text-red-500 text-sm focus:outline-none ml-1'
                                            disabled={disabled}
                                        >
                                            &#10005;
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TestPaperDetails;
