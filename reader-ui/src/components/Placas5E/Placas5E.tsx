import React from 'react';
import { Stack, Typography } from '@mui/material';
import { Selector, useColorsAC } from '../../hooks/useColorsAC';
import { AreaConocimiento } from '../../constants/area-conocimiento';
import {
	Elaboramos,
	Exploramos,
	Enganchamos,
	Explicamos,
	Evaluamos,
} from '@ktdra/icons/BT';

export const Placas5EVariant = {
	enganchamos: {
		label: 'Enganchamos',
		color: 'secondary',
		Icon: Enganchamos,
	},
	exploramos: {
		label: 'Exploramos',
		color: 'primary',
		Icon: Exploramos,
	},
	explicamos: {
		label: 'Explicamos',
		color: 'secondary',
		Icon: Explicamos,
	},
	elaboramos: {
		label: 'Elaboramos',
		color: 'secondary',
		Icon: Elaboramos,
	},
	evaluamos: {
		label: 'Evaluamos',
		color: 'primary',
		Icon: Evaluamos,
	},
};

export type Color = 'primary' | 'secondary';

export type Placas5EProps = {
	/**
	 * Indica para que progresión de aprendizaje corresponde
	 */
	variant: keyof typeof Placas5EVariant;
	/**
	 * Indicar hacia que Area de conocimiento corresponde la Placa 5S
	 */
	AC: keyof typeof AreaConocimiento;
};

const Placas5E: React.FC<Placas5EProps> = ({ variant, AC }) => {
	const color = useColorsAC(AC, Placas5EVariant[variant].color as Selector);
	const { label, Icon } = Placas5EVariant[variant];

	return (
		<Stack
			p={1}
			direction='row'
			width='100%'
			alignItems='center'
			gap={0.5}
			justifyContent='center'
		>
			<Stack
				alignItems='center'
				sx={{
					width: 60,
					'& > svg': {
						fill: color.main,
						'& path:nth-child(2)': {
							fill: `${color.light} !important`,
						},
					},
				}}
			>
				<Icon />
			</Stack>

			<Typography
				sx={{ color: color.main }}
				marginRight={0.5}
				fontSize={{ xs: 18, md: 22 }}
			>
				{label}
			</Typography>

			<Stack
				justifyContent='center'
				alignItems='end'
				sx={{
					flexGrow: 1,
					height: 2,
					background: color.main,
					position: 'relative',

					'&::after': {
						position: 'absolute',
						content: '""',
						borderRadius: '100%',
						height: 7,
						width: 7,
						background: 'inherit',
					},
				}}
			/>
		</Stack>
	);
};

export default Placas5E;