/**
 * @type {import('@svgr/babel-plugin-transform-svg-component').Template}
 * @see https://react-svgr.com/docs/custom-templates/
 */
const template = (variables, context) => {
  const nameComponent = variables.componentName.replace('Svg', '');
  const alert = `
	/** -------------- PRECAUCIÓN --------------------------------
     *  	El componente "${variables.componentName.replace('Svg', '')}"
     * tiene derecho de autor y es propiedad de ktdra
     * queda prohibido su uso comercial sin autorización 
	 * ----------------------------------------------------------
     */
	`;

  return context.tpl`
		${alert}

		${variables.imports}
		const ${nameComponent} = (props: SVGProps<SVGSVGElement>) => {
			return ${variables.jsx};
		};
		export default ${nameComponent};
	`;
};

module.exports = template;
