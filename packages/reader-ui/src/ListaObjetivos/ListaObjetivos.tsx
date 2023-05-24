import React from 'react';
import styled from 'styled-components';
import { StylesContainerFC, stylesContainer } from '../utils';
import { BT } from '@ktdra-digital/icons/dist/BT/utils/types';

export type ListaObjetivosProps = {
	list: {
		icon: BT;
		title: string;
		description: string;
	}[];
};

const ListaObjetivos: StylesContainerFC<ListaObjetivosProps> = ({ list }) => {
	return (
		<ListaObjetivosStyle>
			{list.map(({ icon, title, description }) => {
				const Icon = icon && require('@ktdra-digital/icons/dist/BT')[icon];

				return (
					<li className='item'>
						{icon && <Icon />}
						<div>
							<h3>{title}:</h3>
							<p>{description}</p>
						</div>
					</li>
				);
			})}
		</ListaObjetivosStyle>
	);
};

export const ListaObjetivosStyle = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	padding: 0;
	margin: 0;
	gap: 15px;

	.item {
		list-style: none;
		display: flex;
		gap: 10px;
		align-items: flex-start;

		h3 {
			margin: 0;
		}
		p {
			margin: 0;
		}

		svg {
			width: 50px;
		}
	}
`;

export default stylesContainer(ListaObjetivos);
