import { packageJson, buildPath, tagLog, lineLog } from './utils/index.mjs';
import fse from 'fs-extra';

const { name } = await packageJson();

try {
	await fse.remove(buildPath);
} catch (err) {
	tagLog(name, 'error');
	lineLog('Error al eliminar la carpeta dist', 'error');
	console.log(err);
}

tagLog(name);
lineLog('La carpeta dist se ha eliminado con éxito');
