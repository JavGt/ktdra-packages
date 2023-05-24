import React from 'react';
import styled from 'styled-components';
import { Complementate } from '@ktdra-digital/icons';
import { ACPalette, Color } from '@ktdra-digital/utils';
import { StylesContainerFC, markdownToHtml, stylesContainer } from '../utils';

export type TituloComplementateProps = {
	text: string;
};

const TituloComplementate: StylesContainerFC<TituloComplementateProps> = ({ text, colorAC }) => {
	const { primary, secondary } = colorAC as ACPalette;

	return (
		<TituloComplementateStyle primary={primary} secondary={secondary}>
			<Complementate />

			<div className='text' dangerouslySetInnerHTML={{ __html: markdownToHtml(text) }} />

			<div className='line' />
		</TituloComplementateStyle>
	);
};

export default stylesContainer(TituloComplementate);

export const TituloComplementateStyle = styled.div<{
	primary: Color;
	secondary: Color;
}>`
	display: flex;
	align-items: center;
	gap: 10px;
	color: ${({ secondary }) => secondary.alternative};

	.text {
		font-family: '--apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen';
		font-size: 20px;
	}

	svg {
		width: 60px;
		path {
			&:nth-child(1) {
				fill: ${({ secondary }) => secondary.alternative};
			}
			&:nth-child(2) {
				fill: ${({ primary }) => primary.alternative};
			}
		}
	}

	.line {
		width: 100%;
		height: 2px;
		background: ${({ secondary }) => secondary.alternative};
	}
`;
