import React, { useState } from 'react';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import styles from './AddUser.module.css';
import ErrorModal from '../UI/Modal/ErrorModal';

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Username or Age entry invalid',
        message: 'Sumin Sumin has been entered a little kaka',
      })
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Age entry invalid',
        message: 'You are definetly not that young',
      })
      return;
    }

    props.onAddUser(enteredUserName, enteredAge);
    setEnteredUserName('');
    setEnteredAge('');
  };

  const usernameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null)
  }

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredUserName}
          onChange={usernameChangeHandler}
          placeholder="Add username"
        />
        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={ageChangeHandler}
          placeholder="Add age"
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </div>
  );
};
export default AddUser;
