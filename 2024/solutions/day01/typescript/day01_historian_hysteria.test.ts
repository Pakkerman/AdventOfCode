import { expect, test, describe } from "bun:test";
import input from "../input.txt";
import example from "../example.txt";
import { partOne, partTwo } from "./day01_historian_hysteria.ts";

// Input is not the same for every user, hard coded result for testing will vary for users

describe("Day 01", () => {
  test("part1, example", () => {
    const actual = partOne(example);
    const expected = 11;
    console.log(actual);
    expect(actual).toBe(expected);
  });

  test("part1, input", () => {
    const actual = partOne(input);
    const expected = 2285373;
    console.log(actual);
    expect(actual).toBe(expected);
  });

  test("part2, example", () => {
    const actual = partTwo(example);
    const expected = 31;
    console.log(actual);
    expect(actual).toBe(expected);
  });

  test("part2, input", () => {
    const actual = partTwo(input);
    const expected = 21142653;
    console.log(actual);
    expect(actual).toBe(expected);
  });
});
