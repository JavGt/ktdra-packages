import type { Meta, StoryObj } from '@storybook/react';
import TituloComplementate from './TituloComplementate';

const meta: Meta<typeof TituloComplementate> = {
  title: 'Reader/Titulos/Titulo Complementate',
  component: TituloComplementate,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof TituloComplementate>;

export const Elaboramos: Story = {
  args: {
    title: 'Complementate',
    icon: {
      folder: '',
      name: 'ProyectoIntegrador',
      isDependent: true,
    },
  },
};
