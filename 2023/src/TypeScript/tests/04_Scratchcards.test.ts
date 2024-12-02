import { expect, test, describe } from 'bun:test'
import input from '@data/day04/input_Scratchcards.txt'
import example from '@data/day04/example_Scratchcards.txt'
import { ScratchcardsPartOne, ScratchcardsPartTwo } from '@code/04_Scratchcards'

console.log(example)

describe('test 04_Scratchcards', () => {
  test('part1', () => {
    const exampleResult = ScratchcardsPartOne(example)
    expect(exampleResult).toBe(13)

    const result = ScratchcardsPartOne(input)
    expect(result).toBe(18653)
  })
  test('part2', () => {
    const exampleResult = ScratchcardsPartTwo(example)
    expect(exampleResult).toBe(30)

    const result = ScratchcardsPartTwo(input)
    expect(result).toBe(5921508)
  })
})
