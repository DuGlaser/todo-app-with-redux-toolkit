/** @jsx jsx **/
import React from 'react';
import { css, jsx } from '@emotion/core';
import { Todo } from '../../../features/todo/todo.entity';

const wrapper = css({
  width: '40%',
  margin: '20px auto 0',
});

const card = css({
  padding: '8px 16px',
  marginTop: '8px',
  border: '#aaaaaa 1px solid',
  borderRadius: '8px',
});

interface Props {
  todos: Todo[];
}

const TodoList: React.FC<Props> = (props) => {
  const { todos } = props;
  return (
    <div css={wrapper}>
      {todos.map((todo) => {
        return <div css={card}>{todo.description}</div>;
      })}
    </div>
  );
};

export default TodoList;
