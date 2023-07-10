import fs from 'fs/promises';
import path from 'path';
import glob from 'glob';
import { packagePath, packageJson, srcPath } from './utils/index.mjs';
import { camelCase } from './utils/camelCase.mjs';
import { replaceHyphen } from './utils/replaceHyphen.mjs';

const { name } = await packageJson();

/**
 * @typedef {import("@ktdra-digital/icons/dist/ts").Icon } Icon
 *
 * @typedef {{
 * 	folder: string,
 * 	icons: {
 * 		label: string,
 * 		value: Icon
 * 	 }[]
 * }} FolderAndFiles
 * @typedef {FolderAndFiles[]} FoldersAndFiles
 * @typedef {(acc: FoldersAndFiles, file: string) => FoldersAndFiles} ReduceFiles
 * @typedef {(item: FoldersAndFiles, folderPath: string)=>Promise<void>} CreateFile
 */

/**
 * Crear un script que cree una carpeta dentro de las carpetas que tenga svg llamada "obj"
 * dentro de esa carpeta tendrá una archivo llamado "obj.ts" que exportara un objeto con todos los nombres de los archivos tsx
 * dentro de esa carpeta tendrá una archivo llamado "index.ts" que exportara un objeto con todos los nombres de los archivos svg
 */
const run = async () => {
  const files = glob.sync(`svgs/**/*.svg`, {
    cwd: packagePath,
  });

  /** @type {FoldersAndFiles} */
  const foldersAndFiles = files.reduce(
    /** @type {ReduceFiles} */
    (acc, file) => {
      const folder = path.dirname(file).replace('svgs/', '');
      const nameFile = path.basename(file, '.svg');

      const component = camelCase(replaceHyphen(nameFile));

      const label = camelCase(nameFile.replace(/[-_]/g, ' '));

      const index = acc.findIndex((item) => item.folder === folder);

      if (index === -1)
        acc.push({
          folder: folder,
          icons: [
            {
              label,
              value: {
                name: component,
                folder,
              },
            },
          ],
        });
      else acc[index].icons.push({ label, value: { name: component, folder } });

      return acc;
    },
    []
  );

  // Verificar si existe la carpeta utils
  const folderPath = path.join(srcPath, 'constants');
  const folderPathTypes = path.join(srcPath, 'types');

  await createArrayFile(foldersAndFiles, folderPath);
  await createTypeFile(foldersAndFiles, folderPathTypes);
};

/** @type {CreateFile} */
const createArrayFile = async (items, folderPath) => {
  const exists = await fs
    .access(folderPath)
    .then(() => true)
    .catch(() => false);

  if (!exists) {
    try {
      // crear la carpeta utils
      await fs.mkdir(folderPath, { recursive: true });
    } catch (error) {
      console.log(error);
    }
  }

  const template = `export const ICONS = ${JSON.stringify(items)}`;

  try {
    await fs.writeFile(path.join(folderPath, 'icons.ts'), template, {
      encoding: 'utf-8',
    });
  } catch (error) {
    console.log(error);
  }
};

/** @type {CreateFile} */
const createTypeFile = async (foldersAndFiles, folderPath) => {
  const exists = await fs
    .access(folderPath)
    .then(() => true)
    .catch(() => false);

  if (!exists) {
    try {
      // crear la carpeta utils
      await fs.mkdir(folderPath, { recursive: true });
    } catch (error) {
      console.log(error);
    }
  }

  const template = `export type FoldersIcon = ${
    foldersAndFiles.map((item) => `'${item.folder}'`).join(' | ') || "''"
  }`;

  try {
    await fs.writeFile(path.join(folderPath, 'folders.ts'), template, {
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
    .map((folder) => {
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
