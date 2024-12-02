// Day 11 ComsicExpansion
type Point = { x: number; y: number };
// Part 1
export function ComsicExpansionPartOne(input: string) {
  // expansion
  let mx = input.trim().split("\n");
  for (let i = 0; i < mx.length; i++) {
    const row = mx[i];
    if (row.includes("#")) continue;

    mx = [...mx.slice(0, i), ".".repeat(row.length), ...mx.slice(i)];
    i++;
  }

  outer: for (let x = 0; x < mx[0].length; x++) {
    for (let y = 0; y < mx.length; y++) {
      if (mx[y][x] === "#") continue outer;
    }

    for (let y = 0; y < mx.length; y++) {
      const line = mx[y].slice(0, x) + "." + mx[y].slice(x);
      mx[y] = line;
    }

    x++;
  }

  // console.log(input);
  // mx.forEach((item) => console.log(item));

  const matrix: string[][] = Array.from({ length: mx.length }, (_, idx) =>
    Array.from({ length: mx[idx].length }, (_, i) => mx[idx][i]),
  );

  // get paths
  const points: { x: number; y: number }[] = [];
  getStartPoints(points, matrix);

  // add all dists
  let total = 0;
  for (let i = 0; i < points.length - 1; i++) {
    const { x: x1, y: y1 } = points[i];
    for (let k = i + 1; k < points.length; k++) {
      const { x: x2, y: y2 } = points[k];
      total += manhattanDistance(x1, y1, x2, y2);
    }
  }

  return total;
}

// Part 2
export function ComsicExpansionPartTwo(input: string, dist: number) {
  let mx = input.trim().split("\n");
  const emptyRows = [];
  const emptyCols = [];

  // get empty row and cols
  for (let i = 0; i < mx.length; i++) {
    const row = mx[i];
    if (row.includes("#")) continue;

    emptyRows.push(i);
  }

  outer: for (let x = 0; x < mx[0].length; x++) {
    for (let y = 0; y < mx.length; y++) {
      if (mx[y][x] === "#") continue outer;
    }

    emptyCols.push(x);
  }

  // cast input to matrix
  const matrix: string[][] = Array.from({ length: mx.length }, (_, idx) =>
    Array.from({ length: mx[idx].length }, (_, i) => mx[idx][i]),
  );

  // get paths
  const points: { x: number; y: number }[] = [];
  getStartPoints(points, matrix);

  // calculate every distinct pairs
  // add all dists
  let total = 0;
  for (let i = 0; i < points.length - 1; i++) {
    let { x: x1, y: y1 } = points[i];
    for (let k = i + 1; k < points.length; k++) {
      let { x: x2, y: y2 } = points[k];
      total += manhattanDistance(x1, y1, x2, y2);

      for (let row = 0; row < emptyRows.length; row++) {
        let [lo, hi] = [y1, y2];
        if (hi < lo) {
          [lo, hi] = [hi, lo];
        }
        const gap = emptyRows[row];
        if (gap < lo || hi < gap) continue;

        total += dist - 1;
      }

      for (let col = 0; col < emptyCols.length; col++) {
        let [lo, hi] = [x1, x2];
        if (hi < lo) {
          [lo, hi] = [hi, lo];
        }
        const gap = emptyCols[col];
        if (gap < lo || hi < gap) continue;

        total += dist - 1;
      }
    }
  }

  return total;
}

function getStartPoints(queue: Point[], matrix: string[][]): void {
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] === "#") queue.push({ x, y });
    }
  }
}

function manhattanDistance(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
): number {
  return Math.abs(x2 - x1) + Math.abs(y2 - y1);
}
