import React from 'react';
import { StylesContainerFC, stylesContainer } from '../utils';
import { markdownToHtml } from '../utils/markdownToHtml';
import { EjemploStyled } from './Ejemplo.styled';
import { PaletteKeys } from '@ktdra-digital/utils';

export type EjemploProps = {
	numberExample?: number;
	text: string;
	isLabel: boolean;
	footer?: string;
	paletteKey?: PaletteKeys;
	title?: string;
};

const Ejemplo: StylesContainerFC<EjemploProps> = ({
	text,
	isLabel,
	numberExample,
	colors,
	paletteKey,
	title,
}) => {
	return (
		<EjemploStyled colors={colors[paletteKey || 'primary']}>
			{isLabel && (
				<div className='label'>
					{title ? title : `Ejemplo ${numberExample}`}
				</div>
			)}
			<div className='content'>
				<div dangerouslySetInnerHTML={{ __html: markdownToHtml(text) }} />
			</div>
		</EjemploStyled>
	);
};

Ejemplo.defaultProps = {
	text: 'Este es un texto de prueba',
	numberExample: 1,
};

export default stylesContainer(Ejemplo);
