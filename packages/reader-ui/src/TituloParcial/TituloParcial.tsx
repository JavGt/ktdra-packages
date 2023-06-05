import React from 'react';
import styled from 'styled-components';
import {
	type StylesContainerFC,
	stylesContainer,
	markdownToHtml,
} from '../utils';

export type TituloParcialProps = {
	title: string;
	companion: string;
};

const TituloParcial: StylesContainerFC<TituloParcialProps> = ({
	colorAC,
	title,
	companion,
}) => {
	return (
		<TituloParcialStyle color={colorAC.main}>
			<div
				className='tema'
				dangerouslySetInnerHTML={{ __html: markdownToHtml(companion) }}
			/>
			<div className='divider' />
			<div
				className='titulo'
				dangerouslySetInnerHTML={{ __html: markdownToHtml(title) }}
			/>
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

export default stylesContainer(TituloParcial);
