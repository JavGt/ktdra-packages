import React, { memo } from 'react';
import { useIcon } from '@ktdra-digital/icons';
import { markdownToHtml } from '../../utils';
import { ListaObjetivoItemStl } from './ListaObjetivoItem.styled';
import { ListaObjetivoItemProps } from './types';

const ListaObjetivoItem: React.FC<ListaObjetivoItemProps> = ({
  item,
  subsistema,
}) => {
  const { icon, title, text } = item;

  const Icon = useIcon(icon, subsistema);

  return (
    <ListaObjetivoItemStl>
      {Icon && <Icon className="icon" />}

      <div className="item-text">
        <h3>{title}</h3>

        {text && (
          <div
            dangerouslySetInnerHTML={{
              __html: markdownToHtml(text),
            }}
          />
        )}
      </div>
    </ListaObjetivoItemStl>
  );
};

export default memo(ListaObjetivoItem);
