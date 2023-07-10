import { Icon } from '@ktdra-digital/icons';
import { Color, PaletteKeys } from '@ktdra-digital/utils';

export type ButtonProps = {
  text: string;
  icon?: Icon;
  url: string;
  paletteKey?: PaletteKeys;
};

export type ButtonStlProps = {
  colors: Color;
};
