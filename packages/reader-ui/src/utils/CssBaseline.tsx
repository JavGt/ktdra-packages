import styled from '@emotion/styled';
import React from 'react';
import { breakpoints } from '../constants/breakpoints';

export const CssBaseline: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <StyledCssBaseline className="css-baseline">{children}</StyledCssBaseline>
  );
};

const StyledCssBaseline = styled('div')`
  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  font-family: sans-serif;

  & h1 {
    font-size: 30px;

    @media (min-width: ${breakpoints.sm}px) {
      font-size: 34px;
    }
  }

  & h2 {
    font-size: 26px;
    @media (min-width: ${breakpoints.sm}px) {
      font-size: 28px;
    }
  }

  & h3 {
    font-size: 22px;
  }

  & h4 {
    font-size: 18px;
  }

  & p {
    line-height: 1.5;
    font-size: 16px;
  }

  & .icon {
    width: 40px;
    height: 40px;
    min-width: 40px;
    min-height: 40px;

    @media (min-width: ${breakpoints.sm}px) {
      width: 50px;
      height: 50px;
      min-width: 50px;
      min-height: 50px;
    }
  }

  & .icon-title {
    width: 60px;
    height: 60px;
    min-width: 60px;
    min-height: 60px;

    @media (min-width: ${breakpoints.sm}px) {
      width: 70px;
      height: 70px;
      min-width: 70px;
      min-height: 70px;
    }
  }
`;
