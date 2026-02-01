const Person = ({name,age,image}) => {
  return (
    <div className='person'>
      <img src={image} alt='person-img' />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </div>
  );
}
export default Person