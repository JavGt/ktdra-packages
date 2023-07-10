import React from 'react';
import { StylesContainerFC, stylesContainer } from '../utils';
import { DividerStl } from './Divider.styled';
import { DividerProps } from './types';

const Divider: StylesContainerFC<DividerProps> = ({
  type = 'solid',
  size = 10,
  colors,
  paletteKey = 'primary',
  color,
}) => (
  <DividerStl
    color={color}
    size={size}
    type={type}
    colors={colors[paletteKey]}
  />
);

export default stylesContainer(Divider);
