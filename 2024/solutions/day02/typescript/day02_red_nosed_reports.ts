function getInput(input: string) {
  const out = input
    .trim()
    .split("\n")
    .map((row) => row.split(" ").map((item) => +item));
  return out;
}

export function partOne(input: string): number {
  const parsedInput = getInput(input);
  let numberOfSafe = 0;
  for (let i = 0; i < parsedInput.length; i++) {
    const firstItem = parsedInput[i][0];
    const secondItem = parsedInput[i][1];
    if (firstItem === secondItem) continue;
    const isIncreasing = firstItem < secondItem;
    if (isSafe(parsedInput[i], isIncreasing)) numberOfSafe++;
  }
  return numberOfSafe;
}

export function partTwo(input: string): number {
  const parsedInput = getInput(input);
  let numberOfSafe = 0;

  for (let i = 0; i < parsedInput.length; i++) {
    const skippedArrays = [parsedInput[i]];
    for (let k = 0; k < parsedInput[i].length; k++) {
      skippedArrays.push(parsedInput[i].filter((_, idx) => idx != k));
    }

    for (let k = 0; k < skippedArrays.length; k++) {
      const firstItem = skippedArrays[k][0];
      const secondItem = skippedArrays[k][1];
      if (firstItem === secondItem) continue;

      const isIncreasing = firstItem < secondItem;
      if (isSafe(skippedArrays[k], isIncreasing)) {
        numberOfSafe++;
        break;
      }
    }
  }
  return numberOfSafe;
}

function isSafe(input: number[], isIncreasing: boolean): boolean {
  let safe = true;
  for (let i = 0; i < input.length - 1; i++) {
    if (!safe) break;
    const curr = input[i];
    const next = input[i + 1];

    if (curr === next) safe = false;
    if (curr < next !== isIncreasing) safe = false;
    if (3 < Math.abs(curr - next)) safe = false;
  }

  return safe;
}
