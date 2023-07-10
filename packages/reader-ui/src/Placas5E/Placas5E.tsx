import React from 'react';
import { type StylesContainerFC, stylesContainer } from '../utils';
import { Placas5EVariant, labels } from './variants';
import { Placa5EBT } from './Placa5E-BT';
import { Placa5EDGB } from './Placa5E-DGB';
import { Color, Palette, PaletteKeys } from '@ktdra-digital/utils';
import { Placas5EFactoryProps } from './types';

export type Placas5EProps = {
  label: string;
  color: Color;
  icon: string;
  dots?: number;
  colors?: Palette;
};

const Placas5E: StylesContainerFC<Placas5EFactoryProps> = ({
  variant,
  subsistema,
  colors,
  idioma = 'es',
}) => {
  const data = Placas5EVariant[subsistema][variant] as {
    labelKey: string;
    color: PaletteKeys;
    icon: string;
    dots?: number;
  };

  if (subsistema === 'BT')
    return (
      <Placa5EBT
        color={colors[data.color]}
        icon={data.icon}
        label={labels[data.labelKey][idioma]}
      />
    );

  if (subsistema === 'DGB')
    return (
      <Placa5EDGB
        color={colors[data.color]}
        colors={colors}
        icon={data.icon}
        label={labels[data.labelKey][idioma]}
        dots={data.dots}
      />
    );

  return <>Placa del subsistema {subsistema} no existe</>;
};

export default stylesContainer(Placas5E);
