import React from 'react';
import styled from '@emotion/styled';
import { Color } from '@ktdra-digital/utils';
import { StylesContainerFC, stylesContainer } from '../utils';
import { useIcon } from '@ktdra-digital/icons';
import { TituloLecturaProps } from './types';

const TituloLectura: StylesContainerFC<TituloLecturaProps> = ({
  colors,
  subsistema,
  paletteKey = 'primary',
}) => {
  const Icon = useIcon(
    { name: 'Lectura', folder: '', isDependent: true },
    subsistema
  );

  return (
    <TituloLecturaStyle colors={colors[paletteKey]} className="titulo-lectura">
      {Icon && (
        <Icon
          style={{
            height: 60,
            width: 60,
            fill: colors[paletteKey].main,
          }}
        />
      )}

      <div className="linea" />
    </TituloLecturaStyle>
  );
};

export const TituloLecturaStyle = styled.div<{
  colors: Color;
}>`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;

  & .linea {
    height: 2px;
    background: ${({ colors }) => colors.main};
    width: 100%;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 0;
      width: 10px;
      background: ${({ colors }) => colors.main};
      border-radius: 100%;
      height: 10px;
    }
  }
`;

export default stylesContainer(TituloLectura);
