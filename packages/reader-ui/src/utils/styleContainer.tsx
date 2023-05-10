import React from 'react';
import WrapperStyle, { type Styles } from '../WrapperStyle/WrapperStyle';
import { AC, ACPalette, Color, PaletteKeys, useGetColorsAC } from '@ktdra/utils';

export type OptionsStyles = Partial<{
	colorSelector: PaletteKeys;
}>;

export type InjectedProps = {
	colorAC: Color | ACPalette;
	AC: AC;
};

export type PropsHOC<PropsComponent = {}> = PropsComponent &
	Styles & {
		AC: AC;
	};

/**
 * @description
 * Este tipo se usa en los componentes que se crean con el HOC stylesContainer
 * El tipo funciona para agregar el tipo de las props inyectadas por el HOC
 * @example
 * const Component: ComponentStyled<PropsComponent> = ({...}) => {...}
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
	Component: React.ComponentType<PropsComponent & InjectedProps>,
	options?: OptionsStyles
) => {
	const { colorSelector } = options || {};

	return ({ background, item, ...rest }: PropsHOC<PropsComponent>): JSX.Element => {
		const colors = useGetColorsAC('Ciencias biológicas y químicas', colorSelector);

		const injectProps = {
			colorAC: colors,
		} as InjectedProps;

		return (
			<WrapperStyle background={background} item={item}>
				<Component {...injectProps} {...(rest as PropsComponent)} />
			</WrapperStyle>
		);
	};
};
