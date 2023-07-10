import type { Meta, StoryObj } from '@storybook/react';
import Table from './Table';
import { DataSimple, table } from './data';

const meta: Meta<typeof Table> = {
  title: 'Reader/Tabla',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    table: table,
  },
};

export const Simple: Story = {
  args: {
    table: DataSimple,
    styles: {
      width: 60,
      border: {
        width: 2,
        position: 'right',
        color: 'black',
        type: 'dotted',
      },
      position: 'center',
    },
  },
};
