import type { Meta, StoryObj } from '@storybook/react';
import Placas5E from './Placas5E';

const meta: Meta<typeof Placas5E> = {
	title: 'Reader/Placas 5E',
	component: Placas5E,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
};

export default meta;

type Story = StoryObj<typeof Placas5E>;

export const Elaboramos: Story = {
	args: {
		variant: 'elaboramos',
		AC: 'Ciencias sociales',
	},
};

export const Enganchamos: Story = {
	args: {
		variant: 'enganchamos',
		AC: 'Ciencias sociales',
	},
};

export const Evaluamos: Story = {
	args: {
		variant: 'evaluamos',
		AC: 'Ciencias sociales',
	},
};

export const Explicamos: Story = {
	args: {
		variant: 'explicamos',
		AC: 'Ciencias sociales',
	},
};

export const Exploramos: Story = {
	args: {
		variant: 'exploramos',
		AC: 'Ciencias sociales',
	},
};
