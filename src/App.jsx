import {
  Banner,
  Credits,
  TextEditor
} from "./components/index"
import TestPaperDetails from "./components/TestPaperDetails"

function App() {

  return (
    <>
      <Banner title={'THE EXAM SETTER'} logo={'src/assets/logo-with-name.png'}/>
      <div className="flex h-auto p-4 bg-gradient-to-r from-[#a77ed6] to-[#a77ed6]">

        {/* Left Part */}
        <div className="w-1/2 border-r-2 border-r-black">
          <TestPaperDetails />
          <p className="px-4 text-white bg-black py-2 border-4 font-extrabold border-[#9c36b5] rounded-2xl mb-2 text-center w-fit m-auto">
            Bloom Levels:{" "}
            {`1-Remenbering 2-Understanding 3-Applying 4-Analyzing 5-Evaluating 6-Creating`}
          </p>
        </div>

        {/* Right Part */}
        <div className="w-1/2 bg-gradient-to-l from-[#a77ed6] to-[#ffffff]">
          Preview 
        </div>
      </div>
      <Credits name={'Kushagra Katiha'} course={'B.Tech CSE (2021-2025)'} work={'Developed By: '} link={'https://www.linkedin.com/in/kushagrakatiha/'} logo={'src/assets/logo.png'} />
    </>
  )
}

export default App
