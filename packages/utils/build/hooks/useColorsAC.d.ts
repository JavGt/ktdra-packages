import type { AC, ACPalette, Color, PaletteKeys } from '../data/areaconocimiento';
/**
 * @description Hook para obtener los colores de una area de conocimiento
 * @param area - Area de conocimiento
 * @param selector - Selector de color
 * @returns
 * @example
 * const { palette } = useGetColorsAC('Ciencias sociales') as ACPalette;
 * const { primary } = useGetColorsAC('Ciencias sociales', 'primary') as Color;
 */
export declare const useGetColorsAC: <T extends PaletteKeys>(area: AC, selector?: T | undefined) => Color | ACPalette;
