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
		texto: 'Texto',

		item: {
			color: '#fff',
			padding: {
				x: '10px',
				y: '3px',
			},
			margin: {
				x: '10px',
				y: '30px',
			},
			border: {
				position: 'bottom',
				color: '#fff',
				width: '1px',
				type: 'solid',
			},
		},
		background: {
			backgroundColor: '#3f51b5',
			margin: {
				x: '10px',
				y: '3px',
			},
			borderRadius: {
				bottomLeft: '10px',
				bottomRight: '10px',
				topLeft: '10px',
				topRight: '10px',
			},
			border: {
				color: 'green',
				width: '5px',
				type: 'solid',
			},
		},
	},
};
