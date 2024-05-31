import { expect, test, describe } from "bun:test";
import input from "@data/day09/input_MirageMaintenance.txt";
import example from "@data/day09/example_MirageMaintenance.txt";
import {
  MirageMaintenancePartOne,
  MirageMaintenancePartTwo,
} from "@code/09_MirageMaintenance";

describe("test 09_MirageMaintenance", () => {
  test("part1", () => {
    expect(MirageMaintenancePartOne(example)).toBe(114);
    expect(MirageMaintenancePartOne(input)).toBe(1969958987);
  });
  test("part2", () => {
    expect(MirageMaintenancePartTwo(example)).toBe(2);
    expect(MirageMaintenancePartTwo(input)).toBe(1068);
  });
});
