import React, { useState } from 'react';
import * as UUID from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllTodos } from '../../features/todo/todo.select';
import { todoAddOne, todoUpdateOne } from '../../features/todo/todo.slice';
import Header from '../organisms/header';
import FormWrapper from '../organisms/formWrapper';
import TodoList from '../organisms/todoList';
import { Todo } from '../../features/todo/todo.entity';

const Home: React.FC = () => {
  const [value, setValue] = useState('');
  const todos = useSelector(selectAllTodos);
  const dispath = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleTodoDone = (todo: Todo) => {
    dispath(
      todoUpdateOne({ id: todo.id, changes: { ...todo, isDone: !todo.isDone } })
    );
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
      <TodoList todos={todos} handleTodoDone={handleTodoDone} />
    </>
  );
};

export default Home;
