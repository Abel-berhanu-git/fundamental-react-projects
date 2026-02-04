import { useState } from 'react';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import BtnContainer from './BtnContainer';
import JobInfo from './JobInfo';
import Loading from './Loading';
const url = 'https://www.course-api.com/react-tabs-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`${response.status} Not Found`);
        }
        const data = await response.json();
        setIsLoading(false);
        setJobs(
          data.map((job) => {
            return {
              ...job,
              duties: job.duties.map((duty) => {
                return { id: uuidv4(), text: duty };
              }),
            };
          }),
        );
      } catch (error) {
        setIsLoading(false);
        setIsError(error.message);
        console.log(error);
      }
    };
    fetchJob();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (isError) {
    return (
      <main>
        <h4>something wrong, {isError}</h4>
      </main>
    );
  }

  return (
    <section className='jobs-center'>
      <BtnContainer
        jobs={jobs}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      <JobInfo jobs={jobs} currentItem={currentItem} />
    </section>
  );
};
export default App;
