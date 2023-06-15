import type { Meta, StoryObj } from '@storybook/react';
import ListBox from './ListBox';

const meta: Meta<typeof ListBox> = {
	title: 'Reader/Listas/Lista de cajas',
	component: ListBox,
	tags: ['autodocs'],
	parameters: { layout: 'fullscreen' },
	argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ListBox>;

export const Default: Story = {
	args: {
		list: [
			{
				title: 'Categoría 1',
				text: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
				paletteKey: 'primary',
				col: 4,
				row: {
					start: 1,
					end: 2,
				},
			},
			{
				title: 'Categoría 2',
				text: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
				paletteKey: 'primary',
				col: 4,
				row: {
					start: 2,
					end: 3,
				},
			},
			{
				title: 'Meta de aprendizaje 1',
				text: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.',
				paletteKey: 'secondary',
				col: 6,
				row: 2,
			},
			{
				title: 'Meta de aprendizaje 1',
				text: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.',
				paletteKey: 'secondary',
			},
		],
	},
};
