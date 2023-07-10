import React from 'react';
import { StylesContainerFC, stylesContainer } from '../utils';
import { LecturaBT } from './Lectura-BT';
import { LecturaFactory } from './types';

const Lectura: StylesContainerFC<LecturaFactory> = ({
  text,
  paletteKey,
  colors,
}) => {
  return <LecturaBT colors={colors[paletteKey || 'primary']} text={text} />;
};

export default stylesContainer(Lectura);
