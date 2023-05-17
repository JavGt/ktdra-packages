import type { Meta, StoryObj } from '@storybook/react';
import EjemploLectura from './EjemploLectura';

const meta: Meta<typeof EjemploLectura> = {
	title: 'Ejemplos/Ejemplo Lectura',
	component: EjemploLectura,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	argTypes: {
		width: {
			control: {
				type: 'range',
				min: 0,
				max: 100,
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof EjemploLectura>;

export const Elaboramos: Story = {
	args: {
		AC: 'Ciencias sociales',
	},
};
