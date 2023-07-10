import React from 'react';
import { useIcon } from '@ktdra-digital/icons';
import { StylesContainerFC, stylesContainer } from '../utils';
import { ButtonStl } from './Button.styled';
import { ButtonProps } from './types';

const Button: StylesContainerFC<ButtonProps> = ({
  text,
  icon,
  url,
  colors,
  subsistema,
  paletteKey = 'primary',
}) => {
  const Icon = useIcon(icon, subsistema);

  return (
    <ButtonStl
      arial-label={text}
      href={url}
      role="button"
      target="_blank"
      type="button"
      colors={colors[paletteKey]}
      title={text}
    >
      <span>
        {Icon && <Icon />}
        {text}
      </span>
    </ButtonStl>
  );
};

export default stylesContainer(Button);
