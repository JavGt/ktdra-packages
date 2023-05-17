import type { Meta, StoryObj } from '@storybook/react';
import ContainerShadow from './ContainerShadow';

const meta: Meta<typeof ContainerShadow> = {
	title: 'Reader/Containers/Container Shadow',
	component: ContainerShadow,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
};

export default meta;

type Story = StoryObj<typeof ContainerShadow>;

export const ContainerCBQ: Story = {
	args: {
		AC: 'Ciencias biológicas y químicas',
		children: `- ¿Cómo les beneficia trabajar en equipo para llegar a un común acuerdo? \n - ¿De qué manera podrían administrar su dinero para no rebasar su presupuesto?  \n- ¿Por qué es importante tomar en cuenta las características físicas al momento de comprar un artículo electrónico? \n- ¿Cuál es el principio físico que rige el funcionamiento de los  micrófonos y audífonos?`,
	},
};

export const ConEstilo: Story = {
	args: {
		background: {
			backgroundColor: '#F2F2F2',
			padding: '50px',
			margin: '20px',
			borderRadius: '10px',
			border: {
				width: '1px',
				color: '#000000',
				type: 'solid',
			},
		},
		item: {
			width: '50%',
			position: 'center',
		},
		AC: 'Humanidades',
		children: `- ¿Cómo les beneficia **trabajar** en equipo para llegar a un común acuerdo? \n - ¿De qué manera podrían administrar su dinero para no rebasar su presupuesto?  \n- ¿Por qué es importante tomar en cuenta las características físicas al momento de comprar un artículo electrónico? \n- ¿Cuál es el principio físico que rige el funcionamiento de los  micrófonos y audífonos?`,
	},
};
