import React from 'react';
import { type Color } from '@ktdra-digital/utils';
import styled from 'styled-components';
import {
	type StylesContainerFC,
	stylesContainer,
} from '../utils/styleContainer';
import { markdownToHtml } from '../utils/markdownToHtml';

export type ContainerShadowProps = {
	text: string;
};

const ContainerShadow: StylesContainerFC<ContainerShadowProps> = ({
	text,
	colorAC,
}) => {
	return (
		<ContainerShadowStyled
			color={colorAC.main}
			dangerouslySetInnerHTML={{ __html: markdownToHtml(text) }}
		/>
	);
};

export default stylesContainer(ContainerShadow);

export const ContainerShadowStyled = styled.div<{
	color: string;
}>`
	box-sizing: border-box;
	width: calc(100% - 10px);
	margin-bottom: 10px;
	box-shadow: 10px 10px 0px ${(props) => props.color};
	border: 3px solid ${(props) => props.color};
	border-radius: 20px;
	padding: 10px 20px;
`;
