import { PaletteKeys } from '@ktdra-digital/utils';

export type ImageProps = {
  url: string;
  figcaption?: string;
  alt?: string;
  width?: number;
  height?: number;
  paletteKey?: PaletteKeys;
};
