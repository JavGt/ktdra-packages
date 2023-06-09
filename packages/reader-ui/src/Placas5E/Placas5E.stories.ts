import type { Meta, StoryObj } from '@storybook/react';
import Placas5E from './Placas5E';

const meta: Meta<typeof Placas5E> = {
	title: 'Reader/Titulos/Placas 5E',
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
		item:{
			width: 30,
		}
	},
};

export const Enganchamos: Story = {
	args: {
		variant: 'enganchamos',
	},
};

export const Evaluamos: Story = {
	args: {
		variant: 'evaluamos',
		idioma:"en"
	},
};

export const Explicamos: Story = {
	args: {
		variant: 'explicamos',
	},
};

export const Exploramos: Story = {
	args: {
		variant: 'exploramos',
	},
};
