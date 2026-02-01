import { useEffect } from 'react';
import Tours from './Tours';
import { useState } from 'react';
import Loading from './Loading';

const url = 'https://www.course-api.com/react-tours-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [toursData, setToursData] = useState([]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      console.log(res);
      if (!res.ok) {
        throw new Error(`${res.status} Not Found`);
      }

      const result = await res.json();
      console.log(result);
      // setIsLoading(false);
      setToursData(result);
    } catch (error) {
      // setIsLoading(false);
      setIsError(true);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const removeTour = (id) => {
    const newTours = toursData.filter((tour) => tour.id !== id);
    setToursData(newTours);
  };

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
        <h1>there was an Error ...</h1>
      </main>
    );
  }

  if (toursData.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn refresh-btn' onClick={fetchData}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours toursData={toursData} removeTour={removeTour} />
    </main>
  );
};
export default App;
