import styled from '@emotion/styled';
import { ButtonStlProps } from './types';

export const ButtonStl = styled.a<ButtonStlProps>`
  color: ${({ colors }) => colors.main};
  width: fit-content;
  margin: 0 auto;
  display: flex;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  border: 1px solid ${({ colors }) => colors.main};
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  background-color: ${({ colors }) => colors.light};
  border-radius: 30px;
  transition: background-color 0.4s ease, color 0.4s ease;
  font-size: 16px;
  padding: 5px 15px;
  overflow: hidden;
  position: relative;

  span {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    z-index: 1;
  }
  @media (min-width: 768px) {
    padding: 10px 25px;
    font-size: 18px;
  }
  transition: box-shadow 0.4s ease-in-out 0.2s;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    height: 100%;
    background-color: ${({ colors }) => colors.main};
    transform: translateX(100%);
    transition: transform 0.2s ease;
  }

  &:hover {
    color: ${({ colors }) => colors.light};
    box-shadow: 0px 10px 15px -3px ${({ colors }) => colors.main};

    &::before {
      transform: translateX(0);
    }

    svg {
      fill: ${({ colors }) => colors.light};
    }
  }
  svg {
    transition: fill 0.2s ease-in-out;
    fill: ${({ colors }) => colors.main};
    width: min(30px, 30px);
    height: fit-content;

    @media (min-width: 768px) {
      width: min(30px, 30px);
    }
  }
`;
