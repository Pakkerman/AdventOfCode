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
      const [type, count] = getCount(matrix)
      console.log('return from get count', type, count)
      if (type === 'vertical') verticalSum += count
      if (type === 'horizontal') horizontalSum += count
      matrix = []
    }
  }

  return verticalSum + horizontalSum * 100

  function getCount(
    matrix: string[]
  ): [type: 'vertical' | 'horizontal', count: number] {
    let verticalCount = 0
    let horizontalCount = 0
    let up = 0
    let down = 0

    let cols = '# '
    for (let i = 0; i < matrix[0].length; i++) cols += i.toString()
    console.log(cols)
    matrix.forEach((row, idx) => console.log(idx, row))

    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i] !== matrix[i + 1]) continue

      up = i
      down = i + 1
      while (matrix[up] === matrix[down]) {
        up--
        down++
      }

      console.log('hor', up, down)
      if (up < 0 || matrix.length <= down) {
        horizontalCount = Math.max(horizontalCount, i + 1)
        return ['horizontal', horizontalCount]
      }
    }

    const rotated = rotateLeft(matrix)
    cols = '# '
    for (let i = 0; i < rotated[0].length; i++) cols += i.toString()
    rotated.forEach((row, idx) => console.log(idx, row))

    for (let i = 0; i < rotated.length; i++) {
      if (rotated[i] !== rotated[i + 1]) continue

      up = i
      down = i + 1
      while (rotated[up] === rotated[down]) {
        up--
        down++
      }

      if (up < 0 || rotated.length <= down) {
        verticalCount = Math.max(verticalCount, i + 1)
      }
    }

    return ['vertical', verticalCount]
  }
}

export function PointOfIncidencePartTwo(input: string): number {
  // maybe add a fixed boolean variable, and if

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
      const [type, count] = getCount(matrix)
      console.log('return from get count', type, count)

      if (type === 'vertical') verticalSum += count
      if (type === 'horizontal') horizontalSum += count
      matrix = []
    }
  }

  return verticalSum + horizontalSum * 100

  function getCount(
    matrix: string[]
  ): [type: 'vertical' | 'horizontal', count: number] {
    let verticalCount = 0
    let horizontalCount = 0
    let up = 0
    let down = 0

    let cols = '#  123456789ABCDEF'
    console.log(cols)
    matrix.forEach((row, idx) =>
      console.log(idx.toString().padStart(2, '0'), row)
    )

    let fixed = false

    console.log('check horz')
    horizontalCount = checkPattern(matrix)
    if (fixed) return ['horizontal', horizontalCount]

    const rotated = rotateLeft(matrix)
    console.log('check vert')
    verticalCount = checkPattern(rotated)
    return ['vertical', verticalCount]

    console.log('return of checkPattern', horizontalCount, verticalCount)

    function checkPattern(matrix: string[]): number {
      for (let i = 0; i < matrix.length; i++) {
        console.log(
          'found adjacent line with smudge!',
          hasSmudge(matrix[i], matrix[i + 1])
        )
        if (hasSmudge(matrix[i], matrix[i + 1])) {
          return i + 1
        }

        if (matrix[i] !== matrix[i + 1]) continue

        up = i
        down = i + 1

        while (matrix[up] === matrix[down]) {
          up--
          down++
          fixed = hasSmudge(matrix[up], matrix[down])
        }
        console.log(fixed)
        if (fixed) {
          up--
          down++
        }

        console.log('hor', up, down)
        if (fixed && (up < 0 || matrix.length <= down)) {
          horizontalCount = Math.max(horizontalCount, i + 1)
          return i + 1
        }
      }
    }

    // console.log('rotated to check vertical: ')
    // console.log(cols)
    // const rotated = rotateLeft(matrix)
    // rotated.forEach((row, idx) =>
    //   console.log(idx.toString().padStart(2, '0'), row)
    // )

    // for (let i = 0; i < rotated.length; i++) {
    //   let fixed = false

    //   console.log(
    //     'found adjacent line with smudge!',
    //     hasSmudge(matrix[i], matrix[i + 1])
    //   )
    //   if (hasSmudge(matrix[i], matrix[i + 1])) {
    //     return ['horizontal', i + 1]
    //   }

    //   if (rotated[i] !== rotated[i + 1]) continue

    //   up = i
    //   down = i + 1
    //   while (rotated[up] === rotated[down]) {
    //     up--
    //     down++
    //     fixed = hasSmudge(matrix[up], matrix[down])
    //   }

    //   console.log(fixed)
    //   if (fixed) {
    //     up--
    //     down++
    //   }

    //   if (up < 0 || rotated.length <= down) {
    //     verticalCount = Math.max(verticalCount, i + 1)
    //   }
    // }

    // return ['vertical', verticalCount]
  }
}

function hasSmudge(a: string, b: string): boolean {
  if (!a || !b) return false
  if (a === b) return false

  console.log('\tfinding')
  console.log('\t', a)
  console.log('\t', b)

  let findSmudge = false
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) continue
    if (findSmudge) return false
    findSmudge = true
  }

  return true
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
