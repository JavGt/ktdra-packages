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
	},
};

export default meta;

type Story = StoryObj<typeof TituloTag>;

export const CompletoLeft: Story = {
	args: {
		title: 'Avance de Proyecto integrador',
		icon: {
			folder: '',
			name: 'Tic',
			isDependent: true,
		},
		position: 'right',
	},
};

export const SinIconoRight: Story = {
	args: {
		title: 'Repaso',
		position: 'right',
	},
};
