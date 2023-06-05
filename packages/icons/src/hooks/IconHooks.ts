import { useMemo, useState } from 'react';
import { Icon, type SVGComponent } from '../ts';

export type Options = {};

export type UseIcon = (
	params: Icon,
	subsistema?: string
) => SVGComponent | null;

export const useIcon: UseIcon = (params, subsistema) => {
	if (!params || (!params.folder && !params.name)) return null;

	const { folder, name, isDependent } = params;

	if (isDependent && !subsistema) {
		console.error(
			'El icono es dependiente de un subsistema, pero no se ha especificado ninguno'
		);
		return null;
	}

	const component = useMemo(() => {
		let component = null;

		try {
			const comp = require(`@ktdra-digital/icons/dist/${
				isDependent ? subsistema + folder : folder
			}/${name}.js`) as {
				default: SVGComponent;
			};
			component = comp.default;
		} catch (error: any) {
			console.error(error?.message);
		}

		return component;
	}, [folder, name]);

	return component;
};
