import React, { Fragment, memo } from 'react';
import styled from '@emotion/styled';
import { StylesContainerFC, markdownToHtml, stylesContainer } from '../utils';
import { Icon, useIcon } from '@ktdra-digital/icons';
import { Subs } from '@ktdra-digital/utils';

export type ListaObjetivosProps = {
	list: {
		icon: Icon;
		title?: string;
		text?: string;
	}[];
};

const ListaObjetivos: StylesContainerFC<ListaObjetivosProps> = ({
	list,
	subsistema,
}) => {
	return (
		<Fragment>
			{list.map((item, idx) => (
				<ObjetivoItem item={item} subsistema={subsistema} key={idx} />
			))}
		</Fragment>
	);
};

export type ObjetivoItemProps = {
	item: ListaObjetivosProps['list'][0];
	subsistema: Subs;
};
const ObjetivoItem: React.FC<ObjetivoItemProps> = memo(
	({ item, subsistema }) => {
		const { icon, title, text } = item;

		const Icon = useIcon(icon, subsistema);

		return (
			<Item>
				{Icon && <Icon />}

				<div className='item-text'>
					<h3>{title}</h3>

					{text && (
						<div
							dangerouslySetInnerHTML={{
								__html: markdownToHtml(text),
							}}
						/>
					)}
				</div>
			</Item>
		);
	}
);

export const Item = styled.div`
	display: flex;
	gap: 20px;
	margin-bottom: 15px;
	align-items: center;

	&:last-child {
		margin-bottom: 0;
	}

	.item-text {
		display: flex;
		flex-direction: column;
		height: 100%;
		justify-content: center;

		h3 {
			margin: 0;
		}

		p {
			margin: 0;
			max-width: 100%;
		}
	}

	svg {
		width: 50px;
		height: 50px;
		min-width: 50px;
		min-height: 50px;
		position: sticky;
		top: 0;
		display: block;
		margin-bottom: auto;
	}
`;

export default stylesContainer(ListaObjetivos);
