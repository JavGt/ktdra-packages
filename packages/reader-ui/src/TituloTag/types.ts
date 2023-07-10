import { Icon } from '@ktdra-digital/icons';
import { SidesHorizontal } from '../WrapperStyle';
import { PaletteKeys } from '@ktdra-digital/utils';

export type TituloTagProps = {
  icon?: Icon;
  position?: SidesHorizontal;
  title: string;
  paletteKey?: PaletteKeys;
};
