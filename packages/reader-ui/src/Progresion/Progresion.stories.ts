import type { Meta, StoryObj } from '@storybook/react';
import Progresion from './Progresion';

const meta: Meta<typeof Progresion> = {
	title: 'Reader/Progresion',
	component: Progresion,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
};

export default meta;

type Story = StoryObj<typeof Progresion>;

export const Elaboramos: Story = {
	args: {
		variant: 'elaboramos',
		AC: 'Ciencias sociales',
	},
};
