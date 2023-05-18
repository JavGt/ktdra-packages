import React from 'react';
import { Lectura } from '@ktdra-digital/icons';
import styled from 'styled-components';
import { AC, Color, useGetColorsAC } from '@ktdra-digital/utils';
import WrapperStyle, { ComponentStyled } from '../WrapperStyle/WrapperStyle';

export type TituloLecturaProps = { AC: AC };

const TituloLectura: ComponentStyled<TituloLecturaProps> = ({ AC, background, item }) => {
	const colors = useGetColorsAC(AC, 'primary') as Color;

	return (
		<WrapperStyle background={background} item={item}>
			<TituloLecturaStyle colors={colors}>
				<Lectura
					style={{
						width: 60,
						fill: colors.main,
					}}
				/>

				<div className='linea' />
			</TituloLecturaStyle>
		</WrapperStyle>
	);
};

export const TituloLecturaStyle = styled.div<{ colors: Color }>`
	display: flex;
	align-items: center;
	gap: 10px;

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

export default TituloLectura;
