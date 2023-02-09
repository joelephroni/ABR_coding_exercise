export const removeSpaces = input => {
  return input.replace(/\s/g, '');
}

export const averageValues = (numbers) => {
  const filtered = numbers.filter(value => /^-?\d+\.?\d*$/.test(value));
  return filtered.reduce((a, b) => a + b) / filtered.length;
};