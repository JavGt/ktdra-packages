import type { Meta, StoryObj } from '@storybook/react';
import Ejemplo from './Ejemplo';

const meta: Meta<typeof Ejemplo> = {
	title: 'Reader/Containers/Ejemplo',
	component: Ejemplo,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Ejemplo>;

export const Default: Story = {
	args: {
		isLabel: true,
		footer:
			'LosAcertijos.org. (s.f.). *Acertijos cortos*. La Jornada. Recuperado de: http://losacertijos.org/content/cual-es-la-palabr',
		text: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.',
	},
};

export const ConEstilo: Story = {
	args: {
		styles: {
			backgroundColor: '#F2F2F2',
			padding: 2,
			margin: 20,
			borderRadius: '10px',
			border: {
				width: '1px',
				color: '#000000',
				type: 'solid',
			},
			width: 50,
			position: 'center',
		},
		isLabel: true,
		footer:
			'LosAcertijos.org. (s.f.). *Acertijos cortos*. La Jornada. Recuperado de: http://losacertijos.org/content/cual-es-la-palabr',
		text: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.',
	},
};
