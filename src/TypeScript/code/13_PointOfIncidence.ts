// not 32638

// Day 13 PointOfIncidence

// input always has odd number of columns and rows so the first step is to trim

// the first one in the input is horizontal, so does the second one

// result require all the sum of all vertical lines + sum of all horizontal lines * 100

// once find the same 2 line, see if it reach the edge. if not, rotate left and try again,

function parseInput(input: string): string[][] {
  const patterns: string[][] = [];
  const rows = input.trim().split("\n");
  let curr: string[] = [];
  for (let i = 0; i < rows.length; i++) {
    if (rows[i] === "") {
      patterns.push(curr);
      curr = [];
      continue;
    }

    curr.push(rows[i]);
  }

  patterns.push(curr);
  return patterns;
}

export function PointOfIncidencePartOne(input: string) {
  const patterns = parseInput(input);

  let total = 0;
  for (let i = 0; i < patterns.length; i++) {
    // if (i != 12) continue;
    const pattern = patterns[i];

    // console.log("\ncheck horz");
    const vertical = findReflection(rotateLeft(pattern));
    // console.log("\ncheck vert");
    const horizontal = findReflection(pattern);

    total += vertical !== 0 ? horizontal : horizontal * 100;
  }

  console.log("total", total);

  return total;

  function findReflection(pattern: string[]): number {
    for (let y = 0; y < pattern.length - 1; y++) {
      let lo = y;
      let hi = y + 1;
      if (pattern[lo] !== pattern[hi]) continue;
      if (lo === 0 || hi === pattern.length - 1) return y + 1;

      do {
        lo--;
        hi++;
      } while (pattern[lo] === pattern[hi]);

      if (lo === -1 || hi === pattern.length) return y + 1;
    }
    return 0;
  }
}

export function PointOfIncidencePartTwo(input: string): number {
  const patterns = parseInput(input);

  let total = 0;
  for (let i = 0; i < patterns.length; i++) {
    const pattern = patterns[i];

    console.log("\n", i);
    const horizontal = findReflection(pattern);
    const vertical = findReflection(rotateLeft(pattern));

    console.log(horizontal, vertical);

    total += horizontal ? horizontal * 100 : vertical;
  }

  console.log("total", total);

  return total;

  function findReflection(pattern: string[]): number {
    pattern.forEach((item, idx) =>
      console.log(idx.toString().padStart(2, "0"), item),
    );
    console.log();

    for (let y = 0; y < pattern.length - 1; y++) {
      let diffCount = 0;
      let lo = y;
      let hi = y + 1;

      diffCount += countDiff(pattern[lo], pattern[hi]);
      if (1 < diffCount) continue;

      if (lo === 0 || hi === pattern.length - 1) {
        if (diffCount === 0) continue;
        return y + 1;
      }

      console.log("here");
      do {
        lo--;
        hi++;
        if (lo === -1 || hi === pattern.length) {
          if (diffCount != 1) break;
          return y + 1;
        }
        diffCount += countDiff(pattern[lo], pattern[hi]);

        console.log(diffCount);
        console.log(lo.toString().padStart(2, "0"), pattern[lo]);
        console.log(hi.toString().padStart(2, "0"), pattern[hi]);
        console.log();
      } while (diffCount <= 1);
    }
    return 0;
  }
}

function countDiff(a: string, b: string): number {
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) continue;
    diff++;
  }
  return diff;
}

function rotateLeft(matrix: string[]): string[] {
  const out: string[] = Array.from({ length: matrix[0].length }, () => "");
  for (let i = 0; i < matrix.length; i++) {
    for (let k = 0; k < matrix[i].length; k++) {
      out[k] += matrix[i][k];
    }
  }
  return out;
}
