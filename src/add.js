export function add(numbers) {
  if (numbers === "") return 0;


  let delimiter = ",";
  let numbersPart = numbers;

  // handles custom delimiter
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    delimiter = parts[0].slice(2); // extract delimiter
    numbersPart = parts[1]; // contains the string of numbers
  }

  const regex = new RegExp(`[${delimiter}\n]`);

  const numberArr = numbersPart.split(regex).map(Number);

  return numberArr.reduce(
    (acc, currentVal) => Number(acc) + Number(currentVal),
    0
  );
}
