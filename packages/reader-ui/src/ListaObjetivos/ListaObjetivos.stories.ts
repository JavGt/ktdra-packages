import type { Meta, StoryObj } from '@storybook/react';
import ListaObjetivos from './ListaObjetivos';

const meta: Meta<typeof ListaObjetivos> = {
	title: 'Reader/Listas/ListaObjetivos',
	component: ListaObjetivos,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	args: {
		AC: 'Ciencias sociales',
	},
};

export default meta;

type Story = StoryObj<typeof ListaObjetivos>;

export const CompletoLeft: Story = {
	args: {
		AC: 'Ciencias biológicas y químicas',
		list: [
			{
				icon: 'Paginas',
				title: 'Páginas',
				description: '21-22',
			},
			{
				icon: 'Tiempo',
				title: 'Tiempo',
				description: '21-22',
			},
			{
				icon: 'DesarrolloClase',
				title: 'Desarrollo de clase',
				description:
					'El docente podrá iniciar la clase ampliando los ejemplos de una organización, a partir de material audiovisual como los siguientes videos:',
			},
		],
	},
};
