import {
  Banner,
  Credits,
  TestPaper,
  SetQuestionPaper,
  Bloom,
} from "./components/index"
import TestPaperDetails from "./components/TestPaperDetails"

function App() {

  return (
    <>
      <div>
        <Banner title={'THE EXAM SETTER'} logo={'src/assets/logo-with-name.png'}/>
      </div>
      <div className="flex gap-2 h-full bg-gradient-to-r from-[#a77ed6] to-[#a77ed6]">
        {/* Left Part */}
        <div className="w-1/2 p-2">
          <TestPaperDetails />
          <Bloom />
          <SetQuestionPaper />
        </div>

        {/* Right Part */}
        <div className="w-1/2 overflow-x-scroll bg-white">
            <TestPaper/>
        </div>
      </div>
      <Credits name={'Kushagra Katiha'} course={'B.Tech CSE (2021-2025)'} work={'Developed By: '} link={'https://www.linkedin.com/in/kushagrakatiha/'} logo={'src/assets/logo.png'} />
    </>
  )
}

export default App
