
const courses = [
    {   
        value: 'B.Tech CSE',
        fullName: 'B.Tech. (CSE) (Computer Sciences and Engineering)'
    },
    {
        value: 'B.Tech AI-ML-DL',
        fullName: 'B.Tech. (CSE) Specialization in Artificial Intelligence, Machine Learning & Deep Learning'
    },
    {
        value: 'B.Tech CTIS',
        fullName: 'B.Tech.(CSE)-Cloud Technology & Information Security (CTIS) (In Collaboration with i-Nurture) (Was Offered till 2023-24.)'
    },
    {
        value: 'B.Tech i-Nurture',
        fullName: 'B.Tech.(CSE)-Cyber Security (In Collaboration with i-Nurture) (Was Offered till 2023-24.)'
    },
    {
        value: 'B.Tech AI',
        fullName: 'B.Tech.(CSE)-specialisation in Artificial Intelligence (In Collaboration with i-Nurture) (Was Offered till 2023-24.)'
    },
    {
        value: 'B.Tech IBM',
        fullName: 'B.Tech.(CSE)-Application Development using Cloud & Analytics Platform (In Collaboration with IBM) (Was Offered till 2023-24.)'
    },
    {
        value: 'B.Tech TCS',
        fullName: 'B.Tech.(CSE)-Data Science (In Collaboration with TCS iON)'
    },
    {
        value: 'BCA',
        fullName: 'BCA (Bachelor of Computer Applications)'
    },
    {
        value: 'BCA MAWT',
        fullName: 'BCA-Mobile Applications & Web Technologies (MAWT) (In collaboration with i-Nurture) (Was Offered till 2023-24.)'
    },
    {
        value: 'BCA CTIS',
        fullName: 'BCA-Cloud Technology & Information Security (CTIS) (In collaboration with i-Nurture) (Was Offered till 2023-24.)'
    },
    {
        value: 'BCA Hons.',
        fullName: 'BCA (Hons.) with Research (From Session 2023-24 Onwards)'
    },
    {
        value: 'B.Sc. Animation',
        fullName: 'B.Sc. (Animation)'
    },
    {
        value: 'B.Sc. CS',
        fullName: 'B.Sc.(Computer Science) (From Session 2023-24 Onwards)'
    },
    {
        value: 'B.Sc.Hons.CS',
        fullName: 'B.Sc. (Hons.) Computer Science with Research'
    },
    {
        value: 'M.Tech. CSE',
        fullName: 'M.Tech. (Computer Sciences and Engineering)'
    },
    {
        value: 'MCA',
        fullName: 'MCA (Master of Computer Applications)-Software Development'
    },
    {
        value: 'MCA-ML',
        fullName: 'MCA (Master of Computer Applications)-Machine Learning'
    },
    {
        value: 'MCA-NT',
        fullName: 'MCA (Master of Computer Applications)-Network Technologies'
    },
    {
        value: 'MCA-DS',
        fullName: 'MCA (Master of Computer Applications)-Data Science & Analytics'
    },
    {
        value: 'MCA-AT',
        fullName: 'MCA (Master of Computer Applications)-Advanced Technologies'
    },
    {
        value: 'M.Sc.-AI',
        fullName: 'M.Sc.-Artificial Intelligence (From Session 2023-24 Onwards)'
    },
    {
        value: 'M.Sc.-DS',
        fullName: 'M.Sc.-Data Science (From Session 2023-24 Onwards)'
    }
];

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

const questionTypeOptions = [
  {
    value: '-',
    fullName: 'Choose'
  },
  {
    value: 'short',
    fullName: 'Short',
  },
  {
    value: 'long',
    fullName: 'Long',
  },
]

const longQuestionsSubTypeOptions = [
  {
    value: '-',
    fullName: 'Choose'
  },
  {
    value: '1',
    fullName: 'No',
  },
  {
    value: '2',
    fullName: 'Yes',
  },
]

const unitOptions = [
  {
    value: '-',
    fullName: 'Choose'
  },
  {
    value: '1',
    fullName: '1',
  },
  {
    value: '2',
    fullName: '2',
  },
  {
    value: '3',
    fullName: '3',
  },
  {
    value: '4',
    fullName: '4',
  },
  {
    value: '5',
    fullName: '5',
  },
]

const bloomLevelOptions = [
  {
    value: '-',
    fullName: 'Choose'
  },
  {
    value: '1',
    fullName: '1',
  },
  {
    value: '2',
    fullName: '2',
  },
  {
    value: '3',
    fullName: '3',
  },
  {
    value: '4',
    fullName: '4',
  },
  {
    value: '5',
    fullName: '5',
  },
  {
    value: '6',
    fullName: '6',
  },
]

const courseOutcomeOptions = [
  {
    value: '-',
    fullName: 'Choose'
  },
  {
    value: '1',
    fullName: '1',
  },
  {
    value: '2',
    fullName: '2',
  },
  {
    value: '3',
    fullName: '3',
  },
  {
    value: '4',
    fullName: '4',
  },
  {
    value: '5',
    fullName: '5',
  },
  {
    value: '6',
    fullName: '6',
  },
]

export {courses, examList, semesterList, courseOutcomeOptions, bloomLevelOptions, unitOptions, questionTypeOptions, longQuestionsSubTypeOptions};
