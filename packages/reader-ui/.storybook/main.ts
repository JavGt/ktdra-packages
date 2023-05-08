import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';

const config: StorybookConfig = {
	stories: ['../lib/**/*.stories.mdx', '../lib/**/*.stories.{js,jsx,ts,tsx}'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
	],
	framework: {
		name: '@storybook/react-webpack5',
		options: {},
	},
	docs: {
		autodocs: 'tag',
	},
	webpackFinal: async config => {
		return {
			...config,
			resolve: {
				...config.resolve,
				alias: {
					...config?.resolve?.alias,
					'@ktdra/icons': path.resolve(__dirname, '../../icons/build'),
					'@ktdra/utils': path.resolve(__dirname, '../../utils/lib'),
				},
			},
		};
	},
};

export default config;
