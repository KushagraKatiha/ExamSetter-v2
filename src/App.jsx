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
      <TestPaperDetails />
      <div className="w-1/2 border-r-2 border-r-black h-auto p-4 bg-gradient-to-r from-[#a77ed6] to-[#ffffff]">
        <TextEditor />
      </div>
      <Credits name={'Kushagra Katiha'} course={'B.Tech CSE (2021-2025)'} work={'Developed By: '} link={'https://www.linkedin.com/in/kushagrakatiha/'} logo={'src/assets/logo.png'} />
    </>
  )
}

export default App
