import React, { useState } from 'react'
import { Select, options, Input } from './index'

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
        <div className='grid grid-cols-4 gap-3 bg-gradient-to-r from-[#a77ed6] to-[#ffffff] w-1/2 pb-2 pl-2 border-r-2 border-r-black'>
            <div>
                <Select options={examList} label='Exam Name' />
                <div className='flex flex-col'>
                    <Input label='Teacher' type='text' placeholder='Teacher...' onChange={(e) => setTeacherName(e.target.value)} />
                    <Input label='Teacher ID' type='text' placeholder='Id...' onChange={(e) => setTeacherId(e.target.value)} />
                </div>
            </div>
            <div>
                <Input label='Course Name' type='text' placeholder='Enter course name...' onChange={(e) => setCourseName(e.target.value)} />
                <Input label='Course Code' type='text' placeholder='Enter course code...' onChange={(e) => setCourseCode(e.target.value)} />
                <Select options={semesterList} label='Semester' onChange={(e) => setSemester(e.target.value)} />
            </div>


            <div className='flex flex-col gap-3'>
                <Select options={options} label='Program Name' onChange={handleProgramSelection} />
                <Input type='text' placeholder='Other Program...' onChange={(e) => setOtherProgram(e.target.value)} />

            </div>

            <div className='mt-1'>
                {selectedPrograms.map((program, index) => (
                    <div key={index} className='w-fit mb-1 bg-black rounded-lg px-2 py-1'>
                        <span className='text-white text-sm'>{program}</span>
                        <button
                            onClick={() => handleRemoveProgram(program)}
                            className='text-red-500 text-sm focus:outline-none'
                        >
                            &#10005;
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TestPaperDetails