import { expect, test, describe } from "bun:test";
import input from "@data/day13/input_PointOfIncidence.txt";
import example from "@data/day13/example_PointOfIncidence.txt";
import {
  PointOfIncidencePartOne,
  PointOfIncidencePartTwo,
} from "@code/13_PointOfIncidence";

describe("test 13_PointOfIncidence", () => {
  // test("part1", () => {
  //   const exampleRes = PointOfIncidencePartOne(example);
  //   expect(exampleRes).toBe(405);
  //   const result = PointOfIncidencePartOne(input);
  //   expect(result).toBe(36015);
  // });
  test("part2", () => {
    const exampleRes = PointOfIncidencePartTwo(example);
    expect(exampleRes).toBe(400);
    const result = PointOfIncidencePartTwo(input);
    expect(result).toBe(35335);
  });
});
