import React from 'react';
import Placas5E, { Placas5EProps } from '../Placas5E/Placas5E';
import Ejemplo, { EjemploProps } from '../Ejemplo/Ejemplo';
import { Box } from '@mui/material';

export type ComponentsTypes = {
	Placas5E: Placas5EProps;
	Ejemplo: EjemploProps;
};

export type Components = keyof typeof components;

const components = {
	Placas5E,
	Ejemplo,
};

type ContainerProps<T> = {
	component: T;
	args: ComponentsTypes[T extends Components ? T : never];
};

const Container: React.FC<ContainerProps<Components>> = ({ component, args }) => {
	const Componente = components[component] as React.FC<ComponentsTypes[Components]>;

	if (component) {
		return (
			<Box sx={{ padding: 10, background: '#999' }}>
				<Componente {...args} />
			</Box>
		);
	}

	return null;
};

export default Container;
