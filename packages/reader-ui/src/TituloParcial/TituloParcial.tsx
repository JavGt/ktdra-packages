import React from 'react';
import styled from 'styled-components';
import { type StylesContainerFC, stylesContainer } from '../utils';
import { Color } from '@ktdra-digital/utils';

export type TituloParcialProps = {
	title: string;
	suffix: string;
};

const TituloParcial: StylesContainerFC<TituloParcialProps> = ({ colorAC, title, suffix }) => {
	const color = colorAC as Color;

	return (
		<TituloParcialStyle color={color.main}>
			<div className='tema'>{suffix || ''} </div>
			<div className='divider'></div>
			<div className='titulo'>{title || ''}</div>
		</TituloParcialStyle>
	);
};

export const TituloParcialStyle = styled.div<{
	color: string;
}>`
	display: flex;
	width: 100%;
	align-items: center;
	gap: 1rem;

	.tema {
		font-weight: 400;
		font-size: 20px;
	}

	.divider {
		display: block;
		width: 2px;
		height: 20px;
		background-color: ${({ color }) => color};
	}

	.titulo {
		color: ${({ color }) => color};
		font-size: 32px;
	}
`;

export default stylesContainer(TituloParcial, {
	colorSelector: 'primary',
});
