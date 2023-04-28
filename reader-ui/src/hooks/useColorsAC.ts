import { AreaConocimiento } from '../constants/area-conocimiento';

export type AC = keyof typeof AreaConocimiento;

export type Selector = 'primary' | 'secondary';

export const useColorsAC = <T extends Selector>(area: AC, selector?: T) => {
	if (selector) {
		return AreaConocimiento[area][selector];
	}

	return AreaConocimiento[area];
};
