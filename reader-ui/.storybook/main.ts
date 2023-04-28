import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';
import type { Configuration } from 'webpack';

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
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
					'@': path.resolve(__dirname, '../src/'),
				},
			},
		} as Configuration;
	},
};
export default config;
