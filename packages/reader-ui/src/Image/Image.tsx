import React from 'react';
import styled from 'styled-components';
import { stylesContainer, StylesContainerFC } from '../utils';
import { markdownToHtml } from '../utils/markdownToHtml';

export type ImageProps = {
	url: string;
	figcaption?: string;
	alt?: string;
	width?: string;
	height?: string;
};

const Image: StylesContainerFC<ImageProps> = ({
	url,
	figcaption,
	alt,
	colorAC,
	height,
	width,
}) => {
	return (
		<ImageStyle>
			<img src={url} alt={alt} width={width} height={height} />

			<figcaption
				style={{ color: colorAC.main }}
				dangerouslySetInnerHTML={{ __html: markdownToHtml(figcaption || '') }}
			/>
		</ImageStyle>
	);
};

export const ImageStyle = styled.picture`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	gap: 15px;

	img {
		display: block;
		max-width: 100%;
		max-height: 100%;
	}
	figcaption {
		padding: 0 10%;
		font-size: 14px;
		line-height: 1.5;
	}
`;

export default stylesContainer(Image);
