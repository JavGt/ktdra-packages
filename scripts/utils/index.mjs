import fse from 'fs-extra';
import path from 'path';
import chalk from 'chalk';

export const packagePath = process.cwd();

export const buildPath = path.join(packagePath, 'build');

export const packageJson = async () => {
	const packageData = await fse.readFile(
		path.resolve(packagePath, './package.json'),
		'utf8'
	);

	return JSON.parse(packageData);
};
