import { packageJson } from './utils/index.mjs';
import chalk from 'chalk';
import fse from 'fs-extra';
import glob from 'glob';

/**
 * Elimina los archivos .ts de la carpeta dist después de la compilación
 */

const { name } = await packageJson();

const files = glob.sync('dist/**/*.{ts,tsx}', {
  ignore: ['dist/**/*.d.ts'],
});

files.forEach(async (file) => {
  try {
    await fse.remove(file);
  } catch (err) {
    console.error(chalk.red.bold('> ', `Error al eliminar el archivo ${file}`));
  }
});

console.log(
  chalk.bgGreen.black(` ${name} `),
  chalk.green.bold('> ', 'Los archivos .ts se han eliminado con éxito')
);
