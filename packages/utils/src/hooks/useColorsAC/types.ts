import { ColorsSubs, Palette } from '../../colors';
import { AC, Subs } from '../../types';

export type UseGetColorsAC = (options: {
	area: AC;
	subsistema: Subs;
}) => Palette;

export type ObjColors = Record<Subs, ColorsSubs>;
