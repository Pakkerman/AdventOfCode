import { expect, test, describe } from "bun:test";
import input from "@data/day08/input_HauntedWasteland.txt";
import example from "@data/day08/example_HauntedWasteland.txt";
import {
  HauntedWastelandPartOne,
  HauntedWastelandPartTwo,
} from "@code/08_HauntedWasteland";

describe("test 08_HauntedWasteland", () => {
  test("part1", () => {
    const exampleResult = HauntedWastelandPartOne(example);
    const inputResult = HauntedWastelandPartOne(input);

    expect(exampleResult).toBe(2);
    expect(inputResult).toBe(18673);
  });
  test("part2", () => {
    const example = `
LR

11A = (11B, XXX)
11B = (XXX, 11Z)
11Z = (11B, XXX)
22A = (22B, XXX)
22B = (22C, 22C)
22C = (22Z, 22Z)
22Z = (22B, 22B)
XXX = (XXX, XXX)
`;
    const exampleResult = HauntedWastelandPartTwo(example);
    const inputResult = HauntedWastelandPartTwo(input);

    expect(exampleResult).toBe(6);
    expect(inputResult).toBe(17972669116327);
  });
});
