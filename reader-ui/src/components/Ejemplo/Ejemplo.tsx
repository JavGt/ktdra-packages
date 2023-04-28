import { Box, Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import { useColorsAC } from '../../hooks/useColorsAC';
import { AreaConocimiento } from '../../constants/area-conocimiento';

export type EjemploProps = {
	AC: keyof typeof AreaConocimiento;
	children: string;
	isLabel?: boolean;
	footer?: string;
};

const Ejemplo: React.FC<EjemploProps> = ({ AC, children, isLabel, footer }) => {
	const color = useColorsAC(AC, 'primary');

	return (
		<Stack alignItems='flex-start' mb='10px' mr='10px'>
			{isLabel && (
				<Box
					sx={{
						background: color.main,
						padding: '10px',
						borderRadius: '0 10px 0 0 ',
						color: 'white',
						textTransform: 'uppercase',
					}}
				>
					Ejemplo 1
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
				{children}

				{footer && (
					<Box
						sx={{
							mb: 2,
						}}
					>
						<Divider sx={{ mt: 3, mb: 1 }} />
						<Typography component='blockquote' fontFamily='serif'>
							{footer}
						</Typography>
					</Box>
				)}
			</Box>
		</Stack>
	);
};

export default Ejemplo;
