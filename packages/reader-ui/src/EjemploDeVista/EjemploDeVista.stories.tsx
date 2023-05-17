import React from 'react';
import type { Meta, StoryObj, ArgTypes } from '@storybook/react';
import EjemploDeVista, { EjemploDeVistaProps } from './EjemploDeVista';

const meta: Meta<typeof EjemploDeVista> = {
	title: 'Ejemplos/Ejemplo De Vista',
	component: EjemploDeVista,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},

	argTypes: {},
};

export default meta;

type Story = StoryObj<typeof EjemploDeVista>;

export const Text: Story = {
	args: {
		AC: 'Ciencias biológicas y químicas',
	},
};
