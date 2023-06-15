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
	topLeft?: number;
	topRight?: number;
	bottomLeft?: number;
	bottomRight?: number;
};

// Types styles -------------------------------
export type Styles = Partial<{
	margin: number | InsetsGroup | Insets;
	padding: number | InsetsGroup | Insets;
	backgroundColor: React.CSSProperties['backgroundColor'];
	color: React.CSSProperties['color'];
	borderRadius: BorderRadius;
	border: Border;
	width: number;
	position: SidesHorizontal | 'center';
}>;

export type Border = {
	position?: Sides | 'full';
	color?: React.CSSProperties['borderColor'];
	width?: number;
	type?: React.CSSProperties['borderStyle'];
};

export type BorderRadius = number | InsetsVertex;

export type WrapperStyleProps = {
	styles?: Styles;
	children: React.ReactNode;
};
