import fse from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import { buildPath, lineLog, packageJson, tagLog } from './utils/index.mjs';

// Agregar padding a la consola

const { name } = await packageJson();

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
	tagLog(name);
	lineLog(`El archivo index.ts se ha creado con éxito en ${dirs.length} carpetas`);
})();
