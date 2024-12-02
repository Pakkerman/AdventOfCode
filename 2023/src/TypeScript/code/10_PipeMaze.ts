// Day 10 PipeMaze

const dirs: Record<string, Array<{ x: number; y: number }>> = {
  S: [
    { x: 0, y: -1 },
    { x: 1, y: 0 },
    { x: 0, y: 1 },
    { x: -1, y: 0 },
  ],
  "|": [
    { x: 0, y: -1 },
    { x: 0, y: 1 },
  ],
  "-": [
    { x: -1, y: 0 },
    { x: 1, y: 0 },
  ],
  F: [
    { x: 1, y: 0 },
    { x: 0, y: 1 },
  ],
  J: [
    { x: 0, y: -1 },
    { x: -1, y: 0 },
  ],
  L: [
    { x: 0, y: -1 },
    { x: 1, y: 0 },
  ],
  "7": [
    { x: 0, y: 1 },
    { x: -1, y: 0 },
  ],
};

export function PipeMazePartOne(input: string) {
  const rows = input.trim().split("\n");
  const start: { x: number; y: number } = { x: 0, y: 0 };
  const maze: string[][] = rows.map((item, idx) => {
    if (item.includes("S")) {
      start.y = idx;
      start.x = item.lastIndexOf("S");
    }

    return item.split("");
  });
  const seen: boolean[][] = Array.from({ length: maze.length }, (_, i) =>
    new Array(maze[i].length).fill(false),
  );

  const path: string[] = [];
  let maxDist = 0;
  dfs(start);
  return path.length / 2;

  function dfs(curr: { x: number; y: number }, depth: number = 0): boolean {
    const { y, x } = curr;

    if (maze[y][x] === "S" && path.length > 1) {
      return true;
    }

    if (y < 0 || maze.length <= y) return false;
    if (x < 0 || maze[y].length <= x) return false;
    if (maze[y][x] === ".") return false;
    if (seen[y][x]) return false;

    path.push(maze[y][x]);
    seen[y][x] = true;
    maxDist = Math.max(depth, maxDist);

    const dir = dirs[maze[y][x]];
    for (let i = 0; i < dir.length; i++) {
      const { x: xoff, y: yoff } = dir[i];
      if ((dfs({ x: x + xoff, y: y + yoff }), depth++)) return true;
    }

    path.pop();
    return false;
  }
}
export function PipeMazePartTwo(input: string) {
  const rows = input.trim().split("\n");
  const start: { x: number; y: number } = { x: 0, y: 0 };
  const maze: string[][] = rows.map((item, idx) => {
    if (item.includes("S")) {
      start.y = idx;
      start.x = item.lastIndexOf("S");
    }

    return item.split("");
  });
  const seen: boolean[][] = Array.from({ length: maze.length }, (_, i) =>
    new Array(maze[i].length).fill(false),
  );

  const path: { x: number; y: number }[] = [];
  dfs(start);

  // Omit all pipes that are not consider as part of the loop
  const mask = Array.from({ length: maze.length }, (_, idx) =>
    new Array(maze[idx].length).fill("."),
  );
  path.forEach((item) => (mask[item.y][item.x] = "X"));

  for (let y = 0; y < maze.length; y++) {
    for (let x = 0; x < maze[y].length; x++) {
      if (mask[y][x] !== "X") {
        maze[y][x] = ".";
      }
    }
  }

  // Find what S should be
  // const up = maze?.[start.y - 1]?.[start.x];
  // const right = maze?.[start.y]?.[start.x + 1];
  // const down = maze?.[start.y + 1]?.[start.x];
  // const left = maze?.[start.y]?.[start.x - 1];

  // if (
  //   (up === "|" || up === "7" || up === "F") &&
  //   (down === "|" || down == "L" || down === "J")
  // ) {
  //   maze[start.y][start.x] = "|";
  // } else if (
  //   (left === "-" || left === "F" || left === "L") &&
  //   (right === "-" || right == "J" || right === "7")
  // ) {
  //   maze[start.y][start.x] = "-";
  // }

  maze.forEach((item) => console.log(item.join("")));

  // count the tiles inside of the loop
  let tiles = 0;
  for (let y = 0; y < maze.length; y++) {
    for (let x = 0; x < maze[y].length; x++) {
      // Point-in-polygon algorithm, if a "." counting from left
      // is crossing, "|" and "F[-]J" or "L[-]7" odd numbers of times,
      // that means the point is inside of the polygon
      const tile = maze[y][x];

      if (tile === ".") {
        const slice = maze[y].slice(0, x).join("");
        const matches = slice.match(/F-*J|L-*7|\|/g) ?? [];
        const crossings = matches.length - (maze[y].includes("S") ? 1 : 0);
        if (crossings % 2 === 1) {
          tiles += 1;
        }
      }
    }
  }

  return tiles;

  function dfs(curr: { x: number; y: number }, depth: number = 0): boolean {
    const { y, x } = curr;

    if (y < 0 || maze.length <= y) return false;
    if (x < 0 || maze[y].length <= x) return false;

    if (maze[y][x] === "S" && path.length > 1) {
      return true;
    }

    if (maze[y][x] === ".") return false;
    if (seen[y][x]) return false;

    path.push({ x, y });
    seen[y][x] = true;

    const dir = dirs[maze[y][x]];
    for (let i = 0; i < dir.length; i++) {
      const { x: xoff, y: yoff } = dir[i];
      if ((dfs({ x: x + xoff, y: y + yoff }), depth++)) return true;
    }

    path.pop();
    return false;
  }
}
