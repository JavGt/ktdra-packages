import { Color, PaletteKeys } from '@ktdra-digital/utils';

export type LecturaFactory = {
  text: string;
  paletteKey?: PaletteKeys;
};

export type LecturaProps = {
  colors: Color;
  text: string;
};
