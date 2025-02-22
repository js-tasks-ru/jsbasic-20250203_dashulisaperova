function getMinMax(str) {
  let array = str.split(' ').filter((word) => Number(word))
    .map((elem) => Number(elem));
  return result = {
    min: Math. min(...array),
    max: Math.max(...array)
  };
}
