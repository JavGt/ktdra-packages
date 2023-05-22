import React from 'react';
import { Box, Divider, Stack } from '@mui/material';
import type { Color } from '@ktdra-digital/utils/dist/data';
import { StylesContainerFC, stylesContainer } from '../utils';
import { markdownToHtml } from '../utils/marked';

export type EjemploProps = {
	numberExample?: number;
	text: string;
	isLabel?: boolean;
	footer?: string;
};

const Ejemplo: StylesContainerFC<EjemploProps> = ({
	text,
	isLabel,
	footer,
	numberExample,
	colorAC,
}) => {
	const color = colorAC as Color;

	return (
		<Stack mb='20px' mr='20px' alignItems='flex-start'>
			{isLabel && (
				<Box
					sx={{
						background: color.alternative,
						padding: '5px 10px',
						borderRadius: '0 10px 0 0 ',
						color: 'white',
						textTransform: 'uppercase',
					}}
				>
					Ejemplo {numberExample}
				</Box>
			)}
			<Box
				sx={{
					padding: '10px',
					background: '#f8f8f5',
					borderRadius: '0 20px ',
					boxShadow: '10px 10px 10px 0 rgba(0, 0, 0, 0.2)',
				}}
			>
				<div dangerouslySetInnerHTML={{ __html: markdownToHtml(text) }} />

				{footer && (
					<Box sx={{ mb: 2 }}>
						<Divider sx={{ mt: 3, mb: 1 }} />

						<Box sx={{ fontFamily: 'serif' }} color='#7b7b7b'>
							<div dangerouslySetInnerHTML={{ __html: markdownToHtml(footer) }} />
						</Box>
					</Box>
				)}
			</Box>
		</Stack>
	);
};

Ejemplo.defaultProps = {
	text: 'Este es un texto de prueba',
	numberExample: 1,
};

export default stylesContainer(Ejemplo, {
	colorSelector: 'primary',
});
