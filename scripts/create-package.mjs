import fse from 'fs-extra';
import path from 'path';

import { buildPath, packageJson } from './utils/index.mjs';

const { nyc, scripts, devDependencies, workspaces, ...packageDataOther } =
	await packageJson();

const newPackageData = {
	...packageDataOther,
	private: false,
};

const typeDefinitionsFilePath = path.resolve(buildPath, './index.d.ts');

const indexPath = path.resolve(buildPath, './index.js');

if (await fse.pathExists(typeDefinitionsFilePath)) {
	newPackageData.types = './index.d.ts';
}

if (await fse.pathExists(indexPath)) {
	newPackageData.module = './index.js';
}

const targetPath = path.resolve(buildPath, './package.json');

await fse.writeFile(targetPath, JSON.stringify(newPackageData, null, 2), 'utf8');
