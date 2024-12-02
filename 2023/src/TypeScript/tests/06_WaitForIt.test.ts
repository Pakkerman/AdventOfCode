import { expect, test, describe } from "bun:test";
import input from "@data/day06/input_WaitForIt.txt";
import example from "@data/day06/example_WaitForIt.txt";
import { WaitForItPartOne, WaitForItPartTwo } from "@code/06_WaitForIt";

describe("test 06_WaitForIt", () => {
  test("part1", () => {
    // expect(WaitForItPartOne(example)).toBe(288);
    // expect(WaitForItPartOne(input)).toBe(2344708);
  });

  test("part2", () => {
    expect(WaitForItPartTwo(example)).toBe(71503);
    expect(WaitForItPartTwo(input)).toBe(30125202);
  });
});
