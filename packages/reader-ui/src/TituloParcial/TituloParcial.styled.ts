import styled from '@emotion/styled';
import { TituloParcialStlProps } from './types';
import { breakpoints } from '../constants';

export const TituloParcialStyle = styled.div<TituloParcialStlProps>`
  margin: 30px 0;
  display: flex;
  width: 100%;
  gap: 0.5rem;
  flex-direction: column;

  @media (min-width: ${breakpoints.sm}px) {
    align-items: center;
    gap: 1rem;
    flex-direction: row;
  }

  .companion {
    font-weight: 400;
    font-size: 20px;
  }

  .divider {
    display: block;
    width: 100%;
    height: 2px;
    background-color: ${({ color }) => color};

    @media (min-width: ${breakpoints.sm}px) {
      width: 2px;
      height: 40px;
    }
  }

  .titulo {
    color: ${({ color }) => color};
    font-size: 48px;
    font-weight: 400;
    margin: 0;
  }
`;
