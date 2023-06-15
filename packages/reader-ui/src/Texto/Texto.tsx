import React from 'react';
import { stylesContainer, StylesContainerFC } from '../utils';
import { markdownToHtml } from '../utils/markdownToHtml';

export type TextoProps = {
	text: string;
};

const Texto: StylesContainerFC<TextoProps> = ({ text }) => {
	return (
		<div
			dangerouslySetInnerHTML={{ __html: markdownToHtml(text) }}
		/>
	);
};

export default stylesContainer(Texto);
