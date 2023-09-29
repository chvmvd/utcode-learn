function max(a, b) {
  return a > b ? a : b;
}

function arrayMax(array) {
  if (array == []) return; //空配列をエスケープ
  return array.reduce(max, array[0]);
}
const array1 = [5986, 7202, 9347, 3593, 8166, 662, 2235, 9323, 2240, 943];
const array2 = [-878, -40, -324, -410, -592, -610, -880, -65, -423, -32];

document.write(`配列 [${array1}] の最大値は${arrayMax(array1)} です。<p />`);
document.write(`配列 [${array2}] の最大値は${arrayMax(array2)} です。<p />`);
document.write(`空の配列の最大値は ${arrayMax([])} です。<p />`);
