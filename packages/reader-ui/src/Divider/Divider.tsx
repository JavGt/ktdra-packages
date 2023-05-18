import React from 'react';
import { AC, Color, useGetColorsAC } from '@ktdra-digital/utils';
import styled from 'styled-components';

export type DividerProps = {
	AC: AC;
	type?: React.CSSProperties['borderStyle'];
	size?: number;
};

const Divider: React.FC<DividerProps> = ({ type, AC, size }) => {
	const { main } = useGetColorsAC(AC, 'primary') as Color;

	return <DividerStyled size={size} type={type} color={main} />;
};

Divider.defaultProps = {
	type: 'groove',
};
export default Divider;

const DividerStyled = styled.div<{
	size?: number;
	color: string;
	type: React.CSSProperties['borderStyle'];
}>`
	border-bottom: ${({ size, color, type }) => `${size}px ${type} ${color}`};
`;
