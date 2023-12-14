import { expect, test, describe } from 'bun:test'
import input from '@data/day13/input_PointOfIncidence.txt'
import example from '@data/day13/example_PointOfIncidence.txt'
import {
  PointOfIncidencePartOne,
  PointOfIncidencePartTwo,
} from '@code/13_PointOfIncidence'

describe('test 13_PointOfIncidence', () => {
  test('part1', () => {
    // const result = PointOfIncidencePartOne(input)
    // console.log(result)
    const exampleRes = PointOfIncidencePartOne(example)
    console.log(exampleRes)
  })
  test('part2', () => {})
})
