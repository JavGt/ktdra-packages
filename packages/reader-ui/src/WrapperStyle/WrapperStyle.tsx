import React from 'react';
import styled from 'styled-components';

// Types common ----------------------------
export type Porcentajes = `${number}%`;

export type Px = `${number}px`;

export type Hex = `#${string}`;

export type Insets = {
	top?: Px;
	right?: Px;
	bottom?: Px;
	left?: Px;
};

export type Sides = 'top' | 'right' | 'bottom' | 'left' | 'full';

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
export type StylesProps = Partial<{
	margin?: Px | InsetsGroup | Insets;
	padding: Px | InsetsGroup | Insets;
	backgroundColor?: Hex | React.CSSProperties['backgroundColor'];
	color?: Hex;
	borderRadius?: BorderRadius;
	border?: Border;
}>;

export type Border = {
	position?: Sides;
	color?: Hex | React.CSSProperties['borderColor'];
	width?: Px;
	type?: React.CSSProperties['borderStyle'];
};

export type BorderRadius = Px | Porcentajes | InsetsVertex;

export type Styles = {
	background?: StylesProps;
	item?: StylesProps;
};

export type ComponentStyled<T = {}> = React.FC<T & Styles>;

const WrapperStyle: React.FC<Styles & { children?: React.ReactNode }> = ({
	children,
	background,
	item,
}) => {
	return (
		<StyledComponent {...background}>
			<StyledComponent {...item}>{children}</StyledComponent>
		</StyledComponent>
	);
};

export const StyledComponent = styled.div<StylesProps>`
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
