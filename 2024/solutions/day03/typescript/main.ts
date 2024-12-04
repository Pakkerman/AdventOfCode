function parse(input: string): string {
  return input.trim();
}
export function partOne(input: string): number {
  const parsed = parse(input);
  const m = [...parsed.matchAll(/mul\((\d{1,3}),(\d{1,3})\)/g)];
  let sum = 0;
  m.forEach((item) => {
    const a = item[1];
    const b = item[2];
    sum += +a * +b;
  });
  return sum;
}

export function partTwo(input: string): number {
  const parsed = parse(input);
  const m = [
    ...parsed.matchAll(/mul\((\d{1,3}),(\d{1,3})\)|do\(\)|don't\(\)/g),
  ];
  let sum = 0;
  let isDoable = true;

  m.forEach((item) => {
    console.log(sum, item);
    if (item[0] === "do()") {
      isDoable = true;
      return;
    } else if (item[0] === "don't()") {
      isDoable = false;
      return;
    }

    if (isDoable) {
      const a = item[1];
      const b = item[2];
      sum += +a * +b;
    }
  });
  return sum;
}
