import React from 'react';
import styled from 'styled-components';

// Types common ----------------------------
export type Porcentajes = `${number}%`;

export type Px = `${number}px`;

export type Hex = `#${string}`;

export type Insets = Record<Sides, Px>;

export type SidesHorizontal = 'right' | 'left';

export type SidesVertical = 'top' | 'bottom';

export type Sides = SidesHorizontal | SidesVertical;

export type InsetsGroup = {
	x?: Px;
	y?: Px;
};

export type InsetsVertex = {
	topLeft?: Px;
	topRight?: Px;
	bottomLeft?: Px;
	bottomRight?: Px;
};

// Types styles -------------------------------
export type BgStyles = Partial<{
	margin?: Px | InsetsGroup | Insets;
	padding: Px | InsetsGroup | Insets;
	backgroundColor?: Hex | React.CSSProperties['backgroundColor'];
	color?: Hex | React.CSSProperties['backgroundColor'];
	borderRadius?: BorderRadius;
	border?: Border;
}>;

export type ItemStyles = Partial<{
	width?: Px | Porcentajes;
	position?: SidesHorizontal | 'center';
}>;

export type Border = {
	position?: Sides | 'full';
	color?: Hex | React.CSSProperties['borderColor'];
	width?: Px;
	type?: React.CSSProperties['borderStyle'];
};

export type BorderRadius = Px | Porcentajes | InsetsVertex;

export type Styles = {
	background?: BgStyles;
	item?: ItemStyles;
};

export type ComponentStyled<T = {}> = React.FC<T & Styles>;

const WrapperStyle: React.FC<Styles & { children?: React.ReactNode }> = ({
	children,
	background,
	item,
}) => {
	return (
		<StyledComponent {...background}>
			<ItemStyle {...item}>{children}</ItemStyle>
		</StyledComponent>
	);
};

export const ItemStyle = styled.div<ItemStyles>`
	${({ width }) => {
		if (!width) return '';

		if (typeof width === 'string') return `width: ${width};`;

		return `width: ${width};`;
	}}

	${({ position }) => {
		if (!position) return '';

		if (position === 'center') return 'margin: 0 auto;';
		if (position === 'right') return 'margin-left: auto;';
		if (position === 'left') return 'margin-right: auto;';
	}}
`;

export const StyledComponent = styled.div<BgStyles>`
	font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;

	p {
		line-height: 1.5;
	}

	background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
	overflow: auto;
	color: ${({ color }) => color || 'black'};
	border-radius: ${({ borderRadius }) => {
		if (typeof borderRadius === 'string') return borderRadius;

		const { topLeft, topRight, bottomLeft, bottomRight } = borderRadius || {};

		return `${topLeft || 0} ${topRight || 0} ${bottomLeft || 0} ${bottomRight || 0}`;
	}};
	margin: ${({ margin }) => FactorySize(margin)};
	padding: ${({ padding }) => FactorySize(padding)};

	${({ border }) => {
		if (!border) return '';

		const { position, color, width, type } = border;

		const tag = position === 'full' || !position ? 'border' : `border-${position}`;

		return `${tag}: ${width || 0} ${type || 'solid'} ${color || 'transparent'};`;
	}}
`;

export const FactorySize = (prop: Px | InsetsGroup | Insets | undefined) => {
	if (!prop) return '0px';

	if (typeof prop === 'string') return prop;

	if ('x' in prop || 'y' in prop) {
		const { x, y } = prop as InsetsGroup;

		return `${y || 0} ${x || 0}`;
	}

	const { top, right, bottom, left } = prop as Insets;

	return `${top || 0} ${right || 0} ${bottom || 0} ${left || 0}`;
};

export default WrapperStyle;
