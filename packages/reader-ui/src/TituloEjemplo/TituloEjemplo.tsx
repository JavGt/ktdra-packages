import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Complementate } from '@ktdra-digital/icons/dist/BT';
import { useIcon, type Icon } from '@ktdra-digital/icons';
import { StylesContainerFC, stylesContainer } from '../utils';

export type TituloEjemploProps = {
	icon?: Icon;
	iconSecondary?: Icon;
	iconParticipantes?: Icon;
	title: string;
	notVisibleArrow?: boolean;
};

const TituloEjemplo: StylesContainerFC<TituloEjemploProps> = ({
	icon,
	iconSecondary,
	iconParticipantes,
	title,
	subsistema,
	colors,
	notVisibleArrow,
}) => {
	const { primary, secondary } = colors;

	const Icon = useIcon(icon, subsistema);

	const IconSecondary = useIcon(iconSecondary, subsistema);

	const Participantes = useIcon(iconParticipantes, subsistema);

	return (
		<Stack
			direction='row'
			alignItems='center'
			sx={{ '& svg': { width: 50, height: 50, fill: secondary.alternative } }}
		>
			{Icon && <Icon />}

			{Icon && IconSecondary && (
				<Box
					sx={{
						width: 7,
						height: 7,
						background: secondary.alternative,
						borderRadius: 100,
					}}
				/>
			)}

			{IconSecondary && <IconSecondary />}

			{!notVisibleArrow && <Complementate />}

			<Typography
				mx={0.5}
				sx={{ color: primary.main }}
				fontSize='20px'
				textTransform='uppercase'
			>
				{title}
			</Typography>

			{Participantes && <Participantes />}
		</Stack>
	);
};

export default stylesContainer(TituloEjemplo);
