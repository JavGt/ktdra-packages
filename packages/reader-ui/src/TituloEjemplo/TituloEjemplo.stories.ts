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

export const SinIconos: Story = {
  args: {
    iconParticipantes: {
      folder: '/PARTICIPANTES',
      name: 'Individual',
      isDependent: true,
    },
    title: 'Actividad 1',
  },
};

export const UnIcono: Story = {
  args: {
    icon: {
      folder: '',
      name: 'Tic',
      isDependent: true,
    },
    iconParticipantes: {
      folder: '/PARTICIPANTES',
      name: 'Parejas',
      isDependent: true,
    },
    title: 'Actividad 1',
  },
};

export const DosIconos: Story = {
  args: {
    icon: {
      folder: 'BT',
      name: 'Tic',
    },
    iconSecondary: {
      folder: 'BT',
      name: 'Transversal',
    },
    iconParticipantes: {
      folder: '/PARTICIPANTES',
      name: 'Individual',
      isDependent: true,
    },
    title: 'Actividad 1',
  },
};
