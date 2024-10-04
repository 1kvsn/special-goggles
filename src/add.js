export function add(numbers) {
  if (numbers === "") return 0;

  const numberList = numbers.split(",");

  return numberList.reduce(
    (acc, currentVal) => Number(acc) + Number(currentVal),
    0
  );
}
