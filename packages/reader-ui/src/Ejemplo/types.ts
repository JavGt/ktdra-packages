import { Color, PaletteKeys } from '@ktdra-digital/utils';

export type EjemploProps = {
  numberExample?: number;
  text: string;
  isLabel: boolean;
  footer?: string;
  paletteKey?: PaletteKeys;
  title?: string;
};

export type EjemploStlProps = {
  colors: Color;
};
