function parse(input: string): string[][] {
  return input
    .trim()
    .split("\n")
    .map((row) => row.split(""));
}
const word = ["X", "M", "A", "S"];
const dirs = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

export function partOne(input: string): number {
  const p = parse(input);
  let out = 0;
  for (let y = 0; y < p.length; y++) {
    for (let x = 0; x < p[y].length; x++) {
      if (p[y][x] !== word[0]) continue;
      recurse(x, y, dirs, 0);
    }
  }
  return out;

  function recurse(
    x: number,
    y: number,
    nextDirs: number[][],
    idx: number,
  ): boolean {
    if (y < 0 || p.length <= y) return false;
    if (x < 0 || p[y].length <= x) return false;

    const curr = p[y][x];
    if (curr !== word[idx]) return false;
    if (curr === word[idx] && idx === word.length - 1) {
      out++;
      return true;
    }

    for (let i = 0; i < nextDirs.length; i++) {
      const [xoff, yoff] = nextDirs[i];
      if (!recurse(x + xoff, y + yoff, [[xoff, yoff]], idx + 1)) continue;
    }

    return false;
  }
}

const diags = [
  [
    [-1, -1],
    [1, 1],
  ],
  [
    [1, -1],
    [-1, 1],
  ],
];
export function partTwo(input: string): number {
  const p = parse(input);
  let out = 0;

  for (let y = 1; y < p.length - 1; y++) {
    for (let x = 1; x < p[y].length - 1; x++) {
      if (p[y][x] !== "A") continue;

      let validCount = 0;
      for (let i = 0; i < diags.length; i++) {
        const [xoffA, yoffA] = diags[i][0];
        const [xoffB, yoffB] = diags[i][1];

        let tileA = p[y + yoffA][x + xoffA];
        let tileB = p[y + yoffB][x + xoffB];

        if (tileA === "M" && tileB === "S") validCount++;
        if (tileA === "S" && tileB === "M") validCount++;
      }
      if (validCount === 2) out++;
    }
  }
  return out;
}
