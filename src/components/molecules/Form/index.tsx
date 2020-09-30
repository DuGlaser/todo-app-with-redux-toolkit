/** @jsx jsx **/
import React from 'react';
import { css, jsx } from '@emotion/core';

const form = css({
  display: 'flex',
  justifyContent: 'center',
  width: '40%',
  margin: '20px auto',
});

interface Props {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Form: React.FC<Props> = (props) => {
  const { handleSubmit, children } = props;
  return (
    <form css={form} onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

export default Form;
