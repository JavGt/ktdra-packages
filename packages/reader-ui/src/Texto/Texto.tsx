import React from 'react';
import { stylesContainer, StylesContainerFC } from '../utils';
import { markdownToHtml } from '../utils/markdownToHtml';

export type TextoProps = {
	text: string;
};

const Texto: StylesContainerFC<TextoProps> = ({ text }) => {
	return (
		<div
			style={{
				lineHeight: 1.8,
				textRendering: 'optimizeLegibility',
				fontFamily: 'sans-serif',
			}}
			dangerouslySetInnerHTML={{ __html: markdownToHtml(text) }}
		/>
	);
};

export default stylesContainer(Texto);
