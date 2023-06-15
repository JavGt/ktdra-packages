import { Icon, type SVGComponent } from '../../types';
import { useEffect, useState } from 'react';
import { type Subs, SubsArray } from '@ktdra-digital/utils';
import type { UseIcon } from './types';

export const folders: Record<Subs, string> = {
	BT: 'BT',
	DGB: 'DGB',
	CONALEP: 'BT',
};

const useIcon: UseIcon = (params, subsistema) => {
	const [paramsResult, setParamsResult] = useState<Icon>();
	const [dynamicIcon, setDynamicIcon] = useState<{ icon?: SVGComponent }>({});

	const createFolder = (icon: Icon) => {
		const { folder, isDependent } = icon;

		if (isDependent) return folders[subsistema as Subs] + folder;

		const sub = SubsArray.find((subs) => folder.startsWith(subs));

		return sub ? folder.replace(sub, folders[sub]) : folder;
	};

	const searchIcon = async (icon: Icon) => {
		const folderPath = createFolder(icon);

		try {
			const module = (await import(
				`@ktdra-digital/icons/dist/${folderPath}/${icon.name}.js`
			)) as { default: SVGComponent };

			setParamsResult(icon);

			setDynamicIcon({ icon: module.default });
		} catch (error: any) {
			console.error(error.message);
		}
	};

	useEffect(() => {
		if (paramsResult && JSON.stringify(params) === JSON.stringify(paramsResult))
			return;

		if (!params) {
			if (dynamicIcon.icon && paramsResult) {
				setParamsResult(undefined);
				setDynamicIcon({});
			}

			return;
		}

		if (params.isDependent && !subsistema)
			return console.error(
				'El icono es dependiente de un subsistema, pero no se ha especificado ninguno'
			);

		searchIcon(params);
	}, [params]);

	return dynamicIcon.icon || null;
};

export default useIcon;
