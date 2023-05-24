import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Complementate } from '@ktdra-digital/icons/dist/BT';
import type { BT } from '@ktdra-digital/icons/dist/BT/utils/types';
import type { PARTICIPANTES } from '@ktdra-digital/icons/dist/PARTICIPANTES/utils/types';
import { ACPalette } from '@ktdra-digital/utils';
import { StylesContainerFC, stylesContainer } from '../utils';

export type TituloEjemploProps = {
	icon1: BT;
	icon2: BT;
	text: string;
	iconParticipantes: PARTICIPANTES;
};

const TituloEjemplo: StylesContainerFC<TituloEjemploProps> = ({ icon1, icon2, iconParticipantes, text, colorAC }) => {
	const { primary, secondary } = colorAC as ACPalette;

	const Icon1 = icon1 && require('@ktdra-digital/icons/dist/BT')[icon1];

	const Icon2 = icon2 && require('@ktdra-digital/icons/dist/BT')[icon2];

	const { [iconParticipantes]: Participantes } = require('@ktdra-digital/icons/dist/PARTICIPANTES');

	return (
		<Stack direction='row' alignItems='center' sx={{ '& svg': { width: 50, height: 50, fill: secondary.alternative } }}>
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

			<Typography mx={0.5} sx={{ color: primary.main }} fontSize='20px' textTransform='uppercase'>
				{text}
			</Typography>

			<Participantes />
		</Stack>
	);
};

export default stylesContainer(TituloEjemplo);
