import React from 'react';
import styled from 'styled-components';
import { stylesContainer, StylesContainerFC } from '../utils';
import { Color } from '@ktdra/utils';
import { marked } from 'marked';

export type ImageProps = {
	src: string;
	figcaption?: string;
	alt?: string;
	width?: string;
	height?: string;
};

const Image: StylesContainerFC<ImageProps> = ({
	src,
	figcaption,
	alt,
	colorAC,
	height,
	width,
}) => {
	const color = colorAC as Color;

	return (
		<ImageStyle>
			<picture>
				<img src={src} alt={alt} width={width} height={height} />

				<figcaption
					style={{
						color: color.main,
					}}
					dangerouslySetInnerHTML={{ __html: marked.parse(figcaption || '') }}
				></figcaption>
			</picture>
		</ImageStyle>
	);
};

export const ImageStyle = styled.div`
	display: grid;
	place-content: center;
	text-align: center;
	img {
		display: block;
		max-width: 100%;
		max-height: 100%;
	}
`;

export default stylesContainer(Image, { colorSelector: 'primary' });
