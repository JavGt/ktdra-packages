/**
 * @type {import('@svgr/babel-plugin-transform-svg-component').Template}
 * @see https://react-svgr.com/docs/custom-templates/
 */
const template = (variables, context) => {
	const alert = `
	/** -------------- PRECAUCIÓN --------------------------------
     * | 	El componente "${variables.componentName.replace('Svg', '')}"
     * |	 tiene derecho de autor y es propiedad de ktdra
     * | 	queda prohibido su uso comercial sin autorización 
	 * ----------------------------------------------------------
     */
	`;
	return context.tpl`
		${alert}

		${variables.imports}
		const ${variables.componentName} = (props: SVGProps<SVGSVGElement>) => {
			return ${variables.jsx};
		};
		export default ${variables.componentName};
	`;
};

const config = {
	typescript: true,
	svgo: true,
	template,
	outDir: 'dist',
	silent: true,
	prettier: true,
	jsx: {
		babelConfig: {
			minified: true,
			compact: true,
		},
	},
};

module.exports = config;
