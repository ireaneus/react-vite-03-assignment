import React, { useState, useRef, Fragment } from 'react';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import styles from './AddUser.module.css';
import ErrorModal from '../UI/Modal/ErrorModal';

const AddUser = (props) => {
  const nameInputRef = useRef(); //useRef are uncontrolled react
  const ageInputRef = useRef(); //useState are controlled react input every keystroke

  const [error, setError] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: 'Username or Age entry invalid',
        message: 'Sumin Sumin has been entered a little kaka',
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: 'Age entry invalid',
        message: 'You are definetly not that young',
      });
      return;
    }

    props.onAddUser(enteredName, enteredUserAge);
    nameInputRef.current.value = ''; //rare to use this but to reset the input field
    ageInputRef.current.value = ''; // manipulating the DOM instead of using state, state enters keystrokes
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="Add username"
            ref={nameInputRef}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            placeholder="Add age"
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
};
export default AddUser;
