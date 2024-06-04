import { expect, test, describe } from "bun:test";
import input from "@data/day11/input_ComsicExpansion.txt";
import example from "@data/day11/example_ComsicExpansion.txt";
import {
  ComsicExpansionPartOne,
  ComsicExpansionPartTwo,
} from "@code/11_ComsicExpansion";

describe("test 11_ComsicExpansion", () => {
  test("part1", () => {
    expect(ComsicExpansionPartOne(example)).toBe(374);
    expect(ComsicExpansionPartOne(input)).toBe(10033566);
  });
  test("part2", () => {
    expect(ComsicExpansionPartTwo(example, 10)).toBe(1030);
    expect(ComsicExpansionPartTwo(input, 1000000)).toBe(560822911938);
  });
});
