import styled from '@emotion/styled';
import { Insets, InsetsVertex, Styles } from './types';

export const StyledComponent = styled.div<Styles>`
	display: flex;
	justify-content: ${({ position }) => {
		if (!position) return 'flex-start';

		if (position === 'center') return 'center';
		if (position === 'right') return 'flex-end';
		if (position === 'left') return 'flex-start';

		return 'flex-start';
	}};
	color: ${({ color }) => color || 'black'};
	margin: ${({ margin }) => FactorySize(margin)};
	padding: ${({ padding }) => FactorySize(padding)};
	background-color: ${({ backgroundColor }) =>
		backgroundColor ?? 'transparent'};
	border-radius: ${({ borderRadius }) => {
		if (!borderRadius) return '0px';

		const { topLeft, topRight, bottomLeft, bottomRight } =
			borderRadius as InsetsVertex;

		return `${topLeft ?? 0}px ${topRight ?? 0}px ${bottomLeft ?? 0}px ${
			bottomRight ?? 0
		}px`;
	}};

	.wrapperStyle--content {
		width: ${({ width }) => `${width ?? 100}%`};
	}

	${({ border }) => {
		if (!border) return '';

		const { position, color, width, type } = border;

		const tag =
			position === 'full' || !position ? 'border' : `border-${position}`;

		return `${tag}: ${width ?? 0}px ${type ?? 'solid'} ${color ?? 'black'};`;
	}}
`;

export const FactorySize = (prop: Insets | undefined) => {
	if (!prop) return '0px';

	const { top, right, bottom, left } = prop as Insets;

	return `${top || 0}px ${right || 0}px ${bottom || 0}px ${left || 0}px`;
};
