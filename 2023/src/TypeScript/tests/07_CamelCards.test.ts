import { expect, test, describe } from "bun:test";
import input from "@data/day07/input_CamelCards.txt";
import example from "@data/day07/example_CamelCards.txt";
import { CamelCardsPartOne, CamelCardsPartTwo } from "@code/07_CamelCards";

describe("test 07_CamelCards", () => {
  test("part1", () => {
    const exampleResult = CamelCardsPartOne(example);
    const inputResult = CamelCardsPartOne(input);

    expect(exampleResult).toBe(6440);
    expect(inputResult).toBe(251106089);
  });
  test("part2", () => {
    const exampleResult = CamelCardsPartTwo(example);
    const inputResult = CamelCardsPartTwo(input);

    expect(exampleResult).toBe(5905);
    expect(inputResult).toBe(249620106);
  });
});
