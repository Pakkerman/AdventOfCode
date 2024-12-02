import { expect, test, describe } from "bun:test";
import input from "@data/day15/input_LensLibrary.txt";
import example from "@data/day15/example_LensLibrary.txt";
import { LensLibraryPartOne, LensLibraryPartTwo } from "@code/15_LensLibrary";

describe("test 15_LensLibrary", () => {
  test("part1", () => {
    expect(LensLibraryPartOne(example)).toBe(1320);
    expect(LensLibraryPartOne(input)).toBe(503487);
  });
  test("part2", () => {
    expect(LensLibraryPartTwo(example)).toBe(145);
    expect(LensLibraryPartTwo(input)).toBe(261505);
  });
});
