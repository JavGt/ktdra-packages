// This function filters the ICONS array based on the selected folders.

import { ICONS } from '../../constants';
import { FoldersIcon } from '../../types';

const optionsIcons = (folders: FoldersIcon[]) => {
	if (!folders.length) return ICONS;

	return ICONS.filter((icon) => folders.includes(icon.folder as FoldersIcon));
};

export default optionsIcons;