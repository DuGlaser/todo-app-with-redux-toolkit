/** @jsx jsx **/
import React from 'react';
import { css, jsx } from '@emotion/core';

const input = css({
  width: '60%',
  padding: '8px',
  borderRadius: '8px',
  border: '#aaa 2px solid',
  ':focus': {
    outline: 'none',
    border: '#3B5A98 2px solid',
  },
});

interface Props {
  value: string;
  handleChagen: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<Props> = (props) => {
  const { value, handleChagen } = props;
  return (
    <input css={input} type="text" value={value} onChange={handleChagen} />
  );
};

export default FormInput;
