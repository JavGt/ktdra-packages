import React from 'react';
import { marked } from 'marked';

export type TextoProps = {
	texto: string;
};

const Texto: React.FC<TextoProps> = ({ texto }) => {
	return (
		<div
			style={{
				lineHeight: 1.8,
				textRendering: 'optimizeLegibility',
				fontFamily: 'sans-serif',
			}}
			dangerouslySetInnerHTML={{ __html: marked.parse(texto) }}
		></div>
	);
};

export default Texto;
