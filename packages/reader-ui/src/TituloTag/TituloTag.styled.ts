import styled from '@emotion/styled';
import { TituloTagProps } from './types';

export const TituloContainer = styled.div<{
  position?: TituloTagProps['position'];
}>`
  display: flex;
  justify-content: ${({ position }) =>
    position === 'left' ? 'flex-start' : 'flex-end'};
`;

export const TitleStl = styled.div<{
  color: string;
  position?: TituloTagProps['position'];
  haveIcon: boolean;
}>`
  fill: #fff;

  ${({ position, haveIcon }) =>
    `	padding-${position}:${!haveIcon ? '50px' : '5px'};`}

  display: flex;
  align-items: center;
  background-color: ${({ color }) => color};
  font-family: sans-serif;
  color: #fff;
  position: relative;
  gap: 10px;
  max-width: 75%;

  div {
    order: ${({ position }) => (position === 'left' ? 2 : 1)};
  }

  svg {
    order: ${({ position }) => (position === 'left' ? 1 : 2)};
  }

  &::before,
  &::after {
    position: absolute;
    content: '';
    width: 40px;
    height: 100%;
    bottom: 0;
    top: 0;
    transform: rotate(
      ${({ position }) => (position === 'left' ? '180deg' : '0deg')}
    );
  }

  &::before {
    background-color: ${({ color }) => color};
    ${({ position }) => position}: 100%;

    clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%);
  }

  &::after {
    background-color: ${({ color }) => color + 90};
    ${({ position }) => position}: calc(100% + 35px);
    clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
  }
`;
