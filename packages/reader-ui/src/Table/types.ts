import type { Palette, PaletteKeys } from '@ktdra-digital/utils';

export type Table = {
	caption?: string;
	captionSide?: 'top' | 'bottom';
	thead: Thead;
	tbody: Tbody;
};

export type Thead = Th[][];

export type Th = {
	colSpan?: number;
	label: string;
	rowSpan?: number;
	keyColor?: PaletteKeys;
};

export type Td = {
	rowSpan?: number;
	colSpan?: number;
	label: string;
	keyColor?: PaletteKeys;
};

export type Tbody = Td[][];

export type TableProps = {
	table: Table;
};

export type ThStlProps = {
	keyColor: string;
};

export type TdStlProps = {
	keyColor: string;
};

export type TableStlProps = {
	captionSide: 'top' | 'bottom';
	colors: Palette;
};
