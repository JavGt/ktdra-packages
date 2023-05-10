import type { Meta, StoryObj } from '@storybook/react';
import TituloEjemplo from './TituloEjemplo';

const meta: Meta<typeof TituloEjemplo> = {
	title: 'Reader/Titulos/Titulo Ejemplo',
	component: TituloEjemplo,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
};

export default meta;

type Story = StoryObj<typeof TituloEjemplo>;

export const UnIcono: Story = {
	args: {
		AC: 'Ciencias sociales',
		iconParticipantes: 'Individual',
		text: 'Actividad 1',
	},
};

export const DosIconos: Story = {
	args: {
		AC: 'Ciencias sociales',
		icon1: 'Tic',
		iconParticipantes: 'Individual',
		text: 'Actividad 1',
	},
};

export const TresIconos: Story = {
	args: {
		AC: 'Ciencias sociales',
		icon1: 'Tic',
		icon2: 'Transversal',
		iconParticipantes: 'Individual',
		text: 'Actividad 1',
	},
};
