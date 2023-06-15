import { AC } from '../types';

export type ColorsSubs = Record<AC, Palette>;

export type PaletteKeys = 'primary' | 'secondary';

export type Palette = Record<PaletteKeys, Color>;

export type Color = {
	main: string;
	alternative: string;
	light: string;
};
