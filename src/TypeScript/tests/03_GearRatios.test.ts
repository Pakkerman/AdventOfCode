import { expect, test, describe } from 'bun:test'
import input from '@data/day03/input_GearRatios.txt'
import example from '@data/day03/example_GearRatios.txt'
import { GearRatiosPartOne, GearRatiosPartTwo } from '@code/03_GearRatios'

console.log(example)

describe('test 03_GearRatios', () => {
  test('part1', () => {
    const exampleResult = GearRatiosPartOne(example)
    expect(exampleResult).toBe(4361)
    const result = GearRatiosPartOne(input)
    expect(result).toBe(539637)
  })
  test('part2', () => {
    const exampleResult = GearRatiosPartTwo(example)
    console.log('exampleResult', exampleResult)
    expect(exampleResult).toBe(467835)
    const result = GearRatiosPartTwo(input)
    console.log('result: ', result)
  })
})
