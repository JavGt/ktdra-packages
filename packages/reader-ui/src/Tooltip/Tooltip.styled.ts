import styled from '@emotion/styled';
import { TooltipStlProps } from './types';

export const TooltipStl = styled.div<TooltipStlProps>`
  background-color: ${({ colors }) => colors.alternative};
  width: fit-content;
  font-size: 22px;
  border-radius: 4px 0 30px 0;
  position: relative;
  padding: 5px 15px 5px 10px;
  color: #fff;
  margin-bottom: 15px;
  min-width: 50px;
  z-index: 4;

  &::before {
    content: '';
    position: absolute;
    top: 100%;
    left: 20px;
    width: 0;
    height: 0;
    border: 15px solid transparent;
    border-top-color: ${({ colors }) => colors.alternative};
    border-bottom: 0;
  }
`;
