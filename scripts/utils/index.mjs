import fse from 'fs-extra';
import path from 'path';
import chalk from 'chalk';

/**
 * @typedef {(tag: string, status?: "success"|"error") => void} log
 */

const log = console.log;

/** @type {log} */
export const tagLog = (tag, status = 'success') =>
	log(chalk[status !== 'error' ? 'bgGreen' : 'bgRed'].black(tag));

/** @type {log} */
export const lineLog = (text, status = 'success') =>
	log(chalk[status !== 'error' ? 'green' : 'red'].bold('> ', text));

export const packagePath = process.cwd();

export const buildPath = path.join(packagePath, 'dist');

export const packageJson = async () => {
	const packageData = await fse.readFile(
		path.resolve(packagePath, './package.json'),
		'utf8'
	);

	return JSON.parse(packageData);
};
