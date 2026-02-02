import SingleQuestion from './SingleQuestion';

const Questions = ({ questions, activeID, toggleQuestion }) => {
  return (
    <section className='container'>
      <h1> questions</h1>
      {questions.map((question) => {
        return (
          <SingleQuestion
            key={question.id}
            {...question}
            activeID={activeID}
            toggleQuestion={toggleQuestion}
          />
        );
      })}
    </section>
  );
};
export default Questions;
