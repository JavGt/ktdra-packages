import type { Meta, StoryObj } from '@storybook/react';
import GraficaMotivacional from './GraficaMotivacional';

const meta: Meta<typeof GraficaMotivacional> = {
  title: 'Reader/Graficas/Motivacional',
  component: GraficaMotivacional,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof GraficaMotivacional>;

export const Default: Story = {
  args: {
    title: '¿Qué tan motivado te sientes para comenzar?',
    styles: {},
  },
};
