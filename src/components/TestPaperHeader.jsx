import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function TestPaperHeader({ textColor='text-black', borderColor='border-black' }) {
    const { examName, selectedPrograms, semester, courseCode, courseName, otherProgram, teacherName, teacherId } = useSelector(state => state.details.questionPaperDetails);

    const [year, setYear] = useState('');

    let academicSession;
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1; // Adding 1 since getMonth() returns 0-based index

    if (currentMonth > 6) {
        academicSession = `${currentDate.getFullYear()}-${currentDate.getFullYear() + 1}`;
    } else {
        academicSession = `${currentDate.getFullYear() - 1}-${currentDate.getFullYear()}`;
    }

    // Use useEffect to update the year when semester changes
    useEffect(() => {
        if (semester === 'I' || semester === 'II') {
            setYear('First Year');
        } else if (semester === 'III' || semester === 'IV') {
            setYear('Second Year');
        } else if (semester === 'V' || semester === 'VI') {
            setYear('Third Year');
        } else if (semester === 'VII' || semester === 'VIII') {
            setYear('Fourth Year');
        }
    }, [semester]);  // Only update when semester changes

    return (
        <div className="mt-2">
            <div className="bg-black">
                <img src="https://my-images-bucket-07.s3.ap-south-1.amazonaws.com/test-paper-header.jpg" alt="banner" className="w-full h-[100px]" />
            </div>

            {/* College Name, Exam Name, Program Name */}
            <div className={`${textColor} mt-4 flex flex-col items-center justify-center`}>
                <h1 className={`${textColor} font-bold text-base text-center`}>
                    College of Computing Sciences and Information Technology
                </h1>

                <h2
                    style={{ fontStyle: "italic" }}
                    className={`${textColor} text-base font-extrabold`}
                >
                    {examName && examName.toUpperCase()}
                </h2>
                <h2 className={`${textColor} text-xs`}>
                    Program Name: {selectedPrograms && selectedPrograms.length > 0 && selectedPrograms.join('/')}
                    {otherProgram ? `/${otherProgram.toUpperCase()}` : ''}
                </h2>
            </div>

            {/* Exam Details Table */}
            <div className="mt-1 flex flex-col items-center text-xs">
                <table className={`${borderColor} border-2 w-4/5`}>
                    <tbody>
                        <tr className={`${borderColor} border-2`}>
                            <td className={`${borderColor} px-2 text-xs  border-2`}>Year: {year}</td>
                            <td className={`${borderColor} px-2 text-xs  border-2`}>Semester: {semester}</td>
                            <td className={`${borderColor} px-2 text-xs  border-2`}>Academic Session: {academicSession}</td>
                        </tr>
                        <tr className={`${borderColor} border-2`}>
                            <td colSpan={2} className={`${borderColor} px-2 bborder-2`}>
                                Course Code: {courseCode && courseCode.toUpperCase()}
                            </td>
                            <td className={`${borderColor} px-2 border-2`}>
                                Course Name: {courseName && courseName.toUpperCase()}
                            </td>
                        </tr>
                        <tr className={`${borderColor} border-2`}>
                            <td colSpan={2} className={`${borderColor} px-2 border-2`}>
                                Duration: 90 minutes
                            </td>
                            <td className={`${borderColor} px-2 border-2`}>Max Marks: 30</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Bloom Level Details */}
            <p className={`${textColor} text-xs font-bold text-center`}>
                *Bloom Level{" "}
                {`{1-Remembering, 2-Understanding, 3-Applying, 4-Analyzing, 5-Evaluating, 6-Creating}`}
            </p>
        </div>
    );
}

export default TestPaperHeader;
