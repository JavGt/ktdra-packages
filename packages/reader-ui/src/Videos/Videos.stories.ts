import type { Meta, StoryObj } from '@storybook/react';
import Videos from './Videos';

const meta: Meta<typeof Videos> = {
	title: 'Reader/Recursos/Videos',
	component: Videos,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
};

export default meta;

type Story = StoryObj<typeof Videos>;

export const Youtube: Story = {
	args: {
		AC: 'Ciencias sociales',
		url: 'https://www.youtube.com/embed/xOz2AQfhUWA',
	},
};
