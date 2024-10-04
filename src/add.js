export function add(str) {
  if (str === "") return 0;

  const numbers = str.split(",");

  return numbers.reduce(
    (acc, currentVal) => Number(acc) + Number(currentVal),
    0
  );
}
