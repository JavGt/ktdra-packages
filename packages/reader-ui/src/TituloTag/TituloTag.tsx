import React from 'react';
import styled from 'styled-components';
import { AC, ACPalette, useGetColorsAC } from '@ktdra/utils';
import type { BT } from '@ktdra/icons/dist/BT/utils/types';

export type TituloTagProps = {
	AC: AC;
	text: string;
	icon?: BT;
	position?: 'left' | 'right';
};

const TituloTag: React.FC<TituloTagProps> = ({ AC, text, icon, position }) => {
	const colors = useGetColorsAC(AC) as ACPalette;

	const Icon = icon && require('@ktdra/icons/dist/BT')[icon];

	return (
		<TituloContainer position={position}>
			<Title haveIcon={!!icon} position={position} color={colors.primary.alternative}>
				<div>{text}</div>

				{icon && <Icon style={{ width: 50, height: 50 }} />}
			</Title>
		</TituloContainer>
	);
};

TituloTag.defaultProps = {
	position: 'left',
};

export default TituloTag;

export const TituloContainer = styled.div<{
	position?: 'left' | 'right';
}>`
	display: flex;
	justify-content: ${({ position }) => (position === 'left' ? 'flex-start' : 'flex-end')};
`;

export const Title = styled.div<{
	color: string;
	position?: 'left' | 'right';
	haveIcon: boolean;
}>`
	fill: #fff;
	padding: 5px;
	${({ position, haveIcon }) => `	padding-${position}:${!haveIcon ? '50px' : '5px'};`}

	display: flex;
	align-items: center;
	background-color: ${({ color }) => color};
	font-size: 30px;
	font-family: sans-serif;
	color: #fff;
	position: relative;
	gap: 10px;
	max-width: 80%;

	div {
		order: ${({ position }) => (position === 'left' ? 2 : 1)};
	}

	svg {
		flex-shrink: 0;
		order: ${({ position }) => (position === 'left' ? 1 : 2)};
	}

	&::before,
	&::after {
		position: absolute;
		content: '';
		width: 40px;
		height: 100%;
		bottom: 0;
		top: 0;
		transform: rotate(${({ position }) => (position === 'left' ? '180deg' : '0deg')});
	}

	&::before {
		background-color: ${({ color }) => color};
		${({ position }) => position}: 100%;

		clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%);
	}

	&::after {
		background-color: ${({ color }) => color + 90};
		${({ position }) => position}: calc(100% + 35px);
		clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
	}
`;
