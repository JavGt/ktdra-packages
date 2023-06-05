import React from 'react';
import styled from 'styled-components';
import { StylesContainerFC, stylesContainer } from '../utils';

export type DividerProps = {
	type: React.CSSProperties['borderStyle'];
	size: number;
};

const Divider: StylesContainerFC<DividerProps> = ({
	type = 'solid',
	size = 10,
	colorAC,
}) => {
	return <DividerStyled size={size} type={type} color={colorAC.main} />;
};

export default stylesContainer(Divider);

const DividerStyled = styled.div<{
	size: number;
	color: string;
	type: React.CSSProperties['borderStyle'];
}>`
	border-bottom: ${({ size, color, type }) => `${size}px ${type} ${color}`};
`;
