/**
 * verifica si tiene un guion o guion bajo y lo reemplaza por la letra siguiente en mayuscula, si es un número, le quita el guion
 * @param {string} str
 * @returns {string}
 */
export const replaceHyphen = (str) => {
	return str.replace(/[-_](\w)/g, (_, g) => {
		if (g.match(/\d/)) return g;

		return g.toUpperCase();
	});
};
