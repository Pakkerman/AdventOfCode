import { expect, test, describe } from "bun:test";
import input from "@data/day10/input_PipeMaze.txt";
import example from "@data/day10/example_PipeMaze.txt";
import { PipeMazePartOne, PipeMazePartTwo } from "@code/10_PipeMaze";

const example2 = `.F----7F7F7F7F-7....
.|F--7||||||||FJ....
.||.FJ||||||||L7....
FJL7L7LJLJ||LJ.L-7..
L--J.L7...LJS7F-7L7.
....F-J..F7FJ|L7L7L7
....L7.F7||L7|.L7L7|
.....|FJLJ|FJ|F7|.LJ
....FJL-7.||.||||...
....L---J.LJ.LJLJ...`;

describe("test 10_PipeMaze", () => {
  test("part1", () => {
    // expect(PipeMazePartOne(example)).toBe(8);
    // expect(PipeMazePartOne(input)).toBe(7173);
  });
  test("part2", () => {
    expect(PipeMazePartTwo(example2)).toBe(10);
    expect(PipeMazePartTwo(input)).toBe(291);
  });
});
