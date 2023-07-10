import React from 'react';
import { stylesContainer, StylesContainerFC } from '../utils';
import { markdownToHtml } from '../utils/markdownToHtml';
import { ImageStyle } from './Image.styled';
import { ImageProps } from './types';

const Image: StylesContainerFC<ImageProps> = ({
  url,
  figcaption,
  alt,
  colors,
  height,
  width,
  paletteKey = 'primary',
}) => {
  return (
    <ImageStyle colors={colors[paletteKey]} width={width} height={height}>
      <img src={url} alt={alt} />

      <figcaption
        dangerouslySetInnerHTML={{
          __html: markdownToHtml(figcaption, 'parseInline'),
        }}
      />
    </ImageStyle>
  );
};

export default stylesContainer(Image);
