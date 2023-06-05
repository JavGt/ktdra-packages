import React from 'react';
import styled from 'styled-components';
import { StylesContainerFC, markdownToHtml, stylesContainer } from '../utils';
import { Icon, useIcon } from '@ktdra-digital/icons';

export type ListaObjetivosProps = {
	list: {
		icon: Icon;
		title: string;
		text: string;
	}[];
};

const ListaObjetivos: StylesContainerFC<ListaObjetivosProps> = ({ list,subsistema }) => {
	return (
		<>
			{list.map(({ icon, title, text }) => {
				const Icon = icon && useIcon(icon,subsistema);

				return (
					<Item>
						{Icon && <Icon />}

						<div>
							<h3>{title}</h3>

							<p
								dangerouslySetInnerHTML={{
									__html: markdownToHtml(text),
								}}
							/>
						</div>
					</Item>
				);
			})}
		</>
	);
};

export const Item = styled.div`
	display: flex;
	gap: 20px;
	margin-bottom: 15px;
	align-items: flex-start;

	&:last-child {
		margin-bottom: 0;
	}

	h3 {
		margin: 0;
	}
	p {
		margin: 0;
		max-width: 100%;
	}

	svg {
		width: 50px;
		height: 50px;
		min-width: 50px;
		min-height: 50px;
		position: sticky;
		top: 0;
		display: block;
	}
`;

export default stylesContainer(ListaObjetivos);
