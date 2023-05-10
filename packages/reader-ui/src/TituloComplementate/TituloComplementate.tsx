import React from 'react';
import styled from 'styled-components';
import { Complementate } from '@ktdra/icons';
import { AC, ACPalette, Color, useGetColorsAC } from '@ktdra/utils';

export type TituloComplementateProps = {
	AC: AC;
	text: string;
};

const TituloComplementate: React.FC<TituloComplementateProps> = ({ AC, text }) => {
	const { primary, secondary } = useGetColorsAC(AC) as ACPalette;

	return (
		<TituloComplementateStyle primary={primary} secondary={secondary}>
			<Complementate />

			<div className='text'>{text}</div>

			<div className='line' />
		</TituloComplementateStyle>
	);
};

export default TituloComplementate;

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
