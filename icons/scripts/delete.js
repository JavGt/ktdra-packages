import fs from 'fs/promises';
import path from 'path';
import glob from 'glob';

(async () => {
	// const route = path.join(process.cwd());
	// const files = await fs.readdir(route);

	const data = glob.sync('./**/*.tsx').map(file => {
		return file.split('/').splice(-1)[0].replace('.tsx', '');
	});

	console.log(data);
	// fs.writeFile(
	// 	path.join(process.cwd(), 'data.js'),
	// 	`export const data=[${data.map(file => `"${file}"`)}]`
	// );

	// files.map(file => {
	// 	const rg = /^(?!.*\.svg$).*$/i;
	// 	if (rg.test(file)) {
	// 		fs.unlink(path.join(route, file), err => {
	// 			if (err) throw err;
	// 			console.log(`${file} eliminado.`);
	// 		});
	// 	}
	// });
})();
