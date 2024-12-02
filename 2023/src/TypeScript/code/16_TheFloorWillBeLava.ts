// Day 16 TheFloorWillBeLava
// Part 1

// backslashes in the inputs has been replaced with "b"
// to avoid problem with escaping characters
function getInput(input: string): string[][] {
  return input
    .trim()
    .split("\n")
    .map((item) => item.split(""));
}

export function TheFloorWillBeLavaPartOne(input: string) {
  const grid = getInput(input);
  return bfs({ x: 0, y: 0, dir: right }, grid);
}

export function TheFloorWillBeLavaPartTwo(input: string) {
  const grid = getInput(input);

  let max = 0;
  for (let x = 0; x < grid[0].length; x++) {
    max = Math.max(max, bfs({ x, y: 0, dir: down }, grid));
    max = Math.max(max, bfs({ x, y: grid.length - 1, dir: up }, grid));
  }

  for (let y = 0; y < grid.length; y++) {
    max = Math.max(max, bfs({ x: 0, y, dir: right }, grid));
    max = Math.max(max, bfs({ x: grid[0].length - 1, y, dir: left }, grid));
  }

  console.log(max);
  return max;
}

type Point = { x: number; y: number; dir: Dir; splited?: boolean };
type Dir = [x: number, y: number];

const left: Dir = [-1, 0];
const right: Dir = [1, 0];
const up: Dir = [0, -1];
const down: Dir = [0, 1];

function bfs(start: Point, grid: string[][]): number {
  const queue: Point[] = [start];
  const w = grid[0].length;
  const h = grid.length;
  // A copy of the grid to keep track of the tiles walked
  const energizedGrid = Array.from({ length: h }, () => new Array(w).fill("."));
  // A set that keep track of the tile coordinates and direction,
  // a tile could have 4 records that go each of the 4 direction
  const seen = new Set<String>();

  let count = 0;
  while (queue.length) {
    const curr = queue.shift();
    if (outOfBound(curr, w, h)) continue;
    if (seenTile(curr, seen)) continue;

    if (energizedGrid[curr.y][curr.x] !== "#") count++;
    energizedGrid[curr.y][curr.x] = "#";

    const next = getNext(curr, grid[curr.y][curr.x]);
    if (next.length) queue.push(...next);
  }

  return count;
}

function seenTile(tile: Point, seen: Set<String>): boolean {
  const { x, y, dir } = tile;
  let serial: string;
  switch (dir) {
    case up:
      serial = `${x}-${y}-up`;
      break;
    case right:
      serial = `${x}-${y}-right`;
      break;
    case down:
      serial = `${x}-${y}-down`;
      break;
    case left:
      serial = `${x}-${y}-left`;
      break;
  }

  if (seen.has(serial)) {
    return true;
  }
  seen.add(serial);
  return false;
}

function outOfBound(point: Point, w: number, h: number): boolean {
  const { x, y } = point;

  if (y < 0 || h <= y) return true;
  if (x < 0 || w <= x) return true;

  return false;
}

function getNext(point: Point, tile: string): Point[] {
  const { x, y, dir } = point;

  if (tile === ".") {
    return [{ x: x + dir[0], y: y + dir[1], dir }];
  }

  if (tile === "|") {
    if (dir === left || dir === right) {
      return [...getNext(point, "/"), ...getNext(point, "b")];
    } else {
      return [...getNext(point, ".")];
    }
  } else if (tile === "-") {
    if (dir === up || dir === down) {
      return [...getNext(point, "/"), ...getNext(point, "b")];
    } else {
      return [...getNext(point, ".")];
    }
  }

  switch (dir) {
    case up:
      if (tile === "b") {
        return [{ x: x + left[0], y: y + left[1], dir: left }];
      } else if (tile === "/") {
        return [{ x: x + right[0], y: y + right[1], dir: right }];
      }
    case down:
      if (tile === "b") {
        return [{ x: x + right[0], y: y + right[1], dir: right }];
      } else if (tile === "/") {
        return [{ x: x + left[0], y: y + left[1], dir: left }];
      }
    case left:
      if (tile === "b") {
        return [{ x: x + up[0], y: y + up[1], dir: up }];
      } else if (tile === "/") {
        return [{ x: x + down[0], y: y + down[1], dir: down }];
      }
    case right:
      if (tile === "b") {
        return [{ x: x + down[0], y: y + down[1], dir: down }];
      } else if (tile === "/") {
        return [{ x: x + up[0], y: y + up[1], dir: up }];
      }
  }

  return [];
}

function printDir(dir: number[]): string {
  if (dir[0] === 1 && dir[1] === 0) return "right";
  if (dir[0] === -1 && dir[1] === 0) return "left";
  if (dir[0] === 0 && dir[1] === -1) return "up";
  if (dir[0] === 0 && dir[1] === 1) return "down";
}
