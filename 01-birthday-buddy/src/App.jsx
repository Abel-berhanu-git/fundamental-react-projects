import { useState } from 'react';
import List from './List';
import userList from './data';

const App = () => {
  const [users, setUsers] = useState(userList);
  return (
    <main>
      <section className='container'>
        <h3> {users.length} birthdays today</h3>
        <List users={users} />
        <div
          className='btn clear-all'
          onClick={() => {
            setUsers([]);
          }}
        >
          clear all
        </div>
      </section>
    </main>
  );
};
export default App;
