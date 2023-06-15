import React from 'react';
import styled from '@emotion/styled';
import { StylesContainerFC, stylesContainer } from '../utils';
import { PaletteKeys } from '@ktdra-digital/utils';
import { markdownToHtml } from '../utils/markdownToHtml';

export type TituloObjetivoProps = {
	title: string;
	paletteKey?: PaletteKeys;
};

const TituloObjetivo: StylesContainerFC<TituloObjetivoProps> = ({
	colors,
	title,
	paletteKey = 'primary',
}) => {
	return (
		<TituloObjetivoStyle
			className='objetivo-aprendizaje'
			color={colors[paletteKey].main}
		>
			<div className='objetivo-aprendizaje__figura'>
				<span className='objetivo-aprendizaje__linea'></span>
				<span className='objetivo-aprendizaje__linea'></span>
			</div>
			<div
				className='objetivo-aprendizaje__titulo'
				dangerouslySetInnerHTML={{ __html: markdownToHtml(title) }}
			/>
		</TituloObjetivoStyle>
	);
};

export const TituloObjetivoStyle = styled.div<{
	color: string;
}>`
	display: flex;
	gap: 10px;
	margin-bottom: 10px;
	align-items: center;

	.objetivo-aprendizaje__figura {
		display: flex;
	}

	.objetivo-aprendizaje__linea {
		display: block;
		clip-path: polygon(0% 0%, 100% 0%, 75% 100%, 0% 100%);

		width: 30px;
		height: 12px;
		background-color: ${({ color }) => color};
	}
	.objetivo-aprendizaje__linea:nth-child(2) {
		clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
		margin-left: -5px;
	}

	.objetivo-aprendizaje__titulo {
		text-transform: capitalize;
		font-size: 30px;
	}
`;

export default stylesContainer(TituloObjetivo);
