import React from 'react';
import styled from '@emotion/styled';
import { BoxProps } from '../ListBox';
import { markdownToHtml } from '../../utils';
import { Complementate } from '@ktdra-digital/icons/dist/BT';

const BoxBt: React.FC<BoxProps> = ({ title, text, colorCustom }) => {
	return (
		<ListBoxItem colorCustom={colorCustom}>
			<div className='title'>
				<Complementate />

				{title}
			</div>

			<div
				className='text'
				dangerouslySetInnerHTML={{ __html: markdownToHtml(text) }}
			/>
		</ListBoxItem>
	);
};

export const ListBoxItem = styled.div<Pick<BoxProps, 'colorCustom'>>`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 10px;
	padding: 10px;
	background-color: ${({ colorCustom }) => colorCustom.light};
	border-radius: 10px;
	word-break: break-all;

	@media (hover: hover) {
		&:hover {
			filter: grayscale(0);
			box-shadow: 0px 0px 10px 0px
				${({ colorCustom }) => colorCustom.alternative};
		}
	}

	transition: box-shadow 0.3s ease-in-out, filter 0.3s ease-in-out;
	.title {
		color: ${({ colorCustom }) => colorCustom.main};
		display: flex;
		align-items: center;
		font-size: 20px;
		gap: 5px;
		font-weight: 500;



		svg {
			flex-shrink: 0;
			width: min(40px, 40px);
			fill: ${({ colorCustom }) => colorCustom.alternative};
		}
	}
`;

export default BoxBt;
