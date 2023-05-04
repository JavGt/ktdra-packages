import fs from 'fs/promises';
import path from 'path';
import glob from 'glob';

const workspaceRoot = process.cwd();

// TODO: Crear un script que encuentre todos los archivos con terminación .d.ts, tsx, js y los elimine.
// - No eliminar los archivos .svg
// - no eliminar los archivos extras como: .gitignore, .prettierrc, package.json, etc.
// - no eliminar la carpeta node_modules y scripts

(async () => {
	const extensions = ['.d.ts', '.ts', '.js', '.tsx'].join();

	const files = glob
		.sync(`**/*{${extensions}}`, {
			cwd: workspaceRoot,
			ignore: ['**/node_modules/**', '**/scripts/**'],
			nodir: true,
		})
		.map(file => fs.rm(path.join(workspaceRoot, file)));

	console.log(`Deleted ${files.length} files`);
})();
