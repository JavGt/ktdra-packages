import type { Meta, StoryObj } from '@storybook/react';
import TituloParcial from './TituloParcial';

const meta: Meta<typeof TituloParcial> = {
  title: 'Reader/Titulos/Titulo Parcial',
  component: TituloParcial,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;

type Story = StoryObj<typeof TituloParcial>;

export const CompletoLeft: Story = {
  args: {
    title: 'PROGRESIÓN 2',
    companion: 'HUMANIDADES I',
    styles: {
      backgroundColor: '#f4e8f3',
      padding: {
        left: 15,
        right: 15,
      },
    },
  },
};

export const SinIconoRight: Story = {
  args: {
    title: 'Título ejemplo',
    companion: 'Primer Parcial',
  },
};
