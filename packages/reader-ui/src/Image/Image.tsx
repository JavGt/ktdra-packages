import React from 'react';
import { stylesContainer, StylesContainerFC } from '../utils';
import { markdownToHtml } from '../utils/markdownToHtml';
import { ImageStyle } from './Image.styled';
import { PaletteKeys } from '@ktdra-digital/utils';

export type ImageProps = {
	url: string;
	figcaption?: string;
	alt?: string;
	width?: number;
	height?: number;
	paletteKey?: PaletteKeys;
};

const Image: StylesContainerFC<ImageProps> = ({
	url,
	figcaption,
	alt,
	colors,
	height,
	width,
	paletteKey = 'primary',
}) => {
	return (
		<ImageStyle colors={colors[paletteKey]} width={width} height={height}>
			<img src={url} alt={alt} />

			<figcaption
				dangerouslySetInnerHTML={{ __html: markdownToHtml(figcaption || '') }}
			/>
		</ImageStyle>
	);
};

export default stylesContainer(Image);
