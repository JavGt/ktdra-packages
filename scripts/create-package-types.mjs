import fse from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import { buildPath } from './utils/index.mjs';

const log = console.log;
// Agregar padding a la consola

const panel = chalk.bgMagenta.white;

const packagePath = process.cwd();

(async () => {
  // Leer todos los archivos en el directorio de compilación y verificar si son directorios
  const files = await fse.readdir(buildPath);

  const dirs = files.filter((f) => {
    const isDirectory = fse.lstatSync(path.join(buildPath, f)).isDirectory();

    return isDirectory;
  });

  dirs.map(async (dir) => {
    const pathDir = path.join(buildPath, dir);
    const template = JSON.stringify(
      { sideEffects: false, module: './index.js', types: './index.d.ts' },
      null,
      2
    );

    await fse.writeFile(path.join(pathDir, 'package.json'), template, 'utf8');
    log(panel(`Creado package.json en ${pathDir}`));
  });
})();
