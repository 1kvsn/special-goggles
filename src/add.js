export function add(numbers) {
  if (numbers === "") return 0;


  const delimiter = ",";
  const regex = new RegExp(`[${delimiter}\n]`);

  const numberList = numbers.split(regex).map(Number);

  return numberList.reduce(
    (acc, currentVal) => Number(acc) + Number(currentVal),
    0
  );
}
