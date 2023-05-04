import React from 'react';
import { AreaConocimiento } from '../../utils/AreasConocimiento';
import { useColorsAC } from '../../hooks/useColorsAC';
import { Box } from '@mui/material';
import { marked } from 'marked';

export type ContainerShadowProps = {
	AC: keyof typeof AreaConocimiento;
	children: string;
};

const ContainerShadow: React.FC<ContainerShadowProps> = ({ AC, children }) => {
	const color = useColorsAC(AC, 'primary') as {
		main: string;
		light: string;
	};

	return (
		<Box
			sx={{
				maxWidth: '100%',
				width: '100%',
				boxShadow: `10px 10px 0px 0 ${color.main}`,
				border: `3px solid ${color.main}`,
				borderRadius: '20px',
				padding: '10px',
				marginTop: '10px',
			}}
		>
			<div dangerouslySetInnerHTML={{ __html: marked.parse(children) }} />
		</Box>
	);
};

export default ContainerShadow;
