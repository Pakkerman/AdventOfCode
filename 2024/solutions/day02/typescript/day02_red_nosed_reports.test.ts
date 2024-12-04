import { expect, test, describe } from "bun:test";
import input from "../input.txt";
import example from "../example.txt";
import { partOne, partTwo } from "./day02_red_nosed_reports.ts";

describe("Day 02", () => {
  test("part1, example", () => {
    const actual = partOne(example);
    const expected = 2;
    console.log(actual);
    expect(actual).toBe(expected);
  });

  test("part1, input", () => {
    const actual = partOne(input);
    const expected = 224;
    console.log(actual);
    expect(actual).toBe(expected);
  });

  test("part2, example", () => {
    const actual = partTwo(example);
    const expected = 4;
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
