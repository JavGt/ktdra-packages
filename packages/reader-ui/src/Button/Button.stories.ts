import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
	title: 'Reader/Button',
	component: Button,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
	args: {
		icon: {
			name: 'Tiempo',
			folder: '',
			isDependent: true,
		},
		text: 'Descargar',
		url: 'file:///C:/Users/javie/OneDrive/Desktop/Bachillerato_estilosA2023.pdf',
	},
};
