import { useState } from 'react';
import Person from './Person';
import userList from './data';

const List = () => {
 const [users, setUsers] = useState(userList);

  return (
    <div className='container'>
      <h3> {users.length} birthdays today</h3>
      {users.map((user) => {
        return <Person key={user.id} {...user} />;
      })}
      <div className="btn clear-all" onClick={()=>{setUsers([])}}>clear all</div>
    </div>
  );
};
export default List;
