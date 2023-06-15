import React from 'react';
import styled from '@emotion/styled';
import { Color } from '@ktdra-digital/utils';
import { StylesContainerFC, markdownToHtml, stylesContainer } from '../utils';
import { Icon, useIcon } from '@ktdra-digital/icons';

export type TituloComplementateProps = {
	title: string;
	remColorTitle: boolean;
	icon?: Icon;
	remColorIcon: boolean;
};

const TituloComplementate: StylesContainerFC<TituloComplementateProps> = ({
	title,
	colors,
	icon,
	remColorIcon,
	remColorTitle,
	subsistema,
}) => {
	const { primary, secondary } = colors;
	const Icon = icon && useIcon(icon, subsistema);

	return (
		<TituloComplementateStyle
			remColorIcon={remColorIcon}
			remColorTitle={remColorTitle}
			primary={primary}
			secondary={secondary}
		>
			{Icon && <Icon />}

			<div
				className='text'
				dangerouslySetInnerHTML={{ __html: markdownToHtml(title) }}
			/>

			<div className='line' />
		</TituloComplementateStyle>
	);
};

export default stylesContainer(TituloComplementate);

export const TituloComplementateStyle = styled.div<
	Pick<TituloComplementateProps, 'remColorIcon' | 'remColorTitle'> & {
		primary: Color;
		secondary: Color;
	}
>`
	display: flex;
	align-items: center;
	gap: 10px;
	color: ${({ secondary, remColorTitle }) =>
		!remColorTitle ? secondary.alternative : '#000'};

	.text {
		font-family: '--apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto',
			'Oxygen';
		font-size: 20px;
		max-width: 40%;
	}

	svg {
		width: min(60px, 60px);
		flex-shrink: 0;
		path {
			${({ remColorIcon, secondary, primary }) =>
				!remColorIcon &&
				`&:nth-child(1) {
				fill: ${primary.alternative};
			}
			&:nth-child(2) {
				fill: ${secondary.alternative};
			}`}
		}
	}

	.line {
		width: 100%;
		height: 2px;
		background: ${({ secondary }) => secondary.alternative};
	}
`;
