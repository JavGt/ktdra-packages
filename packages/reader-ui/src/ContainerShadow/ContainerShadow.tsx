import React from 'react';
import { marked } from 'marked';
import { type Color } from '@ktdra-digital/utils';
import styled from 'styled-components';
import { type StylesContainerFC, stylesContainer } from '../utils/styleContainer';

export type ContainerShadowProps = {
	children: string;
};

const ContainerShadow: StylesContainerFC<ContainerShadowProps> = ({
	children,
	colorAC,
}) => {
	const color = colorAC as Color;

	return (
		<ContainerShadowStyled
			color={color.main}
			dangerouslySetInnerHTML={{ __html: marked.parse(children) }}
		/>
	);
};

export default stylesContainer(ContainerShadow, { colorSelector: 'primary' });

export const ContainerShadowStyled = styled.div<{
	color: string;
}>`
	box-sizing: border-box;
	width: calc(100% - 10px);
	margin-bottom: 10px;
	box-shadow: 10px 10px 0px ${props => props.color};
	border: 3px solid ${props => props.color};
	border-radius: 20px;
	padding: 10px 20px;
`;
