import React from 'react';
import { type Styles, WrapperStyle } from '../WrapperStyle';
import { AC, Palette, useColorsAC } from '@ktdra-digital/utils';

export type FormValues<T> = T & Styles;

export type Subsistema = 'BT' | 'DGB';

export type InjectedProps = {
	colors: Palette;
	AC: AC;
	subsistema: Subsistema;
};

export type PropsHOC<PropsComponent = {}> = PropsComponent & {
	AC: AC;
	subsistema: Subsistema;
	styles?: Styles;
};

/**
 * @description
 * Este tipo se usa en los componentes que se crean con el HOC stylesContainer
 * El tipo funciona para agregar el tipo de las props inyectadas por el HOC
 * @example
 */
export type StylesContainerFC<PropsComponent = {}> = React.FC<
	PropsComponent & InjectedProps
>;

/**
 *
 * @param Component - React.ComponentType<PropsComponent>
 * @param options  - Opciones para el HOC
 * @returns
 * @description
 * Este HOC se usa para agregar estilos a los componentes que se crean con el
 * @example
 * export default stylesContainer(Component, {colorSelector: 'primary'})
 */
export const stylesContainer = <PropsComponent = {},>(
	Component: React.ComponentType<PropsComponent & InjectedProps>
) => {
	const ComponentHOC: React.FC<PropsHOC<PropsComponent>> = ({
		styles,
		...rest
	}) => {
		const colors = useColorsAC({ area: rest.AC, subsistema: rest.subsistema });

		const injectProps = {
			colors,
			AC: rest.AC,
			subsistema: rest.subsistema,
		} as InjectedProps;

		return (
			<WrapperStyle styles={styles}>
				<Component {...injectProps} {...(rest as PropsComponent)} />
			</WrapperStyle>
		);
	};

	ComponentHOC.displayName = 'stylesContainer';

	return ComponentHOC;
};
