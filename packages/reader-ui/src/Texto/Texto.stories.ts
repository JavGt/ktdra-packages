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

export const TextoDefault: Story = {
	args: {
		text: '<h2 align="center">El primer músculo creado en el laboratorio es asombrosamente contráctil y flexible</h2>\n <p>Investigadores de la universidad de Duke en Estados Unidos publicaron en la revista e-Life, sobre  el desarrollo y la especialización de células madre que poco a poco consiguen transformarse en  células musculares. Antes de llegar a este tipo celular, los investigadores obtuvieron los llamados  precursores miogénicos, algo más diferenciados que las células madre, aunque no tanto como para  ser similar a las células que encontramos en nuestros músculos. Como vemos, el primer músculo artificial no es sólo increíblemente asombroso. También permite avanzar un poco más en el estudio de una enfermedad realmente grave. Tal vez estas primeras  contracciones sean sólo un síntoma, y el movimiento muscular refleje que también caminamos  hacia la cura de la distrofia de Duchenne</p>',

	},
};

export const TextoConEstilo: Story = {
	args: {
		text: '<h2 align="center">El primer músculo creado en el laboratorio es asombrosamente contráctil y flexible</h2>\n <p>Investigadores de la universidad de Duke en Estados Unidos publicaron en la revista e-Life, sobre  el desarrollo y la especialización de células madre que poco a poco consiguen transformarse en  células musculares. Antes de llegar a este tipo celular, los investigadores obtuvieron los llamados  precursores miogénicos, algo más diferenciados que las células madre, aunque no tanto como para  ser similar a las células que encontramos en nuestros músculos. Como vemos, el primer músculo artificial no es sólo increíblemente asombroso. También permite avanzar un poco más en el estudio de una enfermedad realmente grave. Tal vez estas primeras  contracciones sean sólo un síntoma, y el movimiento muscular refleje que también caminamos  hacia la cura de la distrofia de Duchenne</p>',

		styles: {
			padding: 20,
			backgroundColor: '#F2F2F2',
			margin: 20,
		},
	},
};
