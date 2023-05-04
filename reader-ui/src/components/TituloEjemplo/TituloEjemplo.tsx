import React from 'react';
import { AreaConocimiento } from '../../utils/AreasConocimiento';
import { Box, Stack, Typography } from '@mui/material';
import { useColorsAC } from '../../hooks/useColorsAC';
import { Complementate } from '@ktdra/icons/BT';
import type { BT } from '@ktdra/icons/BT/utils/types';
import type { PARTICIPANTES } from '@ktdra/icons/PARTICIPANTES/utils/types';

export type TituloEjemploProps = {
	icon1: BT;
	icon2: BT;
	text: string;
	iconParticipantes: PARTICIPANTES;
	AC: keyof typeof AreaConocimiento;
};

const TituloEjemplo: React.FC<TituloEjemploProps> = ({
	icon1,
	icon2,
	iconParticipantes,
	text,
	AC,
}) => {
	const { primary, secondary } = useColorsAC(AC) as {
		primary: { main: string; alternative: string };
		secondary: { main: string; alternative: string };
	};

	const Icon1 = icon1 && require('@ktdra/icons/BT')[icon1];

	const Icon2 = icon2 && require('@ktdra/icons/BT')[icon2];

	const { [iconParticipantes]: Participantes } = require('@ktdra/icons/PARTICIPANTES');

	return (
		<Stack
			direction='row'
			alignItems='center'
			sx={{ '& svg': { width: 50, height: 50, fill: secondary.alternative } }}
		>
			{icon1 && <Icon1 />}

			{icon1 && icon2 && (
				<Box
					sx={{
						width: 7,
						height: 7,
						background: secondary.alternative,
						borderRadius: 100,
					}}
				/>
			)}

			{icon2 && <Icon2 />}

			<Complementate />

			<Typography
				mx={0.5}
				sx={{ color: primary.main }}
				fontSize='20px'
				textTransform='uppercase'
			>
				{text}
			</Typography>

			<Participantes />
		</Stack>
	);
};

export default TituloEjemplo;
