import { BoxProps, ItemGrid } from './ListBox';

export type ListBoxProps = {
  list: (Omit<BoxProps, 'colorCustom'> & ItemGrid)[];
};
