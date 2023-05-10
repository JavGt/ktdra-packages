import React from 'react';
import { Box, Divider, Stack } from '@mui/material';
import { useGetColorsAC } from '@ktdra/utils/dist/hooks';
import type { Color, AC } from '@ktdra/utils/dist/data';
import { marked } from 'marked';

export type EjemploProps = {
	numberExample?: number;
	AC: AC;
	text: string;
	isLabel?: boolean;
	footer?: string;
	width: string;
	center: boolean;
	textCenter: boolean;
};

const Ejemplo: React.FC<EjemploProps> = ({
	AC,
	text,
	isLabel,
	footer,
	width,
	center,
	textCenter,
	numberExample,
}) => {
	const color = useGetColorsAC(AC, 'primary') as Color;

	return (
		<Stack
			width={`${width}%`}
			alignItems='flex-start'
			mb='10px'
			mr='10px'
			mx={center ? 'auto' : ''}
		>
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
					fontFamily: 'serif',
				}}
			>
				<Box sx={{ textAlign: textCenter ? 'center' : 'initial' }}>
					<div dangerouslySetInnerHTML={{ __html: marked.parse(text) }} />
				</Box>

				{footer && (
					<Box sx={{ mb: 2 }}>
						<Divider sx={{ mt: 3, mb: 1 }} />
						<Box color='#7b7b7b' fontFamily='serif'>
							<div dangerouslySetInnerHTML={{ __html: marked.parse(footer) }} />
						</Box>
					</Box>
				)}
			</Box>
		</Stack>
	);
};

Ejemplo.defaultProps = {
	text: 'Este es un texto de prueba',
	width: '100',
	numberExample: 1,
};

export default Ejemplo;
