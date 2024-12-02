import { expect, test, describe } from "bun:test";
import input from "@data/day12/input_HotSprings.txt";
import example from "@data/day12/example_HotSprings.txt";
import { HotSpringsPartOne, HotSpringsPartTwo } from "@code/12_HotSprings";

describe("test 12_HotSprings", () => {
  test("part1", () => {
    // expect(HotSpringsPartOne(example)).toBe(21);
    // expect(HotSpringsPartOne(input)).toBe(7017);
  });
  test("part2", () => {
    expect(HotSpringsPartTwo(example)).toBe(525152);
    expect(HotSpringsPartTwo(input)).toBe(527570479489);
  });
});
