import { expect, test, describe } from "bun:test";
import input from "@data/day16/input_TheFloorWillBeLava.txt";
import example from "@data/day16/example_TheFloorWillBeLava.txt";
import {
  TheFloorWillBeLavaPartOne,
  TheFloorWillBeLavaPartTwo,
} from "@code/16_TheFloorWillBeLava";

describe("test 16_TheFloorWillBeLava", () => {
  test("part1", () => {
    expect(TheFloorWillBeLavaPartOne(example)).toBe(46);
    expect(TheFloorWillBeLavaPartOne(input)).toBe(6795);
  });
  test("part2", () => {
    expect(TheFloorWillBeLavaPartTwo(example)).toBe(51);
    expect(TheFloorWillBeLavaPartTwo(input)).toBe(7154);
  });
});
