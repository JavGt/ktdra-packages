import React from 'react';
import { StylesContainerFC, stylesContainer } from '../utils';
import { Color, PaletteKeys } from '@ktdra-digital/utils';
import { LecturaBT } from './Lectura-BT';

export type LecturaFactory = {
	text: string;
	paletteKey?: PaletteKeys;
};

export type LecturaProps = {
	colors: Color;
	text: string;
};

const Lectura: StylesContainerFC<LecturaFactory> = ({
	text,
	paletteKey,
	colors,
}) => {
	return <LecturaBT colors={colors[paletteKey || 'primary']} text={text} />;
};

export default stylesContainer(Lectura);
