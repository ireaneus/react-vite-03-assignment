import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UsersList';

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </>
  );
};

export default App;
// instead of <> could include Fragment which will always work import it into React though
