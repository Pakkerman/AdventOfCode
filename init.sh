#!/bin/bash

# createing new files for challenge
[ -z "$1" ] && echo "Usage [day] [name]" && exit 1
[ -z "$2" ] && echo "Usage [day] [name]" && exit 1

dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
echo "$dir"

# create ts
TSDir="$dir/src/TypeScript/code"
mkdir -p "$TSDir"
touch "$TSDir/$1_$2.ts"

[ -s $(echo "$TSDir/$1_$2.ts") ] ||
	echo "// Day $1 $2
export function $2PartOne(input: string) {
  
}
export function $2PartTwo(input: string) {
  
}
" >"$dir/src/TypeScript/code/$1_$2.ts"

# create test
testDir="$dir/src/TypeScript/tests"
mkdir -p "$testDir"
touch "$testDir/$1_$2.test.ts"

[ -s $(echo "$dir/src/TypeScript/tests/$1_$2.test.ts") ] ||
	echo "import { expect, test, describe } from 'bun:test'
import input from '@data/day$1/input_$2.txt'
import example from '@data/day$1/example_$2.txt'
import { $2PartOne, $2PartTwo } from '@code/$1_$2'

describe('test $1_$2', () => {
  test('part1', () => {
    expect($2PartOne(example).toBe(0))
    expect($2PartOne(input).toBe(0))
  })
  test('part2', () => {
    expect($2PartTwo(example).toBe(0))
    expect($2PartTwo(input).toBe(0))
  })
})
" >"$dir/src/TypeScript/tests/$1_$2.test.ts"

# create log
logDir="$dir/logs"
mkdir -p "$logDir"
touch "$logDir/$1_$2.md"
[ -s $(echo "$logDir/$1_$2.md") ] ||
	echo "# --- Day $1: $2 ---" >"$logDir/$1_$2.md"

# create empty data file
mkdir -p "$dir/data/day$1"
touch "$dir/data/day$1/input_$2.txt"
touch "$dir/data/day$1/example_$2.txt"
