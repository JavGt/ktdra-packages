export const camelCase = (str) => {
  // cambiar la primera letra a mayuscula
  return str.replace(/^[a-z]/, (g) => g.toUpperCase());
};
