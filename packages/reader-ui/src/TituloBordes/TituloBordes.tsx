import { Color } from '@ktdra/utils';
import React from 'react';
import styled from 'styled-components';
import { stylesContainer, StylesContainerFC } from '../utils';

export type TituloBordesProps = {
	text: string;
};

const TituloBordes: StylesContainerFC<TituloBordesProps> = ({ colorAC, text }) => {
	const color = colorAC as Color;

	return (
		<TituloBordesStyle color={color.alternative}>
			<div className='title'>{text}</div>
		</TituloBordesStyle>
	);
};

export const TituloBordesStyle = styled.div<{
	color: string;
}>`
	margin: 30px 0;
	border-top: 7px dotted ${({ color }) => color};
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;

	.title {
		position: absolute;
		padding: 5px 30px;
		font-size: 24px;
		font-weight: 600;
		font-family: '--apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen',
			'Ubuntu', 'Cantarell';
		background: ${({ color }) => color};
		color: white;
		clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%);
	}
`;

export default stylesContainer(TituloBordes, { colorSelector: 'primary' });
