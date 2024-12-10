function parse(input: string): string[][] {
  return input
    .trim()
    .split("\n")
    .map((item) => item.split(""));
}

const directions: Record<string, number[]> = {
  "^": [0, -1],
  ">": [1, 0],
  v: [0, 1],
  "<": [-1, 0],
};
const dirs = ["^", ">", "v", "<"];

export function partOne(input: string): number {
  const grid = parse(input);
  let start = { x: 0, y: 0 };
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === "^") {
        start.x = x;
        start.y = y;
      }
    }
  }

  const seen: boolean[][] = Array.from({ length: grid.length }, (_, idx) =>
    new Array(grid[idx].length).fill(false),
  );
  traverse(grid, seen, start.x, start.y, grid[start.y][start.x]);

  // seen.forEach((row) =>
  //   console.log(row.map((item) => (item ? "X" : ".")).join("")),
  // );
  return seen.reduce(
    (acc, curr) => acc + curr.reduce((acc, bool) => acc + (bool ? 1 : 0), 0),
    0,
  );
}

function getNextDir(tile: string): [nextDirTile: string, offset: number[]] {
  const currIdx = dirs.indexOf(tile);
  const nextIdx = (currIdx + 1) % dirs.length;
  const nextDirTile = dirs[nextIdx];
  const nextOffsets = directions[nextDirTile];

  return [nextDirTile, nextOffsets];
}

// go through every tile and place a new "#" and see if the guard will
// - go at any point in the future will be on the starting point again (not sure if this is true)
// or we can mark every turn, and if at any point you start at the first one again and hit every one
// of the points that has been recoreded, that means you are in a loop and add 1 count that placement
//
export function partTwo(input: string): number {
  const grid = parse(input);
  let count = 0;

  let start = { x: 0, y: 0 };
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === "^") {
        start.x = x;
        start.y = y;
      }
    }
  }

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === "#") continue;
      if (y === start.y && x === start.x) continue;

      const obstacleGrid = copyGrid(grid);
      obstacleGrid[y][x] = "#";
      const seen: boolean[][] = Array.from({ length: grid.length }, (_, idx) =>
        new Array(grid[idx].length).fill(false),
      );

      // obstacleGrid.forEach((row) => console.log(row.join("")));
      // console.log("");

      const isLooping = traverse(
        obstacleGrid,
        seen,
        start.x,
        start.y,
        obstacleGrid[start.y][start.x],
      );
      if (!isLooping) count++;

      // seen.forEach((row) =>
      //   console.log(row.map((item) => (item ? "X" : ".")).join("")),
      // );
    }
  }
  return count;
}

function copyGrid(grid: string[][]): string[][] {
  const out: string[][] = [];
  for (let y = 0; y < grid.length; y++) {
    out.push([]);
    for (let x = 0; x < grid[y].length; x++) {
      out[y].push(grid[y][x]);
    }
  }
  return out;
}

function traverse(
  grid: string[][],
  seen: boolean[][],
  x: number,
  y: number,
  currTile: string,
  count: number = 0,
  visited: Map<string, string> = new Map(),
): boolean {
  // this is not ideal, hardcoded count to prevent infinite looping, but works for now
  // need some other method to detect looping
  if (8000 < count) return false;

  // const coordId = `${x},${y}`;
  // if (visited.has(coordId) && visited.get(coordId)!.includes(currTile))
  //   return false;
  // if (!visited.has(coordId)) visited.set(coordId, []);
  // visited.get(coordId).push(currTile);
  // console.log(visited);

  if (y < 0 || grid.length <= y) return true;
  if (x < 0 || grid[y].length <= x) return true;

  grid[y][x] = currTile;
  if (!seen[y][x]) {
    seen[y][x] = true;
  }
  let [currXOff, currYOff] = directions[currTile];
  if (y + currYOff < 0 || grid.length <= y + currYOff) return true;
  if (x + currXOff < 0 || grid[y].length <= x + currXOff) return true;

  let nextTile = grid[y + currYOff][x + currXOff];

  while (nextTile === "#") {
    let [nextDirTile, nextOffsets] = getNextDir(currTile);
    currTile = nextDirTile;
    grid[y][x] = currTile;
    [currXOff, currYOff] = nextOffsets;
    nextTile = grid[y + currYOff][x + currXOff];
  }

  if (
    traverse(
      grid,
      seen,
      x + currXOff,
      y + currYOff,
      currTile,
      count + 1,
      visited,
    )
  )
    return true;

  return false;
}
