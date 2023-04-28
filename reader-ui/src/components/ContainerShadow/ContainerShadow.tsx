import React from 'react';
import { AreaConocimiento } from '../../constants/area-conocimiento';
import { useColorsAC } from '../../hooks/useColorsAC';
import { Box } from '@mui/material';

export type ContainerShadowProps = {
	AC: keyof typeof AreaConocimiento;
	children: string;
};

const ContainerShadow: React.FC<ContainerShadowProps> = ({ AC, children }) => {
	const color = useColorsAC(AC, 'primary');
	console.log(color.main);

	return (
		<Box
			sx={{
				boxShadow: `10px 10px 0px 0 ${color.main}`,
				border: `3px solid ${color.main}`,
				borderRadius: '20px',
				padding: '10px',
				marginTop: '10px',
			}}
		>
			{children}
		</Box>
	);
};

export default ContainerShadow;
