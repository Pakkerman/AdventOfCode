// Day 08 HauntedWasteland
export function HauntedWastelandPartOne(input: string): number {
  const lines = input.trim().split("\n");
  const dirs = lines[0];
  const map = new Map();

  for (let i = 2; i < lines.length; i++) {
    const [name, _, L, R] = lines[i].replace(/[()=,]/g, "").split(" ");
    map.set(name, { L, R });
  }

  let curr = "AAA";
  let steps = 0;
  while (curr != "ZZZ") {
    const dir = dirs[steps % dirs.length];
    curr = map.get(curr)[dir];
    steps++;

    if (curr === "ZZZ") break;
  }

  return steps;

  function find(start: string) {
    for (let i = 0; i < dirs.length; i++) {
      steps++;
      const next = map.get(curr)[dirs[i]];
      curr = next;

      if (curr === "ZZZ") break;
    }
  }
}

export function HauntedWastelandPartTwo(input: string) {
  const lines = input.trim().split("\n");
  const dirs = lines[0];
  const map = new Map();

  for (let i = 2; i < lines.length; i++) {
    const [name, _, L, R] = lines[i].replace(/[()=,]/g, "").split(" ");
    map.set(name, { L, R });
  }

  const curr: string[] = [...map.keys()].filter((item) => item.match(/..A/));
  console.log(curr);
  let steps = new Array(curr.length).fill(0);

  for (let i = 0; i < curr.length; i++) {
    while (!curr[i].match(/..Z/)) {
      const dir = dirs[steps[i] % dirs.length];
      curr[i] = map.get(curr[i])[dir];
      steps[i]++;
    }
  }

  return lcmOfArray(steps);
}

// Find LCM of an array (Least common multiple)
function lcmOfArray(arr: number[]) {
  return arr.reduce((acc, val) => lcm(acc, val), 1);

  function gcd(a: number, b: number) {
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return a;
  }
  function lcm(a: number, b: number) {
    return Math.abs(a * b) / gcd(a, b);
  }
}
