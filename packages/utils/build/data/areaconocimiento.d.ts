export type AC = 'Ciencias sociales' | 'Ciencias biológicas y químicas' | 'Humanidades' | 'Ciencias físico-matemáticas' | 'Idiomas Semestre A' | 'Idiomas Semestre B';
export type PaletteKeys = 'primary' | 'secondary';
export type Color = {
    main: string;
    alternative: string;
    light: string;
};
export type ACPalette = Record<PaletteKeys, Color>;
export type AreaConocimiento = Record<AC, ACContent>;
export type ACContent = {
    palette: ACPalette;
};
export declare const areaConocimiento: AreaConocimiento;
