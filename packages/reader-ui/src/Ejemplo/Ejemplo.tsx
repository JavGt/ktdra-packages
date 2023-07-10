import React from 'react';
import { StylesContainerFC, stylesContainer } from '../utils';
import { markdownToHtml } from '../utils/markdownToHtml';
import { EjemploStl } from './Ejemplo.styled';
import { EjemploProps } from './types';

const Ejemplo: StylesContainerFC<EjemploProps> = ({
  text,
  isLabel,
  numberExample,
  colors,
  paletteKey,
  title,
}) => {
  return (
    <EjemploStl colors={colors[paletteKey || 'primary']}>
      {isLabel && (
        <div className="label">
          {title ? title : `Ejemplo ${numberExample}`}
        </div>
      )}
      <div className="content">
        <div dangerouslySetInnerHTML={{ __html: markdownToHtml(text) }} />
      </div>
    </EjemploStl>
  );
};

Ejemplo.defaultProps = {
  text: 'Este es un texto de prueba',
  numberExample: 1,
};

export default stylesContainer(Ejemplo);
