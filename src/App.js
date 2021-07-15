// Import from frameworks
import React, { useState } from 'react';

// Import user created components
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';


function App() {
  // Setup the state for the storing input user data
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
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
