import type { Preview } from '@storybook/react';
import withStates from './withStates';
import { SubsArray } from '@ktdra-digital/utils';

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
		layout: 'fullscreen',
	},
};

export const decorators = [withStates];

export const globalTypes: Preview['globalTypes'] = {
	subsistema: {
		// Mostrar el nombre y la opcion seleccionada en el toolbar
		name: 'Subsistema',
		description: 'Subsistemas escolares',
		type: 'string',
		defaultValue: SubsArray[0],
		toolbar: {
			icon: 'circlehollow',
			dynamicTitle: true,
			items: SubsArray,
		},
	},
	AC: {
		name: 'Area de Conocimiento',
		description: 'Area de Conocimiento',
		type: 'string',
		defaultValue: 'Ciencias sociales',
		toolbar: {
			icon: 'circlehollow',
			dynamicTitle: true,
			items: [
				'Ciencias sociales',
				'Ciencias biológicas y químicas',
				'Humanidades',
				'Ciencias físico-matemáticas',
				'Idiomas Semestre A',
				'Idiomas Semestre B',
			],
		},
	},
};

export default preview;
