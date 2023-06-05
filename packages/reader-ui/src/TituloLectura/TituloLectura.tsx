import React from 'react';
import styled from 'styled-components';
import { Color } from '@ktdra-digital/utils';
import { StylesContainerFC, stylesContainer } from '../utils';
import { useIcon } from '@ktdra-digital/icons';

export type TituloLecturaProps = {};

const TituloLectura: StylesContainerFC<TituloLecturaProps> = ({
	colorAC,
	subsistema,
}) => {
	const Icon = useIcon(
		{ name: 'Lectura', folder: '', isDependent: true },
		subsistema
	);

	return (
		<TituloLecturaStyle colors={colorAC}>
			{Icon && <Icon style={{ width: 60, fill: colorAC.main }} />}

			<div className='linea' />
		</TituloLecturaStyle>
	);
};

export const TituloLecturaStyle = styled.div<{ colors: Color }>`
	display: flex;
	align-items: center;
	gap: 10px;
	width: 100%;

	& .linea {
		height: 2px;
		background: ${({ colors }) => colors.main};
		width: 100%;
		position: relative;

		&::before {
			content: '';
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			right: 0;
			width: 10px;
			background: ${({ colors }) => colors.main};
			border-radius: 100%;
			height: 10px;
		}
	}
`;

export default stylesContainer(TituloLectura);
