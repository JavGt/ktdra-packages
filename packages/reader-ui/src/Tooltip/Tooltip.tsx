import React from 'react';
import { StylesContainerFC, stylesContainer } from '../utils';
import { TooltipProps } from './types';
import { TooltipStl } from './Tooltip.styled';

const Tooltip: StylesContainerFC<TooltipProps> = ({
  title,
  colors,
  paletteKey = 'primary',
}) => {
  return (
    <TooltipStl colors={colors[paletteKey || 'primary']}>
      {title}
    </TooltipStl>
  );
};

export default stylesContainer(Tooltip);
