import React from 'react';
import { type Icon, useIcon } from '@ktdra-digital/icons';
import { StylesContainerFC, stylesContainer } from '../utils';
import { ButtonStyle } from './Button.styled';
import { PaletteKeys } from '../../../utils/dist/colors/types';

export type ButtonProps = {
	text: string;
	icon?: Icon;
	url: string;
	paletteKey?: PaletteKeys;
};

const Button: StylesContainerFC<ButtonProps> = ({
	text,
	icon,
	url,
	colors,
	subsistema,
	paletteKey,
}) => {
	const Icon = useIcon(icon, subsistema);

	return (
		<ButtonStyle
			href={url}
			target='_blank'
			type='button'
			colors={colors[paletteKey || 'primary']}
		>
			{Icon && <Icon />}

			{text}
		</ButtonStyle>
	);
};

export default stylesContainer(Button);
