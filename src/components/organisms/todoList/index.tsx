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

const doneCard = css(card, {
  border: 'red 1px solid',
});

interface Props {
  todos: Todo[];
  handleTodoDone: (todo: Todo) => void;
}

const TodoList: React.FC<Props> = (props) => {
  const { todos, handleTodoDone } = props;
  return (
    <div css={wrapper}>
      {todos.map((todo) => {
        return (
          <React.Fragment key={todo.id}>
            {todo.isDone ? (
              <div css={doneCard} onDoubleClick={() => handleTodoDone(todo)}>
                {todo.description}
              </div>
            ) : (
              <div css={card} onDoubleClick={() => handleTodoDone(todo)}>
                {todo.description}
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default TodoList;
