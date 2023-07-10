import type { Meta, StoryObj } from '@storybook/react';
import Image from './Image';

const meta: Meta<typeof Image> = {
  title: 'Reader/Recursos/Imagen',
  component: Image,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Image>;

export const Default: Story = {
  name: 'Default',
  parameters: {},
  args: {
    figcaption: 'Figura 1.1',
    url: 'https://images.unsplash.com/photo-1542438408-abb260104ef3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
  },
};

export const Estilo: Story = {
  name: 'Estilo',
  args: {
    width: 40,
    height: 40,
    figcaption: '**Figura 1.1**: asdasdasd **asdasd**',
    url: 'https://mvpstorage.nyc3.digitaloceanspaces.com/K-TDRA/img/63d43fecb0b3e876e4f73d71.png',
    styles: {
      padding: {
        top: 10,
        bottom: 10,
        left: 10,
        right: 10,
      },
      backgroundColor: '#f5f5f5',
      width: 80,
      position: 'center',
    },
  },
};
