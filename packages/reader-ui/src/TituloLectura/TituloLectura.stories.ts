import type { Meta, StoryObj } from '@storybook/react';
import TituloLectura from './TituloLectura';

const meta: Meta<typeof TituloLectura> = {
	title: 'Reader/Titulos/Titulo Lectura',
	component: TituloLectura,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	argTypes: {},
};

export default meta;

type Story = StoryObj<typeof TituloLectura>;

export const Text: Story = {
	args: {},
};
