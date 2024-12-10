function parse(input: string): string[][] {
  return input
    .trim()
    .split("\n")
    .map((item) => item.split(""));
}

export function partOne(input: string): number {
  // console.log(input);
  const grid = parse(input);

  // find all unique symbols
  // process symbol one at a time
  // keep record of antinodes as seen
  //    add up the count along the way
  //    return out the count, and maybe seen map will come in handy with part two

  const uniqueSymbols: Map<string, number[][]> = new Map();
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      const symbol = grid[y][x];
      if (symbol === ".") continue;
      if (!uniqueSymbols.has(symbol)) uniqueSymbols.set(symbol, []);

      uniqueSymbols.get(symbol)!.push([x, y]);
    }
  }

  const seen: boolean[][] = Array.from({ length: grid.length }, (_, idx) =>
    new Array(grid[idx].length).fill(false),
  );

  let out = 0;
  for (const coords of uniqueSymbols.values()) {
    out += processFrequency(coords);
  }
  function processFrequency(coords: number[][]): number {
    // console.log(coords);

    let out = 0;
    for (let i = 0; i < coords.length; i++) {
      const origin = coords[i];
      for (let k = 0; k < coords.length; k++) {
        if (i === k) continue;
        const target = coords[k];
        const dist = [target[0] - origin[0], target[1] - origin[1]];
        const [destX, destY] = [target[0] + dist[0], target[1] + dist[1]];
        // console.log("processing pair", origin, target, dist, destX, destY);

        if (destY < 0 || seen.length <= destY) continue;
        if (destX < 0 || seen[destY].length <= destX) continue;
        if (seen[destY][destX]) continue;
        if (seen[destY][destX] === undefined) continue;

        seen[destY][destX] = true;
        out++;
      }
    }
    return out;
  }

  // seen.forEach((row) =>
  //   console.log(row.map((item) => (item ? "#" : ".")).join("")),
  // );
  return out;
}

// part two
export function partTwo(input: string): number {
  // console.log(input);
  const grid = parse(input);

  let numOfSymbols = 0;
  const uniqueSymbols: Map<string, number[][]> = new Map();
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      const symbol = grid[y][x];
      if (symbol === ".") continue;
      if (!uniqueSymbols.has(symbol)) uniqueSymbols.set(symbol, []);

      uniqueSymbols.get(symbol)!.push([x, y]);
      numOfSymbols++;
    }
  }

  let out = 0;
  const seen: boolean[][] = Array.from({ length: grid.length }, (_, idx) =>
    new Array(grid[idx].length).fill(false),
  );
  for (const coords of uniqueSymbols.values()) {
    out += processFrequency(coords, grid, seen);
  }

  return out + numOfSymbols;
}

function processFrequency(
  coords: number[][],
  grid: string[][],
  seen: boolean[][],
): number {
  let out = 0;
  for (let i = 0; i < coords.length; i++) {
    for (let k = 0; k < coords.length; k++) {
      if (i === k) continue;

      let origin = coords[i];
      let target = coords[k];
      while (true) {
        const dist = [target[0] - origin[0], target[1] - origin[1]];
        const [destX, destY] = [target[0] + dist[0], target[1] + dist[1]];
        // console.log("processing pair", origin, target, dist, destX, destY);

        if (destY < 0 || seen.length <= destY) break;
        if (destX < 0 || seen[destY].length <= destX) break;

        origin = target;
        target = [destX, destY];
        if (seen[destY][destX]) continue;
        if (seen[destY][destX] === undefined) break;

        seen[destY][destX] = true;
        if (grid[destY][destX] !== ".") continue;
        out++;
      }
    }
  }

  return out;
}
