import type { Meta, StoryObj } from '@storybook/react';
import ListaObjetivos from './ListaObjetivos';

const meta: Meta<typeof ListaObjetivos> = {
	title: 'Reader/Listas/ListaObjetivos',
	component: ListaObjetivos,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
};

export default meta;

type Story = StoryObj<typeof ListaObjetivos>;

export const Default: Story = {
	args: {
		list: [
			{
				icon: {
					name: 'Elaboramos',
					folder: '/PLACAS5E',
					isDependent: true,
				},
				text: '21-22',
			},
			{
				icon: {
					name: 'Explicamos',
					folder: '/PLACAS5E',
					isDependent: true,
				},
				title: 'Tiempo',
			},
			{
				icon: {
					name: 'Evaluamos',
					folder: '/PLACAS5E',
					isDependent: true,
				},
				title: 'Desarrollo de clase',
				text: 'El docente podrá iniciar la clase ampliando los ejemplos de una organización, a partir de material audiovisual como los siguientes videos: El docente podrá iniciar la clase ampliando los ejemplos de una organización, a partir de material audiovisual como los siguientes videos:El docente podrá iniciar la clase ampliando los ejemplos de una organización, a partir de material audiovisual como los siguientes videos:	',
			},
		],
	},
};
export const Multiple: Story = {
	args: {
		list: [
			{
				icon: {
					name: 'Paginas',
					folder: '',
					isDependent: true,
				},
				title: 'Páginas',
				text: '21-22',
			},
			{
				icon: {
					name: 'Tiempo',
					folder: '',
					isDependent: true,
				},
				title: 'Tiempo',
				text: '21-22',
			},
			{
				icon: {
					name: 'DesarrolloClase',
					folder: '',
					isDependent: true,
				},
				title: 'Desarrollo de clase',
				text: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.					',
			},
			{
				icon: {
					name: 'Tic',
					folder: '',
					isDependent: true,
				},
				title: 'Desarrollo de clase',
				text: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.					',
			},
			{
				icon: {
					name: 'Paz',
					folder: 'NEM',
				},
				title: 'Desarrollo de clase',
				text: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.					',
			},
			{
				icon: {
					name: 'Paz',
					folder: 'NEM',
				},
				title: 'Desarrollo de clase',
				text: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.					',
			},
			{
				icon: {
					name: 'Paz',
					folder: 'NEM',
				},
				title: 'Desarrollo de clase',
				text: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.					',
			},
			{
				icon: {
					name: 'Paz',
					folder: 'NEM',
				},
				title: 'Desarrollo de clase',
				text: 'Lorem ** Ipsum** es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.					',
			},
			{
				icon: {
					name: 'Paz',
					folder: 'NEM',
				},
				title: 'Desarrollo de clase',
				text: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.					',
			},
		],
	},
};
