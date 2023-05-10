import type { Meta, StoryObj } from '@storybook/react';
import TituloTag from './TituloTag';

const meta: Meta<typeof TituloTag> = {
	title: 'Reader/Titulos/Titulo Tag',
	component: TituloTag,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	args: {
		AC: 'Ciencias sociales',
	},
};

export default meta;

type Story = StoryObj<typeof TituloTag>;

export const CompletoLeft: Story = {
	args: {
		text: 'Avance de Proyecto integrador',
		icon: 'Honestidad',
		position: 'right',
	},
};

export const SinIconoRight: Story = {
	args: {
		text: 'Repaso',
		position: 'right',
	},
};
