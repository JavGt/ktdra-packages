import type { Meta, StoryObj } from '@storybook/react';
import TituloParcial from './TituloParcial';

const meta: Meta<typeof TituloParcial> = {
	title: 'Reader/Titulos/Titulo Parcial',
	component: TituloParcial,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	args: {
	},
};

export default meta;

type Story = StoryObj<typeof TituloParcial>;

export const CompletoLeft: Story = {
	args: {
		title: 'Título de la unidad',
		companion: 'Unidad 1',
	},
};

export const SinIconoRight: Story = {
	args: {
		title: 'Título ejemplo',
		companion: 'Primer Parcial',
	},
};
