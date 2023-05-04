import type { Meta, StoryObj } from '@storybook/react';
import Espacio from './Espacio';

const meta: Meta<typeof Espacio> = {
	title: 'Reader/Espacio',
	component: Espacio,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		espacio: {
			control: {
				type: 'range',
				min: 0,
				max: 100,
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof Espacio>;

export const Elaboramos: Story = {
	args: {
		espacio: 10,
	},
};
