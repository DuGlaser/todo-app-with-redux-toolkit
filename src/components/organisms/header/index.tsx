/** @jsx jsx **/
import React from 'react';
import { css, jsx } from '@emotion/core';

const header = css({
  width: '100%',
  height: '80px',
  backgroundColor: '#3B5A98',
  padding: '8px 24px',
});

const title = css({
  color: '#eeeeee',
});

const Header: React.FC = () => {
  return (
    <header css={header}>
      <h1 css={title}>TODO</h1>
    </header>
  );
};

export default Header;
