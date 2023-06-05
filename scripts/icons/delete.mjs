import { packagePath, srcPath } from '../utils/index.mjs';
import fs from 'fs/promises';
import path from 'path';

const args = process.argv[2];

const options = ['components'];

const deleteComponent = async () => {
	// Obtener todas las carpetas que estan dentro de la carpeta svgs en el directorio packagePath

	const svgsPath = path.join(packagePath, 'svgs');
	const svgsFolders = await fs.readdir(svgsPath);

	//eliminar todas las carpetas de src que se llamen igual a las que estan en el directorio svgs
	const srcFolders = await fs.readdir(srcPath);

	const deleteFolders = srcFolders.filter((folder) =>
		svgsFolders.includes(folder)
	);

	deleteFolders.forEach(async (folder) => {
		await fs.rm(path.join(srcPath, folder), { recursive: true });
	});
};

(async (arg) => {
	switch (arg) {
		case options[0]:
			await deleteComponent();
			break;
		default:
			console.log('No se ha encontrado la opción');

			break;
	}
})(args);
