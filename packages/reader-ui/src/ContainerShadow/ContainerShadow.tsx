import React from 'react';
import {
	type StylesContainerFC,
	stylesContainer,
} from '../utils/styleContainer';
import { markdownToHtml } from '../utils/markdownToHtml';
import { ContainerShadowStyled } from './ContainerShadow.styled';
import { PaletteKeys } from '@ktdra-digital/utils';

export type ContainerShadowProps = {
	text: string;
	paletteKey?: PaletteKeys;
};

const ContainerShadow: StylesContainerFC<ContainerShadowProps> = ({
	text,
	colors,
	paletteKey,
}) => {
	return (
		<ContainerShadowStyled
			colors={colors[paletteKey || 'primary']}
			dangerouslySetInnerHTML={{ __html: markdownToHtml(text) }}
		/>
	);
};

export default stylesContainer(ContainerShadow);
