import { test, describe, expect } from 'bun:test'
import input from '@data/day02/input_CubeConundrum.txt'
import example from '@data/day02/input_CubeConundrum.txt'
import { cubeConundrum, powerOfCubes } from '@code/02_CubeConundrum'

describe('part 1', () => {
  test(() => {
    // 12 red cubes, 13 green cubes, and 14 blue cubes
    // const exampleResult = cubeConundrum(example, 12, 13, 14)
    // console.log(exampleResult)
    const result = cubeConundrum(input, 12, 13, 14)
    console.log(result)
  })
})

describe('part 2', () => {
  test(() => {
    // const exampleResult = powerOfCubes(example)
    // console.log(exampleResult)
    const result = powerOfCubes(input, 12, 13, 14)
    console.log(result)
  })
})
