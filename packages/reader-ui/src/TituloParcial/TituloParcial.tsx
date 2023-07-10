import React from 'react';
import {
  type StylesContainerFC,
  stylesContainer,
  markdownToHtml,
} from '../utils';
import { TituloParcialProps } from './types';
import { TituloParcialStyle } from './TituloParcial.styled';

const TituloParcial: StylesContainerFC<TituloParcialProps> = ({
  colors,
  title,
  companion,
  paletteKey = 'primary',
}) => {
  return (
    <TituloParcialStyle color={colors[paletteKey].main}>
      <span
        className="companion"
        dangerouslySetInnerHTML={{
          __html: markdownToHtml(companion, 'parseInline'),
        }}
      />

      {companion && <div className="divider" />}

      <h1
        className="titulo"
        dangerouslySetInnerHTML={{
          __html: markdownToHtml(title, 'parseInline'),
        }}
      />
    </TituloParcialStyle>
  );
};

export default stylesContainer(TituloParcial);
