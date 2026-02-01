import Person from './Person';

const List = ({ users }) => {
  return (
    <div>
      {users.map((user) => {
        return <Person key={user.id} {...user} />;
      })}
    </div>
  );
};
export default List;
