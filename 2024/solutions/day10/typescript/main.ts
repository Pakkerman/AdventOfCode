function parse(input: string): number[][] {
  return input
    .trim()
    .split("\n")
    .map((row) => row.split("").map((item) => +item));
}

const dirs = [
  [0, -1],
  [1, 0],
  [0, 1],
  [-1, 0],
];

export function partOne(input: string): number {
  const grid = parse(input);
  const rows = grid.length;
  const cols = grid[0].length;
  // find trailheads
  const trailheads: number[][] = [];
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      const tile = grid[y][x];
      if (tile === 0) {
        trailheads.push([x, y]);
      }
    }
  }

  let out = 0;
  for (const head of trailheads) {
    const queue: number[][] = [head];
    const seen: boolean[][] = Array.from({ length: rows }, () =>
      new Array(cols).fill(false),
    );
    while (queue.length) {
      const [cx, cy] = queue.shift()!;
      for (const dir of dirs) {
        const [nx, ny] = [cx + dir[0], cy + dir[1]];
        if (ny < 0 || rows <= ny) continue;
        if (nx < 0 || cols <= nx) continue;
        if (grid[ny][nx] != grid[cy][cx] + 1) continue;
        if (seen[ny][nx]) continue;

        seen[ny][nx] = true;
        if (grid[ny][nx] === 9) out++;
        else queue.push([nx, ny]);
      }
    }
  }

  return out;
}

export function partTwo(input: string): number {
  const grid = parse(input);
  const rows = grid.length;
  const cols = grid[0].length;
  // find trailheads
  const trailheads: number[][] = [];
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      const tile = grid[y][x];
      if (tile === 0) {
        trailheads.push([x, y]);
      }
    }
  }

  let out = 0;
  for (const head of trailheads) {
    const queue: number[][] = [head];
    const seen: number[][] = Array.from({ length: rows }, () =>
      new Array(cols).fill(0),
    );
    seen[head[1]][head[0]] = 1;

    while (queue.length) {
      const [cx, cy] = queue.shift()!;
      if (grid[cy][cx] === 9) out += seen[cy][cx];

      for (const dir of dirs) {
        const [nx, ny] = [cx + dir[0], cy + dir[1]];
        if (ny < 0 || rows <= ny) continue;
        if (nx < 0 || cols <= nx) continue;
        if (grid[ny][nx] != grid[cy][cx] + 1) continue;
        if (0 < seen[ny][nx]) {
          seen[ny][nx] += seen[cy][cx];
          continue;
        }

        seen[ny][nx] = seen[cy][cx];
        queue.push([nx, ny]);
      }
    }
  }

  return out;
}
