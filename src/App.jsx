import {
  Banner,
  Credits,
  PreviewComponent,
  SetQuestionPaper,
  Bloom,
} from "./components/index";
import TestPaperDetails from "./components/TestPaperDetails";

function App() {
  return (
    <>
      <div>
        <Banner title={'THE EXAM SETTER'} logo={'https://my-images-bucket-07.s3.ap-south-1.amazonaws.com/logo-with-name.png'} />
      </div>
      <div className="flex gap-2 h-full bg-[#1e1e1e]">
        {/* Left Part */}
        <div className="w-1/2 p-2">
          <TestPaperDetails />
          <Bloom />
          <SetQuestionPaper />
        </div>

        {/* Right Part */}
        <PreviewComponent />
      </div>
      <Credits
        name={'Kushagra Katiha'}
        course={'B.Tech CSE (2021-2025)'}
        work={'Developed By: '}
        link={'https://www.linkedin.com/in/kushagrakatiha/'}
        logo={'https://my-images-bucket-07.s3.ap-south-1.amazonaws.com/logo.png'}
      />
    </>
  );
}

export default App;
