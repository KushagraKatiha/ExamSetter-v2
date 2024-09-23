import React from 'react'

function TestPaperHeader() {
  return (
    <>
        <div className="bg-black mt-2">
            <img src="src/assets/test-paper-header.jpg" alt="banner" className="w-full h-[100px]" />
        </div>

        {/* College Name, Exam Name, Program Name */}
        <div className="mt-4 text-black flex flex-col items-center justify-center">
            <h1 className="font-bold text-base text-center">
            College of Computing Sciences and Information Technology
            </h1>

            <h2
            style={{ fontStyle: "italic" }}
            className="text-base font-extrabold"
            >
            {/* {examName.toUpperCase()} */}
            </h2>
            <h2 className="text-xs">
            Program Name: 
            {/* {selectedPrograms.toString().split(',').join('/')}{otherProgram ? "/" : " "}{otherProgram.toUpperCase()} */}

            </h2>
        </div>

        {/* Exam Details Table */}
        <div className="mt-1 text-black flex flex-col items-center text-xs">
            <table className="border-black border-2 w-4/5">
            <tbody>
                <tr className="border-black border-2">
                <td className="px-2 border-black border-2">Year:
                    {/* {year} */}
                    </td>
                <td className="px-2 border-black border-2">
                    Semester:
                    {/* {semester} */}
                </td>
                <td className="px-2 border-black border-2">
                    Academic Session: 
                    {/* {academicSession} */}
                </td>
                </tr>
                <tr className="border-black border-2">
                <td colSpan={2} className="px-2 border-black border-2">
                    Course Code: 
                    {/* {courseCode.toString().toUpperCase()} */}
                </td>
                <td className="px-2 border-black border-2">
                    Course Name: 
                    {/* {courseName.toUpperCase()} */}
                </td>
                </tr>
                <tr className="border-black border-2">
                <td colSpan={2} className="px-2 border-black border-2">
                    Duration: 90 minutes
                </td>
                <td className="px-2 border-black border-2">Max Marks: 30</td>
                </tr>
            </tbody>
            </table>
        </div>

        {/* Bloom Level Details */}
        <p className="text-xs font-bold text-black text-center">
            *Bloom Level{" "}
            {`{1-Remenbering, 2-Understanding, 3-Applying, 4-Analyzing, 5-Evaluating, 6-Creating}`}
        </p>
    </>
  )
}

export default TestPaperHeader