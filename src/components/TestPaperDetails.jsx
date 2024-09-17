import React, { useState } from 'react'
import { Select, options, Input, Button } from './index'

function TestPaperDetails() {
    const examList = [
        { value: 'Class Test First', fullName: 'Class Test First' },
        { value: 'Class Test Second', fullName: 'Class Test Second' },
        { value: 'Class Test Third', fullName: 'Class Test Third' },
    ]
    const semesterList = [
        { value: 'I', fullName: 'I' },
        { value: 'II', fullName: 'II' },
        { value: 'III', fullName: 'III' },
        { value: 'IV', fullName: 'IV' },
        { value: 'V', fullName: 'V' },
        { value: 'VI', fullName: 'VI' },
        { value: 'VII', fullName: 'VII' },
        { value: 'VIII', fullName: 'VIII' },
    ]

    const [examName, setExamName] = useState('')
    const [selectedPrograms, setSelectedPrograms] = useState([])
    const [semester, setSemester] = useState('')
    const [year, setYear] = useState('')
    const [courseCode, setCourseCode] = useState('')
    const [courseName, setCourseName] = useState('')
    const [otherProgram, setOtherProgram] = useState('')
    const [teacherName, setTeacherName] = useState('')
    const [teacherId, setTeacherId] = useState('')

    const handleProgramSelection = (e) => {
        const program = e.target.value;
        if (!selectedPrograms.includes(program)) {
            setSelectedPrograms([...selectedPrograms, program]);
        }
    };

    const handleRemoveProgram = (program) => {
        setSelectedPrograms(selectedPrograms.filter((p) => p !== program));
    };


    return (
        <div className='bg-gradient-to-r from-[#a77ed6] to-[#ffffff] mb-2'>
            <table className='w-full border-collapse'>
                <tbody>
                    {/* First Row */}
                    <tr>
                        <td className='p-2'>
                            <Select options={examList} label='Exam Name' onChange={(e) => setExamName(e.target.value)} />
                        </td>
                        <td className='p-2'>
                            <Input label='Teacher' type='text' placeholder='Teacher...' onChange={(e) => setTeacherName(e.target.value)} />
                        </td>
                        <td className='p-2'>
                            <Input label='Teacher ID' type='text' placeholder='Id...' onChange={(e) => setTeacherId(e.target.value)} />
                        </td>
                    </tr>

                    {/* Second Row */}
                    <tr>
                        <td className='p-2'>
                            <Input label='Course Name' type='text' placeholder='Enter course name...' onChange={(e) => setCourseName(e.target.value)} />
                        </td>
                        <td className='p-2'>
                            <Input label='Course Code' type='text' placeholder='Enter course code...' onChange={(e) => setCourseCode(e.target.value)} />
                        </td>
                        <td className='p-2'>
                            <Select options={semesterList} label='Semester' onChange={(e) => setSemester(e.target.value)} />
                        </td>
                    </tr>

                    {/* Third Row */}
                    <tr>
                        <td className='p-2'>
                            <Select options={options} label='Program Name' onChange={handleProgramSelection} />
                        </td>
                        <td className='p-2 content-end'>
                            <Input type='text' placeholder='Other Program...' onChange={(e) => setOtherProgram(e.target.value)} />
                        </td>
                        <td className='p-2 content-end'>
                            <Button className='w-full' label='Save' /> {/* TODO: make a function to update the state of the exam details */}
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

export default TestPaperDetails