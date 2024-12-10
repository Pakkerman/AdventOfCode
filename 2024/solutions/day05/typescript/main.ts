function parse(input: string): string[][] {
  return input
    .trim()
    .split("\n\n")
    .map((item) => item.split("\n"));
}

export function partOne(input: string): number {
  const [pages, updates] = parse(input);

  const pageMap: Record<number, number[]> = {};
  for (let i = 0; i < pages.length; i++) {
    const [a, b] = pages[i].split("|");

    if (!pageMap[+a]) pageMap[+a] = [];
    pageMap[+a].push(+b);
  }

  const validUpdates: number[][] = [];
  for (const update of updates) {
    // console.log("updating", update);
    let valid = true;
    const updateArr = update.split(",").map((item) => +item);
    const prev: number[] = [];
    for (let i = 0; i < updateArr.length - 1; i++) {
      const pageNum = updateArr[i];
      if (!valid) break;
      // console.log(`updating page ${pageNum}, prev: [${prev}]`);
      if (!pageMap[pageNum]) {
        valid = false;
        break;
      }
      if (crossCheck(pageMap[pageNum], prev)) {
        valid = false;
        break;
      }
      prev.push(pageNum);
    }
    if (valid) validUpdates.push(updateArr);
  }

  // console.log(pageMap, validUpdates);

  return validUpdates.reduce((acc, curr) => {
    const mid = Math.floor(curr.length / 2);
    return acc + curr[mid];
  }, 0);
}

function crossCheck(a: number[], b: number[]): boolean {
  for (const ia of a) {
    for (const ib of b) {
      if (ia === ib) return true;
    }
  }
  return false;
}

export function partTwo(input: string): number {
  const [pages, updates] = parse(input);

  const pageMap: Record<number, number[]> = {};
  for (let i = 0; i < pages.length; i++) {
    const [a, b] = pages[i].split("|");

    if (!pageMap[+a]) pageMap[+a] = [];
    pageMap[+a].push(+b);
  }

  for (const [key, val] of Object.entries(pageMap)) {
    pageMap[key] = val.sort();
  }

  const invalidUpdates: number[][] = [];
  for (const update of updates) {
    // console.log("updating", update);
    let valid = true;
    const updateArr = update.split(",").map((item) => +item);
    const prev: number[] = [];
    for (let i = 0; i < updateArr.length - 1; i++) {
      const pageNum = updateArr[i];
      if (!valid) break;
      // console.log(`updating page ${pageNum}, prev: [${prev}]`);
      if (!pageMap[pageNum]) {
        valid = false;
        break;
      }
      if (crossCheck(pageMap[pageNum], prev)) {
        valid = false;
        break;
      }
      prev.push(pageNum);
    }
    if (!valid) invalidUpdates.push(updateArr);
  }

  const reorderedUpdates: number[][] = [];
  for (const update of invalidUpdates) {
    const counts = {};
    for (let i = 0; i < update.length; i++) {
      const curr = update[i];
      counts[curr] = 0;
      for (let k = 0; k < update.length; k++) {
        if (i === k) continue;
        if (!pageMap[update[k]]) continue;
        if (!pageMap[update[k]].includes(curr)) continue;
        counts[curr]++;
      }
    }
    const sorted = Object.entries(counts)
      .sort(([, valueA], [, valueB]) => {
        return valueA - valueB; // Sort by value (ascending)
      })
      .map((item) => +item[0]);
    reorderedUpdates.push(sorted);
  }

  // console.log(pageMap);
  // console.log(invalidUpdates);
  // console.log(reorderedUpdates);

  return reorderedUpdates.reduce((acc, curr) => {
    const mid = Math.floor(curr.length / 2);
    return acc + curr[mid];
  }, 0);
}
