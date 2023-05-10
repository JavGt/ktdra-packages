import React from 'react';
import { Box } from '@mui/material';
import { marked } from 'marked';
import { AC, Color, useGetColorsAC } from '@ktdra/utils';
import { StylesContainerFC, stylesContainer } from '../utils/styleContainer';

export type ContainerShadowProps = {
	children: string;
};

const ContainerShadow: StylesContainerFC<ContainerShadowProps> = ({
	AC,
	children,
	colorAC,
}) => {
	return (
		<Box
			sx={{
				maxWidth: '100%',
				width: '100%',
				boxShadow: `10px 10px 0px 0 ${colorAC.main}`,
				border: `3px solid ${colorAC.main}`,
				borderRadius: '20px',
				padding: '10px',
				marginTop: '10px',
			}}
		>
			<div dangerouslySetInnerHTML={{ __html: marked.parse(children) }} />
		</Box>
	);
};

export default stylesContainer(ContainerShadow, {});
