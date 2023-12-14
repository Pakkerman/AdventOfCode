// not 32638

// Day 13 PointOfIncidence

// input always has odd number of columns and rows so the first step is to trim

// the first one in the input is horizontal, so does the second one

// result require all the sum of all vertical lines + sum of all horizontal lines * 100

// once find the same 2 line, see if it reach the edge. if not, rotate left and try again,

export function PointOfIncidencePartOne(input: string) {
  let horizontalSum = 0
  let verticalSum = 0

  // get pattern into a matrix
  const inputSplit = input.split('\n')
  // inputSplit.forEach((item, idx) => console.log(idx, item))
  let matrix: string[] = []
  for (let i = 0; i < inputSplit.length; i++) {
    const row = inputSplit[i]
    if (row.length) {
      matrix.push(row)
    } else {
      const [type, count] = getCount('horizontal', matrix)
      console.log(type, count)
      if (type === 'vertical') verticalSum += count
      if (type === 'horizontal') horizontalSum += count
      matrix = []
    }
  }

  return verticalSum + horizontalSum * 100

  function getCount(
    type: 'vertical' | 'horizontal',
    matrix: string[],
    count: number = 0
  ): [type: 'vertical' | 'horizontal', count: number] {
    console.log(matrix)
    let up = 0
    let down = 0
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i] !== matrix[i + 1]) continue

      up = i
      down = i + 1
      count = Math.max(i + 1, count)
      while (matrix[up - 1] === matrix[down + 1]) {
        up--
        down++
      }
    }

    let recurseCount = 0
    if (up === 0 || down === matrix.length - 1) {
      return [type, count]
      // console.log(typeh, other)
      // count = Math.max(count, recurseCount)
      // if (count < recurseCount) type = 'vertical'
    } else {
      const rotated = rotateLeft(matrix)
      const [a, other] = getCount('vertical', rotated, count)
      recurseCount = other
    }

    console.log('here')
    count = Math.max(count, recurseCount)
    if (count < recurseCount) type = 'vertical'
    return [type, count]

    // if (count > other) othertype = 'vertical'

    // }
  }

  function rotateLeft(matrix: string[]): string[] {
    const out: string[] = Array.from({ length: matrix[0].length }, () => '')
    for (let i = 0; i < matrix.length; i++) {
      for (let k = 0; k < matrix[i].length; k++) {
        out[k] += matrix[i][k]
      }
    }
    return out
  }
}

export function PointOfIncidencePartTwo() {}
