import type { Meta, StoryObj } from '@storybook/react';
import TituloObjetivo from './TituloObjetivo';

const meta: Meta<typeof TituloObjetivo> = {
	title: 'Reader/Titulos/Titulo Objetivo',
	component: TituloObjetivo,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	args: {
	},
};

export default meta;

type Story = StoryObj<typeof TituloObjetivo>;

export const CompletoLeft: Story = {
	args: {
		title: 'Título de la unidad',
	},
};

export const SinIconoRight: Story = {
	args: {
		title: 'Título ejemplo',
	},
};
