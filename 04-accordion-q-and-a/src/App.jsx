import { useState } from 'react';
import questionData from './data';
import SingleQuestion from './SingleQuestion';
import Questions from './Questions';

const App = () => {
  const [questions, setQuestions] = useState(questionData);

  return (
    <main>
     <Questions  questions={questions} />
    </main>
  );
};
export default App;
