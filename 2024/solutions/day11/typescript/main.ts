function parse(input: string): number[] {
  return input
    .trim()
    .split(" ")
    .map((item) => +item);
}

// if "0", replace with "1"
// if num of digits is even, replace with 2 stones, split the number in half, put half to left and half to right
//    if is 1000, the splited two stone is 10 and 0, no leading 0s
// else replace stone with num * 2024

export function partOne(input: string): number {
  const stones = parse(input);
  let count = 0;
  for (const stone of stones) {
    count += recurse(stone, 25);
  }

  return count;
}

export function partTwo(input: string): number {
  const stones = parse(input);
  let count = 0;
  for (const stone of stones) {
    count += recurse(stone, 75);
  }

  return count;
}

function recurse(
  engrave: number,
  steps: number,
  memo: Map<string, number> = new Map(),
): number {
  const key = `${engrave}-${steps}`;
  if (memo.has(key)) return memo.get(key)!;

  const str = String(engrave);
  const len = str.length;
  let res: number;
  if (steps === 0) {
    res = 1;
  } else if (engrave === 0) {
    res = recurse(1, steps - 1, memo);
  } else if (len % 2 === 0) {
    const left = parseInt(str.slice(0, len / 2));
    const right = parseInt(str.slice(len / 2));
    res = recurse(left, steps - 1, memo) + recurse(right, steps - 1, memo);
  } else {
    res = recurse(engrave * 2024, steps - 1, memo);
  }

  memo.set(key, res);
  return res;
}
