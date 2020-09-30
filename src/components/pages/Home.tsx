import React, { useState } from 'react';
import * as UUID from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllTodos } from '../../features/todo/todo.select';
import { todoAddOne } from '../../features/todo/todo.slice';

const Home: React.FC = () => {
  const [value, setValue] = useState('');
  const todos = useSelector(selectAllTodos);
  const dispath = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = UUID.v4();
    dispath(
      todoAddOne({
        id,
        title: value,
        discription: value,
        isDone: false,
      })
    );

    setValue('');
  };

  return (
    <>
      <ul>
        {todos.map((todo) => {
          return <li>{todo.title}</li>;
        })}
      </ul>

      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />
        <button type="submit">作成</button>
      </form>
    </>
  );
};

export default Home;
