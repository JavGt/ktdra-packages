import React from 'react';
import styled from '@emotion/styled';
import { markdownToHtml, stylesContainer, StylesContainerFC } from '../utils';
import { PaletteKeys } from '@ktdra-digital/utils';

export type TituloBordesProps = {
	title: string;
	paletteKey?: PaletteKeys;
};

const TituloBordes: StylesContainerFC<TituloBordesProps> = ({
	colors,
	title,
	paletteKey = 'primary',
}) => {
	return (
		<TituloBordesStyle color={colors[paletteKey].main}>
			<div
				className='title'
				dangerouslySetInnerHTML={{ __html: markdownToHtml(title) }}
			/>
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
		top: -50%;
		transform: translateY(-50%);
		padding: 5px 30px;
		font-size: 24px;
		font-weight: 600;
		background: ${({ color }) => color};
		color: white;
		clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%);
	}
`;

export default stylesContainer(TituloBordes);
