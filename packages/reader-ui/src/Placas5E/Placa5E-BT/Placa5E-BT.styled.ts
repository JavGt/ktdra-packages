import styled from '@emotion/styled';
import { Placa5EBTStlProps } from './types';

export const Placa5EBTStl = styled.div<Placa5EBTStlProps>`
  display: flex;
  align-items: center;
  gap: 5px;

  svg {
    fill: ${({ colors }) => colors.main};

    & path:nth-of-type(2) {
      fill: ${({ colors }) => colors.light} !important;
    }
  }

  h3 {
    color: ${({ colors }) => colors.main};
    font-weight: 400;
  }

  & .line {
    flex: 1;
    height: 2px;
    background-color: ${({ colors }) => colors.main};
    position: relative;
    display: flex;
    align-items: center;

    &::after {
      content: '';
      right: 0;
      position: absolute;
      border-radius: 100%;
      height: 7px;
      width: 7px;
      background-color: ${({ colors }) => colors.main};
    }
  }
`;
