import { expect, test, describe } from 'bun:test'
import input from '@data/day05/input_IfYouGiveASeedAFertilizer.txt'
import example from '@data/day05/example_IfYouGiveASeedAFertilizer.txt'
import {
  IfYouGiveASeedAFertilizerPartOne,
  IfYouGiveASeedAFertilizerPartTwo,
} from '@code/05_IfYouGiveASeedAFertilizer'

// console.log(example)

// 1.5 hour
describe('test 05_IfYouGiveASeedAFertilizer', () => {
  test('part1', () => {
    const exampleResult = IfYouGiveASeedAFertilizerPartOne(example)
    expect(exampleResult).toBe(35)
    const result = IfYouGiveASeedAFertilizerPartOne(input)
    expect(result).toBe(174137457)
  })
  test('part2', () => {
    const exampleResult = IfYouGiveASeedAFertilizerPartTwo(example)
    expect(exampleResult).toBe(46)
    // const result = IfYouGiveASeedAFertilizerPartTwo(input)
    // console.log(result)
  })
})
