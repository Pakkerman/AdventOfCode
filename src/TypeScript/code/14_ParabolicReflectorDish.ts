// Day 14 ParabolicReflectorDish
// Part 1

function parseInput(input: string): string[][] {
  // console.log(input);
  return input
    .trim()
    .split("\n")
    .map((item) => item.split(""));
}
export function ParabolicReflectorDishPartOne(input: string) {
  const dish = parseInput(input);

  while (true) {
    let moved = false;
    for (let y = dish.length - 1; y > 0; y--) {
      for (let x = 0; x < dish[y].length; x++) {
        if (dish[y][x] !== "O") continue;

        if (dish[y - 1][x] === ".") {
          [dish[y][x], dish[y - 1][x]] = [dish[y - 1][x], dish[y][x]];
          moved = true;
        }
      }
    }
    if (!moved) break;
  }

  let total = 0;
  for (let y = 0; y < dish.length; y++) {
    for (let x = 0; x < dish[y].length; x++) {
      if (dish[y][x] !== "O") continue;

      total += dish.length - y;
    }
  }

  dish.forEach((item) => console.log(item.join("")));
  console.log(total);
  return total;
}

// Part 2
export function ParabolicReflectorDishPartTwo(input: string) {
  const dish = parseInput(input);

  const cycles = cycle(dish, 1000000000);

  let total = 0;
  for (let y = 0; y < dish.length; y++) {
    for (let x = 0; x < dish[y].length; x++) {
      if (dish[y][x] !== "O") continue;

      total += dish.length - y;
    }
  }

  // console.log();
  // dish.forEach((item) => console.log(item.join("")));
  console.log("total\t\t", total);
  return total;
}

function cycle(dish: string[][], amount: number) {
  // FIX:redo this fucking thing
  //
  for (let i = 0; i < amount; i++) {
    spin(dish);
  }
}

function spin(dish: string[][]) {
  const logging = false;
  while (true) {
    let moved = false;
    // going north
    for (let y = dish.length - 1; y > 0; y--) {
      for (let x = 0; x < dish[y].length; x++) {
        if (dish[y][x] !== "O") continue;

        if (dish[y - 1][x] === ".") {
          [dish[y][x], dish[y - 1][x]] = [dish[y - 1][x], dish[y][x]];
          moved = true;
        }
      }
    }

    if (!moved) break;
  }

  if (logging) {
    console.log("\nmoved north\n");
    dish.forEach((item) => console.log(item.join("")));
  }

  while (true) {
    let moved = false;
    for (let x = dish[0].length - 1; x > 0; x--) {
      for (let y = 0; y < dish.length; y++) {
        if (dish[y][x] !== "O") continue;

        if (dish[y][x - 1] === ".") {
          const tmp = dish[y][x];
          dish[y][x] = dish[y][x - 1];
          dish[y][x - 1] = tmp;
          moved = true;
        }
      }
    }
    if (!moved) break;
  }

  if (logging) {
    console.log("\nmoved west\n");
    dish.forEach((item) => console.log(item.join("")));
  }

  while (true) {
    let moved = false;

    for (let y = 0; y < dish.length - 1; y++) {
      for (let x = 0; x < dish[y].length; x++) {
        if (dish[y][x] !== "O") continue;

        if (dish[y + 1][x] === ".") {
          const tmp = dish[y][x];
          dish[y][x] = dish[y + 1][x];
          dish[y + 1][x] = tmp;
          moved = true;
        }
      }
    }

    if (!moved) break;
  }

  if (logging) {
    console.log("\nmoved south\n");
    dish.forEach((item) => console.log(item.join("")));
  }

  while (true) {
    let moved = false;
    for (let x = 0; x < dish[0].length - 1; x++) {
      for (let y = 0; y < dish.length; y++) {
        if (dish[y][x] !== "O") continue;

        if (dish[y][x + 1] === ".") {
          const tmp = dish[y][x];
          dish[y][x] = dish[y][x + 1];
          dish[y][x + 1] = tmp;
          moved = true;
        }
      }
    }
    if (!moved) break;
  }

  if (logging) {
    console.log("\nmoved east\n");
    dish.forEach((item) => console.log(item.join("")));
  }
}

function joiner(input: string[][]) {
  return input.map((item) => item.join("")).join("");
}
