import {
	AC,
	ACPalette,
	Color,
	PaletteKeys,
	areaConocimiento,
} from '../utils/AreasConocimiento';

export const useColorsAC = <T extends PaletteKeys>(
	area: AC,
	selector?: T
): Color | ACPalette => {
	const { palette } = areaConocimiento[area];

	if (selector) {
		return palette[selector] as Color;
	}

	return palette as ACPalette;
};
