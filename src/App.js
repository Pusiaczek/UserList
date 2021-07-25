import React, { useState } from 'react';
import AddUserPanel from './AddUserPanel';
import UserList from './UserList';

import './App.css';


function App() {
  const [userList, setUserList] = useState([]);

  const handleAddUser = (user) => {
    setUserList( prev => [...prev, user]);
  }

  const handleDelete = (indexToRemove) => {
    setUserList( prev => [...prev].filter( (user, index) => index !== indexToRemove ))
  }


  return (
    <div className="App">
      <h1>User's List</h1>
      <AddUserPanel 
        addUser={(user) => handleAddUser(user)} 
      />
      <UserList 
        userListArr={userList} 
        deleteItem={ (index) => handleDelete(index) }
      />
    </div>
  );
}

export default App;
