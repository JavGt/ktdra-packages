import React from 'react';
import styled from 'styled-components';
import { StylesContainerFC, stylesContainer } from '../utils';
import { Lectura as LecturaIcon } from '@ktdra-digital/icons/dist/BT';
import { markdownToHtml } from '../utils/markdownToHtml';

export type LecturaProps = {
	text: string;
};

const Lectura: StylesContainerFC<LecturaProps> = ({ colorAC, text }) => {
	return (
		<div style={{ position: 'relative' }}>
			<IconStyled color={colorAC.main}>
				<LecturaIcon />
			</IconStyled>

			<LecturaStyled
				color={colorAC.light}
				dangerouslySetInnerHTML={{ __html: markdownToHtml(text) }}
			/>
		</div>
	);
};

export default stylesContainer(Lectura);

const IconStyled = styled.div<{
	color: string;
}>`
	box-sizing: border-box;
	width: 70px;
	height: 70px;
	position: absolute;
	top: -30px;
	left: 0px;
	z-index: 1;
	border-radius: 100%;
	fill: ${({ color }) => color};
	background: white;
`;

const LecturaStyled = styled.div<{
	color: string;
}>`
	margin: 30px 20px 10px 30px;
	background: ${({ color }) => color};
	padding: 20px 30px;
	box-shadow: 10px 0px 10px 0 rgba(0, 0, 0, 0.2);
	position: relative;
	border-radius: 0 20px 20px 0;
`;
