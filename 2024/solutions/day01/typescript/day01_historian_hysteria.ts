function getInput(input: string) {
  const out = input.trim().split("\n");
  return out;
}

export function partOne(input: string): number {
  const parsedInput = getInput(input);
  const left: number[] = [];
  const right: number[] = [];
  for (let i = 0; i < parsedInput.length; i++) {
    const item = parsedInput[i];
    const parsedItem = item.split(" ");
    left.push(+parsedItem[0]);
    right.push(+parsedItem[parsedItem.length - 1]);
  }

  left.sort();
  right.sort();
  console.log(left);
  console.log(right);

  let sum = 0;
  for (let i = 0; i < left.length; i++) {
    sum += Math.abs(left[i] - right[i]);
  }

  return sum;
}

export function partTwo(input: string): number {
  const parsedInput = getInput(input);
  const left: number[] = [];
  const right: number[] = [];

  for (let i = 0; i < parsedInput.length; i++) {
    const item = parsedInput[i];
    const parsedItem = item.split(" ");
    left.push(+parsedItem[0]);
    right.push(+parsedItem[parsedItem.length - 1]);
  }

  const map = new Map();
  for (let i = 0; i < right.length; i++) {
    if (!map.has(right[i])) map.set(right[i], 1);
    else map.set(right[i], map.get(right[i]) + 1);
  }

  let sum = 0;
  for (let i = 0; i < left.length; i++) {
    const similarity = map.get(left[i]) || 0;
    sum += left[i] * similarity;
  }
  return sum;
}
