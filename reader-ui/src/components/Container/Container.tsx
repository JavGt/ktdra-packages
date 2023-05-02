import React from 'react';
import Placas5E, { Placas5EProps } from '../Placas5E/Placas5E';
import Ejemplo, { EjemploProps } from '../Ejemplo/Ejemplo';
import { Box } from '@mui/material';

/**
 * TODO: Crear un tipo que sea dinámico
 * las props `args` deben tener unicamente el tipo del componente que haya sido seleccionado en `componente`
 * @example
 * {
 * 	componente: 'Placas5E',
 * 	args: {
 * 		// props de Placas5E
 * 	}
 * }
 *
 * @example
 * {
 * 	componente: 'Ejemplo',
 * 	args: {
 * 		// props de Ejemplo
 * 		// NOTA: no debe tener props de Placas5E
 * 	}
 */
export type Compo = 'Placas5E' | 'Ejemplo';

const componentes = { Placas5E, Ejemplo };

type ContainerProps = <T extends Compo>(props: {
	componente: T;
	args: T extends 'Placas5E' ? Placas5EProps : EjemploProps;
}) => JSX.Element;

const Container: ContainerProps = ({ componente, args }) => {
	const Componente = componentes[componente] as React.ElementType;

	return (
		<Box sx={{ padding: 10, background: '#999' }}>
			<Componente {...args} />
		</Box>
	);
};

export default Container;




const example = 