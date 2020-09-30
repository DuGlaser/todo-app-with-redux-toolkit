import React, { useState } from 'react';
import * as UUID from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllTodos } from '../../features/todo/todo.select';
import { todoAddOne } from '../../features/todo/todo.slice';
import Header from '../organisms/header';
import FormWrapper from '../organisms/formWrapper';
import TodoList from '../organisms/todoList';

const Home: React.FC = () => {
  const [value, setValue] = useState('');
  const todos = useSelector(selectAllTodos);
  const dispath = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (value === '') return;

    const id = UUID.v4();
    dispath(
      todoAddOne({
        id,
        description: value,
        isDone: false,
      })
    );

    setValue('');
  };

  return (
    <>
      <Header />
      <FormWrapper
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        value={value}
      />
      <TodoList todos={todos} />
    </>
  );
};

export default Home;
