/** @jsx jsx **/
import React from 'react';
import { css, jsx } from '@emotion/core';

const button = css({
  padding: '0 8px',
  backgroundColor: '#3B5A98',
  borderRadius: '8px',
  border: 'none',
  color: '#ffffff',
  marginLeft: '8px',
});

interface Props {
  type: 'button' | 'reset' | 'submit';
  handleClick?: (e: any) => void;
}

const Button: React.FC<Props> = (props) => {
  const { type, children, handleClick } = props;
  return (
    <button css={button} type={type} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
