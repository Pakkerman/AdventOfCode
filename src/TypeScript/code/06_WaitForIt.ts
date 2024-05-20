// Day 06 WaitForIt

export function WaitForItPartOne(input: string) {
  const split = input.split("\n");
  const times = split[0]
    .split(":")[1]
    .split(" ")
    .filter((item) => item)
    .map((item) => parseInt(item));

  const dists = split[1]
    .split(":")[1]
    .split(" ")
    .filter((item) => item)
    .map((item) => parseInt(item));

  let ways: number[] = [];
  for (let i = 0; i < times.length; i++) {
    ways.push(0);

    for (let k = 0; k < times[i]; k++) {
      const pressedTime = k;
      const speed = k;
      const remainingTimeToTravel = times[i] - k;
      const traveledDist = remainingTimeToTravel * speed;

      if (traveledDist > dists[i]) {
        ways[i]++;
      }
    }
  }

  return ways.reduce((acc, curr) => acc * curr);
}
export function WaitForItPartTwo(input: string) {
  const split = input.split("\n");
  const time = parseInt(split[0].split(":")[1].split(" ").join(""));
  const dist = parseInt(split[1].split(":")[1].split(" ").join(""));

  let ways = 0;
  for (let i = 0; i < time; i++) {
    const pressedTime = i;
    const speed = i;
    const remainingTimeToTravel = time - i;
    const traveledDist = remainingTimeToTravel * speed;

    if (traveledDist > dist) {
      ways++;
    }
  }

  return ways;
}
