import React from 'react';
import {
  CaraEscalaAlta,
  CaraEscalaBaja,
  CaraEscalaMedia,
} from '@ktdra-digital/icons/dist/COMMON';
import { StylesContainerFC, stylesContainer } from '../utils';
import { GraficaMotivacionalProps } from './types';
import { GraficaMotivacionalStl, ItemFace } from './GraficaMotivacional.styled';

const GraficaMotivacional: StylesContainerFC<GraficaMotivacionalProps> = ({
  title,
}) => {
  return (
    <GraficaMotivacionalStl>
      {title && <h2 className="title">{title}</h2>}

      <div className="grafica">
        <ItemFace color="#c57bb4" data-label="Baja">
          <CaraEscalaBaja className="face" />
          <div className="linea"></div>
        </ItemFace>

        <ItemFace color="#cbe2a2" data-label="Media">
          <CaraEscalaMedia className="face" />
          <div className="linea"></div>
        </ItemFace>
        <ItemFace color="#d9acd0" data-label="Alta">
          <CaraEscalaAlta className="face" />
          <div className="linea"></div>
        </ItemFace>
      </div>
    </GraficaMotivacionalStl>
  );
};

export default stylesContainer(GraficaMotivacional);
