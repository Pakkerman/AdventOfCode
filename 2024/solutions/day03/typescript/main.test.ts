import { expect, test, describe } from "bun:test";
import input from "../input.txt";
import example from "../example.txt";
import { partOne, partTwo } from "./main.ts";

describe("Day 03", () => {
  test("part1, example", () => {
    const actual = partOne(example);
    const expected = 161;
    console.log(actual);
    expect(actual).toBe(expected);
  });

  test("part1, input", () => {
    const actual = partOne(input);
    const expected = 170807108;
    console.log(actual);
    expect(actual).toBe(expected);
  });

  test("part2, example", () => {
    const actual = partTwo(
      "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))",
    );
    const expected = 48;
    console.log(actual);
    expect(actual).toBe(expected);
  });

  test("part2, input", () => {
    const actual = partTwo(input);
    const expected = 293;
    console.log(actual);
    expect(actual).toBe(expected);
  });
});
