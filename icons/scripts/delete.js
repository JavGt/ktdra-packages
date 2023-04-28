import fs from 'fs/promises';
import path from 'path';

(async () => {
	const route = path.join(process.cwd(), 'BT');
	const files = await fs.readdir(route);

	files.map(file => {
		const rg = /^(?!.*\.svg$).*$/i;
		if (rg.test(file)) {
			fs.unlink(path.join(route, file), err => {
				if (err) throw err;
				console.log(`${file} eliminado.`);
			});
		}
	});
})();
