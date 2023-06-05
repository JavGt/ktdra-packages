import { ICONS } from '../constants/icons';

export const optionsIcons = (...args: string[]) => {
	if (!args.length) return ICONS;

	return ICONS.filter((icon) => args.includes(icon.folder));
};
