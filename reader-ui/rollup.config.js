import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import { babel } from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import glob from 'glob';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import autoprefixer from 'autoprefixer';

export default [
	{
		input: Object.fromEntries(
			glob
				.sync('src/**/!(*.stories).{ts,tsx}')
				.map(file => [
					path.relative('src', file.slice(0, file.length - path.extname(file).length)),
					fileURLToPath(new URL(file, import.meta.url)),
				])
		),
		// input: 'src/index.ts',
		output: {
			dir: 'dist',
			format: 'esm',
			plugins: [terser()],
		},
		plugins: [
			typescript({
				tsconfig: './tsconfig.json',
				exclude: ['**/*.stories.ts'],
			}),
			resolve(),
			commonjs(),
			babel({ babelHelpers: 'bundled' }),
			postcss({
				plugins: [autoprefixer()],
				extensions: ['.css'],
				inject: true,
			}),
		],
		external: [
			'/node_modules/',
			/@ktdra\/icons\//,
			'react',
			'react-dom',
			'@mui/material',
			'@mui/material',
			'@emotion/styled',
		],
	},
];
