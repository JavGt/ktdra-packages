import React from 'react';
import { Complementate } from '@ktdra-digital/icons/dist/BT';
import { useIcon } from '@ktdra-digital/icons';
import { StylesContainerFC, stylesContainer } from '../utils';
import { TituloEjemploProps } from './types';
import { TituloEjemploStl } from './TituloEjemplo.styled';

const TituloEjemplo: StylesContainerFC<TituloEjemploProps> = ({
  icon,
  iconSecondary,
  iconTertiary,
  iconParticipantes,
  title,
  subsistema,
  colors,
  notVisibleArrow,
}) => {
  const Icon = useIcon(icon, subsistema);

  const IconSecondary = useIcon(iconSecondary, subsistema);

  const Participantes = useIcon(iconParticipantes, subsistema);

  const IconTertiary = useIcon(iconTertiary, subsistema);

  return (
    <TituloEjemploStl colors={colors}>
      {Icon && <Icon className="icon" />}

      {Icon && IconSecondary && <div className="dot" />}

      {IconSecondary && <IconSecondary className="icon" />}

      {IconSecondary && IconTertiary && <div className="dot" />}

      {IconTertiary && <IconTertiary className="icon" />}

      {!notVisibleArrow && <Complementate className="icon" />}

      <h3 className="title">{title}</h3>

      {Participantes && <Participantes className="icon" />}
    </TituloEjemploStl>
  );
};

export default stylesContainer(TituloEjemplo);
