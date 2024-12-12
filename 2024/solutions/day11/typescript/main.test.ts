import { expect, test, describe } from "bun:test";
import input from "../input.txt";
import example from "../example.txt";
import { partOne, partTwo } from "./main.ts";

describe("Day 11", () => {
  test("part1, example", () => {
    const actual = partOne(example);
    const expected = 55312;
    console.log(actual);
    expect(actual).toBe(expected);
  });

  test("part1, input", () => {
    const actual = partOne(input);
    const expected = 194557;
    console.log(actual);
    expect(actual).toBe(expected);
  });

  test("part2, example", () => {
    const actual = partTwo(example);
    const expected = 65601038650482;
    console.log(actual);
    expect(actual).toBe(expected);
  });

  test("part2, input", () => {
    const actual = partTwo(input);
    const expected = 231532558973909;
    console.log(actual);
    expect(actual).toBe(expected);
  });
});
