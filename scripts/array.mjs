import fs from 'fs/promises';
import path from 'path';
import glob from 'glob';
import { buildPath, packagePath, packageJson, tagLog, lineLog } from './utils/index.mjs';

const { name } = await packageJson();

/**
 * @typedef {{ folder: string, files: string[] }} FolderAndFiles
 * @typedef {FolderAndFiles[]} FoldersAndFiles
 * @typedef {(acc: FoldersAndFiles, file: string) => FoldersAndFiles} ReduceFiles
 * @typedef {(item: FolderAndFiles, folderPath: string)=>Promise<void>} CreateFile
 */

/**
 * Crear un script que cree una carpeta dentro de las carpetas que tenga svg llamada "obj"
 * dentro de esa carpeta tendrá una archivo llamado "obj.ts" que exportara un objeto con todos los nombres de los archivos tsx
 * dentro de esa carpeta tendrá una archivo llamado "index.ts" que exportara un objeto con todos los nombres de los archivos svg
 */
const run = async () => {
	const files = glob.sync(`dist/**/*.tsx`, { cwd: packagePath, nodir: true });

	/** @type {FoldersAndFiles} */
	const foldersAndFiles = files.reduce(
		/** @type {ReduceFiles} */
		(acc, file) => {
			const folder = path.dirname(file).replace('dist/', '');
			const nameFile = path.basename(file, '.tsx');
			const index = acc.findIndex(item => item.folder === folder);

			if (index === -1) acc.push({ folder: folder, files: [nameFile] });
			else acc[index].files.push(nameFile);

			return acc;
		},
		[]
	);

	await Promise.all(
		foldersAndFiles.map(async item => {
			const { folder } = item;

			const folderPath = path.join(buildPath, folder, 'utils');

			try {
				// crear la carpeta utils
				await fs.mkdir(folderPath, { recursive: true });
			} catch (error) {
				console.log(error);
			}

			await createArrayFile(item, folderPath);

			await createBarrelFile(item, folderPath);

			await createTypeFile(item, folderPath);
		})
	);

	tagLog(name);

	lineLog(
		`El archivo array.ts se ha creado con éxito en ${foldersAndFiles.length} carpetas`
	);
	lineLog(
		`El archivo type.ts se ha creado con éxito en ${foldersAndFiles.length} carpetas`
	);
	lineLog(
		`El archivo index.ts se ha creado con éxito en ${foldersAndFiles.length} carpetas`
	);
};

/** @type {CreateFile} */
const createArrayFile = async (item, folderPath) => {
	const templateArray = `export const ${item.folder}_ARRAY = [ ${item.files
		.map(file => `"${file}"`)
		.join(', ')} ]`;

	try {
		await fs.writeFile(path.join(folderPath, 'array.ts'), templateArray, {
			encoding: 'utf-8',
		});
	} catch (error) {
		console.log(error);
	}
};

/** @type {CreateFile} */
const createTypeFile = async (item, folderPath) => {
	const templateType = `export type ${item.folder} = ${item.files
		.map(file => `"${file}"`)
		.join(' | ')}`;

	try {
		await fs.writeFile(path.join(folderPath, 'types.d.ts'), templateType, {
			encoding: 'utf-8',
		});
	} catch (error) {
		console.log(error);
	}
};

/** @type {CreateFile} */
const createBarrelFile = async (_, folderPath) => {
	const folders = await fs.readdir(folderPath);

	const isFileTs = /^(?!.*\.d\.ts$).*\.ts$/;

	const barrel = folders
		.map(folder => {
			if (folder.startsWith('index')) return '';

			return isFileTs.test(folder)
				? `export * from './${folder.replace('.ts', '')}' `
				: '';
		})
		.join('\n');

	try {
		await fs.writeFile(path.join(folderPath, 'index.ts'), barrel, {
			encoding: 'utf-8',
		});
	} catch (error) {
		console.log(error);
	}
};

run();
