import React from 'react';
import styles from './AddUser.module.css';

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">Username</label>
      <input id="username" type="text" placeholder="Add username" />
      <label htmlFor="age">Age</label>
      <input id="age" type="number" placeholder="Add age" />
      <button type="submit">Add User</button>
    </form>
  );
};
export default AddUser;
