import React from 'react';
import styled from '@emotion/styled';
import { StylesContainerFC, stylesContainer } from '../utils';
import { Color, PaletteKeys } from '@ktdra-digital/utils';

export type DividerProps = {
	type: React.CSSProperties['borderStyle'];
	size: number;
	paletteKey?: PaletteKeys;
};

const Divider: StylesContainerFC<DividerProps> = ({
	type = 'solid',
	size = 10,
	colors,
	paletteKey,
}) => {
	return (
		<DividerStyled
			size={size}
			type={type}
			colors={colors[paletteKey || 'primary']}
		/>
	);
};

export default stylesContainer(Divider);

const DividerStyled = styled.div<{
	size: number;
	colors: Color;
	type: React.CSSProperties['borderStyle'];
}>`
	border-bottom: ${({ size, colors, type }) =>
		`${size}px ${type} ${colors.main}`};
`;
