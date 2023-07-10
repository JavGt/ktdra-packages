import React from 'react';
import { StylesContainerFC, stylesContainer } from '../utils';
import { ListaObjetivosProps } from './types';
import { ListaObjetivoItem } from './ListaObjetivoItem';

const ListaObjetivos: StylesContainerFC<ListaObjetivosProps> = ({
  list,
  ...rest
}) => {
  return (
    <>
      {list.map((item, idx) => (
        <ListaObjetivoItem item={item} key={idx} {...rest} />
      ))}
    </>
  );
};

export default stylesContainer(ListaObjetivos);
