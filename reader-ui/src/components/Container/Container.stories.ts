import type { Meta, StoryObj } from '@storybook/react';
import Container from './Container';

const meta: Meta<typeof Container> = {
	title: 'Reader/Container',
	component: Container,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
};

export default meta;

type Story = StoryObj<typeof Container>;

export const UnIcono: Story = {
	args: {
		componente: 'Placas5E',
		arg: {
			AC: 'Ciencias sociales',
		},
	},
};
