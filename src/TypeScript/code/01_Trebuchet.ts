// part 1
export function getCalibration(input: string): number {
  let sum = 0
  let firstDigit = ''
  let lastDigit = ''
  for (let i = 0; i < input.length; i++) {
    if (/[0-9]/.test(input[i])) {
      if (firstDigit === '') firstDigit = input[i]
      lastDigit = input[i]
    } else if (input[i] === '\n') {
      // console.log(sum, '+', firstDigit + lastDigit)
      sum += Number(firstDigit + lastDigit)
      firstDigit = ''
      lastDigit = ''
    }
  }
  return sum
}

// part 2
const spelledNumber = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
}

export function getCalibrationWithSpelledNumber(input: string): number {
  // try just cut all the stuff out using the map
  // xtwone3four
  // starting at 0
  // go throu list , no 'x', move to 1, substring is twone

  // get each line
  let sum = 0
  let lineEnd = 1
  for (let i = 0; i < input.length; i++) {
    while (input[lineEnd] !== '\n') lineEnd++
    const line = input.slice(i, lineEnd)

    sum += getLineDigits(line)
    // console.log(`sum: ${sum}`)
    i = lineEnd
    lineEnd = i + 1
  }

  return sum

  function getLineDigits(line: string): number {
    // console.log(line)
    let first = 0
    let last = 0
    let start = 0
    let end = 5

    while (start < line.length) {
      let curr = line.slice(start, end)
      // console.log(curr)
      let jump = 1
      for (let key of Object.keys(spelledNumber)) {
        if (curr.indexOf(key) !== 0) continue
        if (!first) first = spelledNumber[key]
        last = spelledNumber[key]
      }

      start += jump
      end += jump
    }
    // console.log(first, last)
    return first * 10 + last
  }
}
