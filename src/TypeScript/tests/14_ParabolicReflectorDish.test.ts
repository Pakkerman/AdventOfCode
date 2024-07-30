import { expect, test, describe } from "bun:test";
import input from "@data/day14/input_ParabolicReflectorDish.txt";
import example from "@data/day14/example_ParabolicReflectorDish.txt";
import {
  ParabolicReflectorDishPartOne,
  ParabolicReflectorDishPartTwo,
} from "@code/14_ParabolicReflectorDish";

describe("test 14_ParabolicReflectorDish", () => {
  // test("part1", () => {
  //   expect(ParabolicReflectorDishPartOne(example)).toBe(136);
  //   expect(ParabolicReflectorDishPartOne(input)).toBe(109596);
  // });
  test("part2", () => {
    ParabolicReflectorDishPartTwo(example);
    // ParabolicReflectorDishPartTwo(input);
    // expect(ParabolicReflectorDishPartTwo(example)).toBe(64);
    // expect(ParabolicReflectorDishPartTwo(input)).toBe(96105);
  });
});
