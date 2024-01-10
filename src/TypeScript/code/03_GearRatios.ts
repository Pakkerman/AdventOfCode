// Day 03 GearRatios

const dir = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, 1],
  [0, -1],
  [1, 1],
  [1, 0],
  [1, -1],
]

export function GearRatiosPartOne(input: string): number {
  const matrix = input
    .split('\n')
    .slice(0, -1)
    .map((item) => item.split(''))

  let number: string[] = []
  let sum = 0
  let symbol = false
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      const curr = matrix[y][x]
      if (!Number.isInteger(+curr)) {
        if (symbol) {
          sum += +number.join('')
        }

        number = []
        symbol = false
        continue
      }

      for (const [yoff, xoff] of dir) {
        const adjy = y + yoff
        const adjx = x + xoff
        if (adjy < 0 || matrix.length <= adjy) continue
        if (adjx < 0 || matrix[adjy].length <= adjx) continue

        const adj = matrix[y + yoff][x + xoff]
        if (adj.match(/[^\d.]/)) symbol = true
      }
      number.push(curr)
    }
  }
  return sum
}

export function GearRatiosPartTwo(input: string): number {
  const matrix = input
    .split('\n')
    .slice(0, -1)
    .map((item) => item.split(''))

  let numbers = []
  let number: string[] = []
  let sum = 0
  let asterisk = { x: -1, y: -1 }
  let pushed = false
  let symbol = false
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      const curr = matrix[y][x]
      if (!Number.isInteger(+curr)) {
        symbol = false
        pushed = false
        number = []
        continue
      }

      asterisk = { x: -1, y: -1 }
      for (const [yoff, xoff] of dir) {
        const adjy = y + yoff
        const adjx = x + xoff
        if (adjy < 0 || matrix.length <= adjy) continue
        if (adjx < 0 || matrix[adjy].length <= adjx) continue

        const adj = matrix[y + yoff][x + xoff]
        if (adj === '*') {
          symbol = true
          asterisk = { y: adjy, x: adjx }
        }
      }
      number.push(curr)
      if (asterisk.x !== -1 && asterisk.y !== -1 && !pushed) {
        numbers.push([number, asterisk])
        pushed = true
      }
    }
  }

  const map = new Map()

  numbers.forEach((item) => {
    const key = `${item[1].y}/${item[1].x}`
    if (!map.has(key)) map.set(key, [])
    map.get(key).push(+item[0].join(''))
  })

  for (const value of map.values()) {
    if (value.length === 2) sum += value[0] * value[1]
  }

  return sum
}
