import type { Meta, StoryObj } from '@storybook/react';
import Iframe from './Iframe';

const meta: Meta<typeof Iframe> = {
  title: 'Reader/Recursos/Iframe',
  component: Iframe,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Iframe>;

export const Default: Story = {
  args: {
    url: 'https://prezi.com/view/oEDyC4Xt16j0SLNl3muQ/',
  },
};
