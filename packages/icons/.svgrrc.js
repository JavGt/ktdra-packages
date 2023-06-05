const template = require('./template');

/**
 * @type {import('@svgr/core').Config}
 */
const config = {
	typescript: true,
	svgo: true,
	template,
	prettier: true,
	jsx: {
		babelConfig: {},
	},
};

module.exports = config;
