import type { Meta, StoryObj } from '@storybook/react';
import TextEditor from './TextEditor';

const meta: Meta<typeof TextEditor> = {
	title: 'Reader/Controles/Editor de texto',
	component: TextEditor,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
};

export default meta;

type Story = StoryObj<typeof TextEditor>;

export const Elaboramos: Story = {
	args: {},
};
