import React from 'react';
import {
  type StylesContainerFC,
  stylesContainer,
} from '../utils/styleContainer';
import { markdownToHtml } from '../utils/markdownToHtml';
import { ContainerShadowStl } from './ContainerShadow.styled';
import { ContainerShadowProps } from './types';

const ContainerShadow: StylesContainerFC<ContainerShadowProps> = ({
  text,
  colors,
  paletteKey = 'primary',
}) => {
  return (
    <ContainerShadowStl
      colors={colors[paletteKey]}
      dangerouslySetInnerHTML={{ __html: markdownToHtml(text) }}
    />
  );
};

export default stylesContainer(ContainerShadow);
