import React from 'react';
import styled from '@emotion/styled';
import { StylesContainerFC, stylesContainer } from '../utils';
import { markdownToHtml } from '../utils/markdownToHtml';
import { TituloObjetivoProps } from './types';

const TituloObjetivo: StylesContainerFC<TituloObjetivoProps> = ({
  colors,
  title,
  paletteKey = 'primary',
}) => {
  return (
    <TituloObjetivoStyle
      className="objetivo-aprendizaje"
      color={colors[paletteKey].main}
    >
      <div className="objetivo-aprendizaje__figura">
        <span className="objetivo-aprendizaje__linea"></span>
        <span className="objetivo-aprendizaje__linea"></span>
      </div>

      <h2
        className="objetivo-aprendizaje__titulo"
        dangerouslySetInnerHTML={{
          __html: markdownToHtml(title, 'parseInline'),
        }}
      />
    </TituloObjetivoStyle>
  );
};

export const TituloObjetivoStyle = styled.div<{
  color: string;
}>`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  align-items: center;

  .objetivo-aprendizaje__figura {
    display: flex;
  }

  .objetivo-aprendizaje__linea {
    display: block;
    clip-path: polygon(0% 0%, 100% 0%, 75% 100%, 0% 100%);

    width: 30px;
    height: 12px;
    background-color: ${({ color }) => color};
  }
  .objetivo-aprendizaje__linea:nth-child(2) {
    clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
    margin-left: -5px;
  }

  .objetivo-aprendizaje__titulo {
    font-weight: 400;
  }
`;

export default stylesContainer(TituloObjetivo);
