// Day 12 HotSprings
// Part 1

function parseInput(input: string): string[] {
  const rows = input.trim().split("\n");
  return rows;
}

export function HotSpringsPartOne(input: string) {
  const rows = parseInput(input).map((item) => {
    const splits = item.split(" ");
    return [`.${splits[0]}.`, splits[1].split(",").map(Number)];
  });

  let count = 0;
  for (let i = 0; i < rows.length; i++) {
    const springs = rows[i][0] as string;
    const pattern = rows[i][1] as number[];

    count += dfs(springs, pattern);
  }

  function dfs(springs: string, pattern: number[]): number {
    if (!pattern.length) {
      if (springs.includes("#")) return 0;
      else return 1;
    }

    const curr = pattern[0];
    const remainder = pattern.slice(1);
    let count = 0;

    outer: for (let end = 0; end < springs.length; end++) {
      const start = end - (curr - 1);

      if (start - 1 < 0 || springs.length <= end + 1) continue;
      if (springs[start - 1] === "#") continue;
      if (springs[end + 1] === "#") continue;
      if (springs.slice(0, start).includes("#")) continue;
      for (let i = start; i < end + 1; i++) {
        if (springs[i] === ".") continue outer;
      }

      count += dfs(springs.slice(end + 1), remainder);
    }

    return count;
  }
} // Part 2
export function HotSpringsPartTwo(input: string) {
  const rows = parseInput(input).map((item) => {
    const splits = item.split(" ");

    const spring = splits[0];
    const pattern = splits[1].split(",").map(Number);
    const unfoldedSprings: string[] = [];
    const unfoldedPatterns: number[] = [];

    for (let i = 0; i < 5; i++) {
      unfoldedSprings.push(spring);
      unfoldedPatterns.push(...pattern);
    }
    return [`.${unfoldedSprings.join("?")}.`, unfoldedPatterns];
  });

  // rows.forEach((item) => console.log(item));

  let count = 0;
  const memo: Map<string, number> = new Map();
  for (let i = 0; i < rows.length; i++) {
    const springs = rows[i][0] as string;
    const pattern = rows[i][1] as number[];

    count += dfs(springs, pattern, memo);
  }

  return count;

  function dfs(
    springs: string,
    pattern: number[],
    memo: Map<string, number>,
    indent: string = "  ",
  ): number {
    // console.log(indent, ">>", springs);
    if (!pattern.length) {
      return springs.includes("#") ? 0 : 1;
    }

    const key = `${springs}${pattern.join("")}`;
    if (memo.has(key)) return memo.get(key);

    const size = pattern[0];
    const groups = pattern.slice(1);
    let count = 0;

    outer: for (let end = 0; end < springs.length; end++) {
      const start = end - (size - 1);
      // console.log(
      //   `${indent} start:${start}, end:${end}, seg:${springs.slice(start, end + 1)}`,
      // );

      if (start - 1 < 0 || springs.length <= end + 1) continue;
      if (springs[start - 1] === "#") continue;
      if (springs[end + 1] === "#") continue;
      if (springs.slice(0, start).includes("#")) continue;
      for (let i = start; i < end + 1; i++) {
        if (springs[i] === ".") continue outer;
      }

      count += dfs(springs.slice(end + 1), groups, memo, (indent += "  "));
    }

    memo.set(key, count);
    return count;
  }
}
