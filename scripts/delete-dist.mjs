import { packageJson, buildPath } from './utils/index.mjs';
import chalk from 'chalk';
import fse from 'fs-extra';

const { name } = await packageJson();

try {
	await fse.remove(buildPath);
} catch (err) {
	console.error(
		chalk.bgRed.black(` ${name} `),
		chalk.red.bold('> ', 'Error al eliminar la carpeta dist')
	);
}

console.log(
	chalk.bgGreen.black(` ${name} `),
	chalk.green.bold('> ', 'La carpeta dist se ha eliminado con éxito')
);
