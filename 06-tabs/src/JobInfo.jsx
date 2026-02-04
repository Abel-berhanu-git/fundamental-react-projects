import Duties from './Duties';

const JobInfo = ({ jobs, currentItem }) => {
  // console.log(jobs)
  const { title, company, dates, duties } = jobs[currentItem];
  return (
    <article>
      <h3>{title}</h3>
      <p className='job-company'>{company}</p>
      <p className='job-date'>{dates}</p>
      <Duties duties={duties} />
    </article>
  );
};
export default JobInfo;
