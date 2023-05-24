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
		AC: 'Ciencias sociales',
	},
};

export default meta;

type Story = StoryObj<typeof TituloParcial>;

export const CompletoLeft: Story = {
	args: {
		AC: 'Ciencias sociales',
		title: 'Título de la unidad',
		suffix: 'Unidad 1',
	},
};

export const SinIconoRight: Story = {
	args: {
		AC: 'Ciencias biológicas y químicas',
		title: 'Título ejemplo',
		suffix: 'Primer Parcial',
	},
};
