import styled from '@emotion/styled';
import { Insets, InsetsGroup, InsetsVertex, Styles } from './types';

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

		if (typeof borderRadius === 'number') return borderRadius + 'px';

		const { topLeft, topRight, bottomLeft, bottomRight } =
			borderRadius as InsetsVertex;

		return `${topLeft ?? 0}px ${topRight ?? 0}px ${bottomLeft ?? 0}px ${
			bottomRight ?? 0
		}px`;
	}};

	& > * {
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

export const FactorySize = (
	prop: number | InsetsGroup | Insets | undefined
) => {
	if (!prop) return 0;

	if (typeof prop === 'number') return `${prop}%`;

	if ('x' in prop || 'y' in prop) {
		const { x, y } = prop as InsetsGroup;

		return `${y || 0} ${x || 0}`;
	}

	const { top, right, bottom, left } = prop as Insets;

	return `${top || 0} ${right || 0} ${bottom || 0} ${left || 0}`;
};
