import type { Meta, StoryObj } from '@storybook/react';
import Lectura from './Lectura';

const meta: Meta<typeof Lectura> = {
	title: 'Reader/Lectura',
	component: Lectura,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
};

export default meta;

type Story = StoryObj<typeof Lectura>;

export const Elaboramos: Story = {
	args: {
		variant: 'elaboramos',
		AC: 'Ciencias sociales',
	},
};
