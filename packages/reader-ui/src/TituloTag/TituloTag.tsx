import React from 'react';
import styled from '@emotion/styled';
import { markdownToHtml, stylesContainer, StylesContainerFC } from '../utils';
import { Icon, useIcon } from '@ktdra-digital/icons';
import { PaletteKeys } from '@ktdra-digital/utils';

export type TituloTagProps = {
	icon?: Icon;
	position?: 'left' | 'right';
	title: string;
	paletteKey?: PaletteKeys;
};

const TituloTag: StylesContainerFC<TituloTagProps> = ({
	title,
	icon,
	position,
	colors,
	subsistema,
	paletteKey = 'primary',
}) => {
	const Icon = useIcon(icon, subsistema);
	return (
		<TituloContainer position={position}>
			<Title
				haveIcon={!!icon}
				position={position}
				color={colors[paletteKey].main}
			>
				<div dangerouslySetInnerHTML={{ __html: markdownToHtml(title) }} />

				{Icon && <Icon style={{ width: 50, height: 50 }} />}
			</Title>
		</TituloContainer>
	);
};

TituloTag.defaultProps = {
	position: 'left',
};

export default stylesContainer(TituloTag);

export const TituloContainer = styled.div<{
	position?: 'left' | 'right';
}>`
	display: flex;
	justify-content: ${({ position }) =>
		position === 'left' ? 'flex-start' : 'flex-end'};
`;

export const Title = styled.div<{
	color: string;
	position?: 'left' | 'right';
	haveIcon: boolean;
}>`
	p {
		margin: 0;
	}
	fill: #fff;
	padding: 3px 5px;

	${({ position, haveIcon }) =>
		`	padding-${position}:${!haveIcon ? '50px' : '5px'};`}

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
		transform: rotate(
			${({ position }) => (position === 'left' ? '180deg' : '0deg')}
		);
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
