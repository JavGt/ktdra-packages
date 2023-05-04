import type { Meta, StoryObj } from '@storybook/react';
import Texto from './Texto';

const meta: Meta<typeof Texto> = {
	title: 'Reader/Texto',
	component: Texto,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Texto>;

export const Text: Story = {
	args: {
		texto: 'Hola mundo',
	},
};
