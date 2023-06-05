import { Icon, useIcon } from '@ktdra-digital/icons';
import React from 'react';
import styled from 'styled-components';
import { StylesContainerFC, stylesContainer } from '../utils';
import { Color } from '@ktdra-digital/utils';

export type ButtonProps = {
	text: string;
	icon?: Icon;
	url: string;
};

const Button: StylesContainerFC<ButtonProps> = ({
	text,
	icon,
	url,
	colorAC,
	subsistema,
}) => {
	const Icon = icon && useIcon(icon, subsistema);

	return (
		<ButtonStyle href={url} target='_blank' type='button' colorCustom={colorAC}>
			{Icon && <Icon />}
			{text}
		</ButtonStyle>
	);
};

export default stylesContainer(Button);

export const ButtonStyle = styled.a<{
	colorCustom: Color;
}>`
	width: fit-content;
	margin: 0 auto;
	color: ${({ colorCustom }) => colorCustom.main};
	display: flex;
	font-weight: 700;
	cursor: pointer;
	gap: 10px;
	text-decoration: none;
	align-items: center;
	background-color: ${({ colorCustom }) => colorCustom.light};
	border-radius: 10px;
	transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
	font-size: 20px;
	padding: 5px 10px;
	@media (min-width: 768px) {
		padding: 10px 20px;
		font-size: 30px;
	}

	&:hover {
		background-color: ${({ colorCustom }) => colorCustom.alternative};
		color: ${({ colorCustom }) => colorCustom.light};
		svg {
			fill: ${({ colorCustom }) => colorCustom.light};
		}
	}
	svg {
		transition: fill 0.2s ease-in-out;
		fill: ${({ colorCustom }) => colorCustom.main};
		width: min(40px, 40px);
		@media (min-width: 768px) {
			width: min(60px, 60px);
		}
	}
`;
