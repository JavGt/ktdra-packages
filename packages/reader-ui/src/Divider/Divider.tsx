import React from 'react';
import { Color } from '@ktdra-digital/utils';
import styled from 'styled-components';
import { StylesContainerFC, stylesContainer } from '../utils';

export type DividerProps = {
	type: React.CSSProperties['borderStyle'];
	size: number;
};

const Divider: StylesContainerFC<DividerProps> = ({ type = 'solid', size = 10, colorAC }) => {
	const { main } = colorAC as Color;

	return <DividerStyled size={size} type={type} color={main} />;
};

export default stylesContainer(Divider, {
	colorSelector: 'primary',
});

const DividerStyled = styled.div<{
	size: number;
	color: string;
	type: React.CSSProperties['borderStyle'];
}>`
	border-bottom: ${({ size, color, type }) => `${size}px ${type} ${color}`};
`;
