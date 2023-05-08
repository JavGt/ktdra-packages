import { packageJson } from './utils/index.mjs';
import chalk from 'chalk';
import fse from 'fs-extra';
import glob from 'glob';

// Eliminar todos los archivos .ts dentro de la carpeta dist

const { name } = await packageJson();

// regex para borrar solo los archivos .ts y tsx, no los .d.ts

const files = glob.sync('build/**/*.{ts,tsx}', {
	ignore: ['build/**/*.d.ts'],
});

console.log({ files });

files.forEach(async file => {
	try {
		await fse.remove(file);
		console.log(chalk.bgGreen.black(` ${name} `));
	} catch (err) {
		console.error(
			chalk.bgRed.black(` ${name} `),
			chalk.red.bold('> ', `Error al eliminar el archivo ${file}`)
		);
	}
});

console.log(
	chalk.bgGreen.black(` ${name} `),
	chalk.green.bold('> ', 'Los archivos .ts se han eliminado con éxito')
);
