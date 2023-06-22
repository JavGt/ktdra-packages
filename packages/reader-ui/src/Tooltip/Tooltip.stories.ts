import type { Meta, StoryObj } from '@storybook/react';
import Tooltip from './Tooltip';

const meta: Meta<typeof Tooltip> = {
	title: 'Reader/Tooltip',
	component: Tooltip,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
	args: {
		title: 'Tooltip',
	},
};
