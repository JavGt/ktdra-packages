import React from 'react';
import styled from 'styled-components';
import { StylesContainerFC, stylesContainer } from '../utils';
import { Color, PaletteKeys } from '@ktdra-digital/utils';

export type TooltipProps = {
  title?: string;
  paletteKey?: PaletteKeys;
};

const Tooltip: StylesContainerFC<TooltipProps> = ({
  title,
  colors,
  paletteKey = 'primary',
}) => {
  return (
    <TooltipStyle colors={colors[paletteKey || 'primary']}>
      {title}
      {/* <div className='border'></div> */}
    </TooltipStyle>
  );
};

export const TooltipStyle = styled.div<{
  colors: Color;
}>`
  background-color: ${({ colors }) => colors.alternative};
  width: fit-content;
  font-size: 22px;
  border-radius: 4px 0 30px 0;
  position: relative;
  padding: 5px 15px 5px 10px;
  color: #fff;
  margin-bottom: 15px;
  min-width: 40px;

  /* .border {
    position: absolute;
    background-color: ${({ colors }) => colors.main};
    height: calc(100% + 10px);
    width: 100%;
    top: 5px;
    left: 5px;
    clip-path: polygon(
      0% 0%,
      100% 0%,
      100% calc(100% - 10px),
      62% calc(100% - 10px),
      9% calc(100% - 10px),
      6.8% 100%,
      4.5% calc(100% - 10px),
      0 calc(100% - 10px)
    );
  } */

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

export default stylesContainer(Tooltip);
