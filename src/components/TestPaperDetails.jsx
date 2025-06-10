import React, { useState, useEffect } from 'react';
import { Select, courses, Input, Button, examList, semesterList } from './index';
import { useDispatch, useSelector } from 'react-redux';
import { editDetails, setDetails } from '../store/features/questionPaperDetails/detailsSlice';
import { adminAPI, subjectAPI, mappingAPI } from '../services/api';

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

    // States for teachers, subjects, and mappings
    const [teachers, setTeachers] = useState([]);
    const [subjects, setSubjects] = useState([]);
    const [mappings, setMappings] = useState([]);
    const [selectedTeacher, setSelectedTeacher] = useState(null);
    const [teacherSubjects, setTeacherSubjects] = useState([]);
    const [selectedSubject, setSelectedSubject] = useState('');

    // Fetch teachers, subjects, and mappings on component mount
    useEffect(() => {
        const fetchData = async () => {
            try {
                const [teachersData, subjectsData, mappingsData] = await Promise.all([
                    adminAPI.getTeachers(),
                    subjectAPI.getSubjects(),
                    mappingAPI.getMappings()
                ]);
                setTeachers(teachersData);
                setSubjects(subjectsData);
                setMappings(mappingsData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    // Handle teacher selection
    const handleTeacherChange = (e) => {
        const selectedTeacherId = e.target.value;
        const teacher = teachers.find(t => t._id === selectedTeacherId);
        
        if (teacher) {
            setTeacherName(teacher.name);
            setTeacherId(teacher._id);
            setSelectedTeacher(teacher);

            // Find all mappings for this teacher
            const teacherMappings = mappings.filter(mapping => {
                // Handle both populated and non-populated mapping objects
                const mappingTeacherId = typeof mapping.teacherId === 'object' 
                    ? mapping.teacherId._id 
                    : mapping.teacherId;
                return mappingTeacherId === teacher._id;
            });

            // Get subjects for this teacher
            const subjectsForTeacher = teacherMappings.map(mapping => {
                // Handle both populated and non-populated mapping objects
                if (typeof mapping.subjectId === 'object') {
                    return mapping.subjectId;
                } else {
                    return subjects.find(subject => subject._id === mapping.subjectId);
                }
            }).filter(Boolean);

            console.log('Teacher Mappings:', teacherMappings);
            console.log('Subjects for Teacher:', subjectsForTeacher);
            
            setTeacherSubjects(subjectsForTeacher);
            setSelectedSubject(''); // Reset selected subject
            clearSubjectDetails();
        } else {
            clearTeacherAndSubjectDetails();
        }
    };

    // Handle subject selection
    const handleSubjectChange = (e) => {
        const subjectId = e.target.value;
        console.log('Selected Subject ID:', subjectId);
        console.log('Available Subjects:', teacherSubjects);
        
        const subject = teacherSubjects.find(s => s._id === subjectId);
        console.log('Found Subject:', subject);
        
        if (subject) {
            setSelectedSubject(subjectId);
            populateSubjectDetails(subject);
        } else {
            clearSubjectDetails();
        }
    };
    
    // Populate subject details
    const populateSubjectDetails = (subject) => {
        setCourseName(subject.name);
        setCourseCode(subject.code);
        setOtherProgram(subject.otherProgram || '');
    };

    // Clear subject details
    const clearSubjectDetails = () => {
        setSelectedSubject('');
        setCourseName('');
        setCourseCode('');
        setSemester('');
        setSelectedPrograms([]);
        setOtherProgram('');
    };

    // Clear teacher and subject details
    const clearTeacherAndSubjectDetails = () => {
        setTeacherName('');
        setTeacherId('');
        setSelectedTeacher(null);
        setTeacherSubjects([]);
        clearSubjectDetails();
    };

    const handleProgramSelection = (e) => {
        const program = e.target.value;
        if (program && !selectedPrograms.includes(program)) {
            setSelectedPrograms([...selectedPrograms, program]);
        }
    };

    const handleRemoveProgram = (program) => {
        setSelectedPrograms(selectedPrograms.filter((p) => p !== program));
    };

    const handleSave = () => {
        if (semester === '' || examName === '' || courseCode === '' || courseName === '' || selectedPrograms.length === 0) {
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
            teacherId,
            subjectId: selectedSubject
        };
        dispatch(setDetails(details));
    };

    const handleEdit = () => {
        dispatch(editDetails());
    };

    return (
        <div className='bg-[#121212] border-[#4b5563] border-2 p-4 rounded-lg mb-2'>
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
                                className="bg-[#333333] text-white border border-[#888888]"
                            />
                        </td>
                        <td className='p-2'>
                            <div>
                                <label className="block text-sm font-medium text-white mb-1">
                                    Faculty's Name
                                </label>
                                <select
                                    value={teacherId}
                                    onChange={handleTeacherChange}
                                    disabled={disabled}
                                    className="w-full bg-[#333333] text-white border border-[#888888] p-2 rounded focus:outline-none focus:border-blue-500"
                                >
                                    <option value="">Select Teacher</option>
                                    {teachers.map((teacher) => (
                                        <option key={teacher._id} value={teacher._id}>
                                            {teacher.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </td>
                        <td className='p-2'>
                            <Input
                                label='Employee Code'
                                type='text'
                                placeholder='ID...'
                                value={teacherId}
                                disabled={true}
                                className="bg-[#333333] text-white border border-[#888888]"
                            />
                        </td>
                    </tr>

                    {/* Course Selection Row */}
                    {teacherSubjects.length > 0 && (
                        <tr>
                            <td className='p-2' colSpan="3">
                                <div>
                                    <label className="block text-sm font-medium text-white mb-1">
                                        Select Course
                                    </label>
                                    <select
                                        value={selectedSubject}
                                        onChange={handleSubjectChange}
                                        disabled={disabled}
                                        className="w-full bg-[#333333] text-white border border-[#888888] p-2 rounded focus:outline-none focus:border-blue-500"
                                    >
                                        <option value="">Select Course</option>
                                        {teacherSubjects.map((subject) => (
                                            <option key={subject._id} value={subject._id}>
                                                {subject.name} ({subject.code})
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </td>
                        </tr>
                    )}

                    {/* Second Row */}
                    <tr>
                        <td className='p-2'>
                            <Input
                                label='Course Name'
                                type='text'
                                value={courseName}
                                disabled={true}
                                className="bg-[#333333] text-white border border-[#888888]"
                            />
                        </td>
                        <td className='p-2'>
                            <Input
                                label='Course Code'
                                type='text'
                                value={courseCode}
                                disabled={true}
                                className="bg-[#333333] text-white border border-[#888888]"
                            />
                        </td>
                        <td className='p-2'>
                            <Select
                                options={semesterList}
                                label='Semester'
                                value={semester}
                                onChange={(e) => setSemester(e.target.value)}
                                disabled={disabled}
                                className="bg-[#333333] text-white border border-[#888888]"
                            />
                        </td>
                    </tr>

                    {/* Third Row */}
                    <tr>
                        <td className='p-2'>
                            <Select
                                options={courses}
                                label='Program Name'
                                value={selectedPrograms[0] || ''}
                                onChange={handleProgramSelection}
                                disabled={disabled}
                                className="bg-[#333333] text-white border border-[#888888]"
                            />
                        </td>
                        <td className='p-2'>
                            <Input
                                type='text'
                                placeholder='Other Program...'
                                label='Other Program'
                                value={otherProgram}
                                onChange={(e) => setOtherProgram(e.target.value)}
                                disabled={disabled}
                                className="bg-[#333333] text-white border border-[#888888]"
                            />
                        </td>
                        <td className='p-2'>
                            <Button
                                className='bg-[#111827] border-2 border-[#4b5563] text-white px-4 py-2 rounded-lg mt-4'
                                label={disabled ? 'Edit' : 'Save'}
                                onClick={disabled ? handleEdit : handleSave}
                            />
                        </td>
                    </tr>

                    {/* Fourth Row - Selected Programs */}
                    <tr>
                        <td colSpan="3" className='p-2'>
                            <div className='mt-1'>
                                {selectedPrograms.map((program, index) => (
                                    <div key={index} className='inline-block mb-1 bg-[#333333] rounded-lg px-2 py-1 mr-2'>
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
    );
}

export default TestPaperDetails;