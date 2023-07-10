import type { Meta, StoryObj } from '@storybook/react';
import ContainerShadow from './ContainerShadow';

const meta: Meta<typeof ContainerShadow> = {
  title: 'Reader/Containers/Contenedor con sombra',
  component: ContainerShadow,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof ContainerShadow>;

export const Default: Story = {
  args: {
    text: `- ¿Cómo les beneficia trabajar en equipo para llegar a un común acuerdo? \n - ¿De qué manera podrían administrar su dinero para no rebasar su presupuesto?  \n- ¿Por qué es importante tomar en cuenta las características físicas al momento de comprar un artículo electrónico? \n- ¿Cuál es el principio físico que rige el funcionamiento de los  micrófonos y audífonos?`,
  },
};

export const ConEstilo: Story = {
  args: {
    styles: {
      backgroundColor: '#F2F2F2',
      padding: {
        top: 20,
        bottom: 20,
        left: 20,
        right: 20,
      },
      margin: {
        top: 20,
        bottom: 20,
        left: 20,
        right: 20,
      },
      borderRadius: {
        topLeft: 10,
        topRight: 10,
        bottomLeft: 10,
        bottomRight: 10,
      },
      border: {
        width: 1,
        color: '#000000',
        type: 'solid',
      },

      width: 100,
      position: 'center',
    },
    text: `- ¿Cómo les beneficia **trabajar** en equipo para llegar a un común acuerdo? \n - ¿De qué manera podrían administrar su dinero para no rebasar su presupuesto?  \n- ¿Por qué es importante tomar en cuenta las características físicas al momento de comprar un artículo electrónico? \n- ¿Cuál es el principio físico que rige el funcionamiento de los  micrófonos y audífonos?`,
  },
};
