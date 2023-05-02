import React from 'react';
import { AreaConocimiento } from '../../constants/area-conocimiento';
import { Box, Stack, Typography } from '@mui/material';
import { Complementate } from '@ktdra/icons/BT';
import { useColorsAC } from '../../hooks/useColorsAC';

export type TituloEjemploProps = {
	icon1: string;
	icon2: string;
	text: string;
	iconParticipantes: string;
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

	const {
		[icon1]: Icon1,
		[icon2]: Icon2,
		[iconParticipantes]: Particiantes,
	} = require('@ktdra/icons/BT');

	return (
		<Stack
			direction='row'
			alignItems='center'
			sx={{
				'& svg': {
					width: 50,
					height: 50,
					fill: secondary.alternative,
				},
			}}
		>
			<Icon1 />

			{icon2 && (
				<>
					<Box
						sx={{
							width: 7,
							height: 7,
							background: secondary.alternative,
							borderRadius: 100,
						}}
					/>
					<Icon2 />
				</>
			)}

			<Complementate />

			<Typography
				mx={0.5}
				sx={{ color: primary.main }}
				fontSize='20px'
				textTransform='uppercase'
			>
				{text}
			</Typography>

			<Particiantes />
		</Stack>
	);
};

export default TituloEjemplo;
