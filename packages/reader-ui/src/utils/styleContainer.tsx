import React from 'react';
import WrapperStyle, { type Styles } from '../WrapperStyle/WrapperStyle';
import {
	AC,
	ACPalette,
	Color,
	PaletteKeys,
	useGetColorsAC,
} from '@ktdra-digital/utils';

export type OptionsStyles = Partial<{
	colorType: 'ACPalette' | 'Color';
}>;

export type Subsistema = 'BT' | 'DGB';

export type InjectedProps = {
	colorAC: Color;
	ACPalette: ACPalette;
	AC: AC;
	subsistema: Subsistema;
};

export type PropsHOC<PropsComponent = {}> = PropsComponent &
	Styles & {
		AC: AC;
		subsistema: Subsistema;
		paletteKey?: PaletteKeys;
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
	const { colorType } = options || {};

	const ComponentHOC: React.FC<PropsHOC<PropsComponent>> = ({
		background,
		item,
		AC,
		paletteKey,
		...rest
	}) => {
		const colors = useGetColorsAC(
			AC,
			colorType !== 'ACPalette' ? paletteKey ?? 'primary' : undefined
		);

		const injectProps = {
			colorAC: colorType === 'Color' || !colorType ? colors : undefined,
			ACPalette: colorType === 'ACPalette' ? colors : undefined,
		} as InjectedProps;

		return (
			<WrapperStyle background={background} item={item}>
				<Component {...injectProps} {...(rest as PropsComponent)} />
			</WrapperStyle>
		);
	};

	ComponentHOC.displayName = 'stylesContainer';

	return ComponentHOC;
};
