import { FaAngleDoubleRight } from 'react-icons/fa';

const Duties = ({ duties }) => {
  // console.log(duties)
  return (
    <div>
      {duties.map(({ id, text }) => {
        return (
          <div key={id} className='job-desc'>
            <FaAngleDoubleRight className='job-icon' />
            <p>{text}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Duties;
