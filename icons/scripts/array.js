import fs from 'fs/promises';
import path from 'path';
import glob from 'glob';

const workspaceRoot = process.cwd();

// TODO: Crear un script que cree una carpeta dentro de las carpetas que tenga svg llamada "obj"
// - dentro de esa carpeta tendra una archivo llamado "obj.ts" que exportara un objeto con todos los nombres de los archivos tsx
// - dentro de esa carpeta tendra una archivo llamado "index.ts" que exportara un objeto con todos los nombres de los archivos svg

(async () => {
	const files = glob.sync(`**/*.tsx`, {
		cwd: workspaceRoot,
		ignore: ['**/node_modules/**', '**/scripts/**'],
		nodir: true,
	});

	const obj = files.reduce((acc, file) => {
		const pathFile = path.dirname(file);
		const nameFile = path.basename(file, '.tsx');

		const index = acc.findIndex(item => item.path === pathFile);

		if (index === -1) {
			acc.push({
				path: pathFile,
				name: [nameFile],
			});
		} else {
			acc[index].name.push(nameFile);
		}

		return acc;
	}, []);

	await Promise.all(
		obj.map(async item => {
			await fs.mkdir(path.join(workspaceRoot, item.path, 'utils'), { recursive: true });

			const array = `export const ${item.path.replace(/\//g, '_')}_ARRAY = [ ${item.name
				.map(name => `"${name}"`)
				.join(', ')} ]`;

			await fs.writeFile(path.join(workspaceRoot, item.path, 'utils', 'array.ts'), array);

			const obj = `export const ${item.path.replace(/\//g, '_')}_OBJ = { ${item.name
				.map(name => `"${name}": "${name}"`)
				.join(', ')} }`;

			await fs.writeFile(path.join(workspaceRoot, item.path, 'utils', 'obj.ts'), obj);

			const type = `export type ${item.path.replace(/\//g, '_')} = ${item.name
				.map(name => `"${name}"`)
				.join(' | ')}`;

			await fs.writeFile(path.join(workspaceRoot, item.path, 'utils', 'types.ts'), type);

			// Obtener todos los archivos dentro de la carpeta
			const folders = await fs.readdir(path.join(workspaceRoot, item.path, 'utils'));

			// regex para negar los archivos .d.ts y js, y solo obtener los .ts
			const isFileTs = /^(?!.*\.d\.ts$).*\.ts$/;

			const barrel = folders
				.map(folder => {
					if (folder.startsWith('index')) return '';

					return isFileTs.test(folder)
						? `export * from './${folder.replace('.ts', '')}' `
						: '';
				})
				.join('\n');

			await fs.writeFile(
				path.join(workspaceRoot, item.path, 'utils', 'index.ts'),
				barrel,
				{ encoding: 'utf-8' }
			);
		})
	);
})();
