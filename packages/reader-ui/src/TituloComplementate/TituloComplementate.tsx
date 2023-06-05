import React from 'react';
import styled from 'styled-components';
import { ACPalette, Color } from '@ktdra-digital/utils';
import { StylesContainerFC, markdownToHtml, stylesContainer } from '../utils';
import { useIcon } from '@ktdra-digital/icons';

export type TituloComplementateProps = {
	title: string;
};

const TituloComplementate: StylesContainerFC<TituloComplementateProps> = ({
	title,
	subsistema,
	ACPalette,
}) => {
	const { primary, secondary } = ACPalette;
	const Icon = useIcon(
		{ name: 'Complementate', folder: '', isDependent: true },
		subsistema
	);

	return (
		<TituloComplementateStyle primary={primary} secondary={secondary}>
			{Icon && <Icon />}

			<div
				className='text'
				dangerouslySetInnerHTML={{ __html: markdownToHtml(title) }}
			/>

			<div className='line' />
		</TituloComplementateStyle>
	);
};

export default stylesContainer(TituloComplementate, {
	colorType: 'ACPalette',
});

export const TituloComplementateStyle = styled.div<{
	primary: Color;
	secondary: Color;
}>`
	display: flex;
	align-items: center;
	gap: 10px;
	color: ${({ secondary }) => secondary.alternative};

	.text {
		font-family: '--apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto',
			'Oxygen';
		font-size: 20px;
		max-width: 40%;
	}

	svg {
		width: min(60px, 60px);

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
