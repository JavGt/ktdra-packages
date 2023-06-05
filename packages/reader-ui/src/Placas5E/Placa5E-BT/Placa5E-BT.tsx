import { useIcon } from '@ktdra-digital/icons';
import { Stack, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { Placas5EProps } from '../Placas5E';

const Placa5EBT: React.FC<Placas5EProps> = ({ label, color, icon }) => {
	const Icon = useIcon({ folder: `BT/PLACAS5E`, name: icon });

	return (
		<Stack
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
						'& path:nth-of-type(2)': {
							fill: `${color.light} !important`,
						},
					},
				}}
			>
				{Icon && <Icon />}
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

export const Placa5EBTStyle = styled.div``;

export default Placa5EBT;
