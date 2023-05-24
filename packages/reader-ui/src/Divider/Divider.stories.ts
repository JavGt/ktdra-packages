import type { Meta, StoryObj } from '@storybook/react';
import Divider from './Divider';

const meta: Meta<typeof Divider> = {
	title: 'Reader/Divider',
	component: Divider,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const Default: Story = {
	args: {
		AC: 'Ciencias sociales',
	},
};

export const Custom: Story = {
	args: {
		AC: 'Ciencias sociales',
		size: 2,
		type: 'dashed',
	},
};
