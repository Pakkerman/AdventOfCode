// Day 15 LensLibrary
// Part 1

function parseInput(input: string): string[] {
  const out = input.trim().split(",");
  return out;
}

export function LensLibraryPartOne(input: string) {
  const data = parseInput(input);

  let sum = 0;
  for (const item of data) {
    sum += hash(item);
  }

  return sum;
}

// Part 2
export function LensLibraryPartTwo(input: string) {
  const data = parseInput(input);

  let boxes = Array.from({ length: 256 }, () => new Map());
  for (const item of data) {
    const [label, operation] = item.split(/[=-]/);
    const idx = hash(label);

    if (operation === "") {
      boxes[idx].delete(label);
    } else {
      boxes[idx].set(label, +operation);
    }
  }

  let sum = 0;
  for (let i = 0; i < boxes.length; i++) {
    let slotIdx = 1;
    for (const focalLength of boxes[i].values()) {
      sum += (i + 1) * slotIdx * focalLength;
      slotIdx++;
    }
  }

  return sum;
}

function hash(str: string): number {
  let curr = 0;
  for (const char of str) {
    const charCode = char.charCodeAt(0);
    curr += charCode;
    curr *= 17;
    curr %= 256;
  }

  return curr;
}
