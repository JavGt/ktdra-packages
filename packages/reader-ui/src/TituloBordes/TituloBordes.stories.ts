import type { Meta, StoryObj } from '@storybook/react';
import TituloBordes from './TituloBordes';

const meta: Meta<typeof TituloBordes> = {
	title: 'Reader/Titulos/Titulo Bordes',
	component: TituloBordes,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
};

export default meta;

type Story = StoryObj<typeof TituloBordes>;

export const UnIcono: Story = {
	args: {
		AC: 'Ciencias sociales',
		text: 'Ladillos',
	},
};
