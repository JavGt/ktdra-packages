import { Icon } from '@ktdra-digital/icons';

export type ListaObjetivosProps = {
  list: ListaObjetivosListProps[];
};

export type ListaObjetivosListProps = {
  icon: Icon;
  title?: string;
  text?: string;
};
