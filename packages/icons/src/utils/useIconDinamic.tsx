import React from 'react';

import { useEffect, useState } from 'react';
import { BT } from '../../dist/BT/utils/types';

export const useIconDynamic = (icon: BT, target: string): JSX.Element => {
	const [Icon, setIcon] = useState<JSX.Element>(<></>);

	useEffect(() => {
		const importIcon = async () => {
			const { default: namedExport } = await import(`../../dist/BT/${icon}`);
			setIcon(namedExport);
		};
		importIcon();
	}, [icon]);

	return Icon;
};
