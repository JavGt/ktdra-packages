import React from 'react';
import { markdownToHtml, stylesContainer, StylesContainerFC } from '../utils';
import { useIcon } from '@ktdra-digital/icons';
import { TitleStl, TituloContainer } from './TituloTag.styled';
import { TituloTagProps } from './types';

const TituloTag: StylesContainerFC<TituloTagProps> = ({
  title,
  icon,
  position = 'left',
  colors,
  subsistema,
  paletteKey = 'primary',
}) => {
  const Icon = useIcon(icon, subsistema);
  return (
    <TituloContainer position={position}>
      <TitleStl
        haveIcon={!!icon}
        position={position}
        color={colors[paletteKey].main}
      >
        <h2
          dangerouslySetInnerHTML={{
            __html: markdownToHtml(title, 'parseInline'),
          }}
        />

        {Icon && <Icon className="icon" />}
      </TitleStl>
    </TituloContainer>
  );
};

export default stylesContainer(TituloTag);
