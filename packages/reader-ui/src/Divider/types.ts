import { Color, PaletteKeys } from '@ktdra-digital/utils';

export type DividerProps = {
  type: React.CSSProperties['borderStyle'];
  size: number;
  paletteKey?: PaletteKeys;
  color?: string;
};

export type DividerStlProps = {
  size: number;
  colors: Color;
  type: React.CSSProperties['borderStyle'];
  color?: string;
};
