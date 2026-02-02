import { useState } from 'react';
import questionData from '../data';
import SingleQuestion from './SingleQuestion';
import Questions from './Questions';

const App = () => {
  const [questions, setQuestions] = useState(questionData);
  const [activeID, setActiveID] = useState(null);

  const toggleQuestion = (id) => {
    const newActiveID = id === activeID ? null : id 
    setActiveID(newActiveID)
  }

  return (
    <main>
      <Questions questions={questions} activeID={activeID} toggleQuestion={toggleQuestion} />
    </main>
  );
};
export default App;
