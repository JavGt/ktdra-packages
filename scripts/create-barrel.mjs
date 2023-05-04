import fse from 'fs-extra';
import path from 'path';
import chalk from 'chalk';

const log = console.log;
// Agregar padding a la consola

const panel = chalk.bgMagenta.white;

const packagePath = process.cwd();
const buildPath = path.join(packagePath, 'dist');

(async () => {
	// Leer todos los archivos en el directorio de compilación y verificar si son directorios
	const files = await fse.readdir(buildPath);

	const dirs = files.filter(f => {
		const isDirectory = fse.lstatSync(path.join(buildPath, f)).isDirectory();

		return isDirectory;
	});

	// Crear un archivo de barril para cada directorio
	const barrelPath = path.join(buildPath, 'index.ts');

	const template = `${dirs.map(d => `export * from './${d}';`).join('\n')}`;

	fse.writeFileSync(barrelPath, template);
	log(chalk.magenta('> build:barrel ', panel(' Barrel file generated ')));
})();
