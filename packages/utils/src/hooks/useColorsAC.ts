import type { AC, ACPalette, Color, PaletteKeys } from '../data/areaconocimiento';
import { areaConocimiento } from '../data/areaconocimiento';

/**
 * @description Hook para obtener los colores de una area de conocimiento
 * @param area - Area de conocimiento
 * @param selector - Selector de color
 * @returns
 * @example
 * const { palette } = useGetColorsAC('Ciencias sociales') as ACPalette;
 * const { primary } = useGetColorsAC('Ciencias sociales', 'primary') as Color;
 */
export const useGetColorsAC = <T extends PaletteKeys>(
	area: AC,
	selector?: T
): Color | ACPalette => {
	const { palette } = areaConocimiento[area];

	if (selector) {
		return palette[selector] as Color;
	}

	return palette as ACPalette;
};
