// Day 09 MirageMaintenance
export function MirageMaintenancePartOne(input: string) {
  const rows = Array.from(input.trim().split("\n"), (item) =>
    item.split(" ").map(Number),
  );

  let out = 0;
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const seq: number[][] = [row];

    let idx = 0;
    while (seq[idx].some((item) => item != seq[idx][0])) {
      const curr: number[] = [];
      for (let i = 1; i < seq[idx].length; i++) {
        curr.push(seq[idx][i] - seq[idx][i - 1]);
      }

      seq.push(curr);
      idx++;
    }
    out += seq.map((item) => item[item.length - 1]).reduce((a, b) => a + b, 0);
  }

  return out;
}

export function MirageMaintenancePartTwo(input: string) {
  const rows = Array.from(input.trim().split("\n"), (item) =>
    item.split(" ").map(Number),
  );

  let out = 0;
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const seq: number[][] = [row];

    let idx = 0;
    while (seq[idx].some((item) => item != seq[idx][0])) {
      const curr: number[] = [];
      for (let i = 1; i < seq[idx].length; i++) {
        curr.push(seq[idx][i] - seq[idx][i - 1]);
      }

      seq.push(curr);
      idx++;
    }

    // add from the start, the prev is always 0 to begin with
    // then flip the prev and add the next one,
    // repeat for all array in seq backwards
    let prev = 0;
    for (let k = seq.length - 1; k >= 0; k--) {
      prev = -prev + seq[k][0];
    }

    out += prev;
  }

  return out;
}
