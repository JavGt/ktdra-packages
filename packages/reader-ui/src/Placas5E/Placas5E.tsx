import React from 'react';
import type {
	ACPalette,
	Color,
	PaletteKeys,
} from '@ktdra-digital/utils/dist/data';
import { type StylesContainerFC, stylesContainer } from '../utils';
import { Placas5EVariant } from './variants';
import { Placa5EBT } from './Placa5E-BT';
import { Placa5EDGB } from './Placa5E-DGB';

export type Placas5EFactoryProps = {
	variant: keyof typeof Placas5EVariant;
};
export type Placas5EProps = {
	label: string;
	color: Color;
	icon: string;
};

const Placas5E: StylesContainerFC<Placas5EFactoryProps> = ({
	variant,
	subsistema,
	ACPalette,
}) => {
	const data = Placas5EVariant[variant];

	if (subsistema === 'BT')
		return (
			<Placa5EBT
				color={ACPalette[data.color[subsistema] as PaletteKeys]}
				icon={data.icon}
				label={data.label}
			/>
		);

	if (subsistema === 'DGB')
		return (
			<Placa5EDGB
				color={ACPalette[data.color[subsistema] as PaletteKeys]}
				icon={data.icon}
				label={data.label}
			/>
		);

	return <></>;
};

export default stylesContainer(Placas5E, {
	colorType: 'ACPalette',
});
