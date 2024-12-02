import { expect, test, describe } from 'bun:test'
import input from '@data/day01/input_Trebuchet.txt'
import example from '@data/day01/example_Trebuchet.txt'
import {
  getCalibration,
  getCalibrationWithSpelledNumber,
} from '@code/01_Trebuchet'

// Input is not the same for every user, hard coded result for testing will vary for users

describe('Day 01', () => {
  test('part1', () => {
    const result = getCalibration(input)
    expect(result).toBe(55123)
  })

  test('part2', () => {
    const result = getCalibrationWithSpelledNumber(input)
    const exampleResult = getCalibrationWithSpelledNumber(example)

    expect(result).toBe(55260)
    expect(exampleResult).toBe(281)
  })
})
