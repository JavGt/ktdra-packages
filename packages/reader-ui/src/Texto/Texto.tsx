import React from 'react';
import { marked } from 'marked';
import { stylesContainer, StylesContainerFC } from '../utils';

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
			dangerouslySetInnerHTML={{ __html: marked.parse(text) }}
		></div>
	);
};

export default stylesContainer(Texto, { colorSelector: 'primary' });
