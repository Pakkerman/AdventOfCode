// Day 04 Scratchcards
export function ScratchcardsPartOne(input: string): number {
  // put the first part in a set, loop throught the second part and get lookup in set
  const lines = input.split('\n').slice(0, -1)
  let sum = 0
  for (const line of lines) {
    const set = new Set<string>()
    const numbers = line.split(':')[1].split('|')
    const winningNumbers = numbers[0].trim().split(' ')
    const scratchNumbers = numbers[1].trim().split(' ')

    winningNumbers.forEach((item) => {
      if (item !== '') set.add(item)
    })
    let product = 0
    scratchNumbers.forEach((item) => {
      if (set.has(item)) {
        if (product === 0) product = 1
        else product *= 2
      }
    })

    sum += product
  }

  return sum
}
export function ScratchcardsPartTwo(input: string): number {
  // put the first part in a set, loop throught the second part and get lookup in set
  const lines = input.split('\n').slice(0, -1)
  const instances: number[] = new Array(lines.length).fill(1)
  for (let i = 0; i < lines.length; i++) {
    const set = new Set<string>()
    const numbers = lines[i].split(':')[1].split('|')
    const [winningNumbers, scratchNumbers] = numbers.map((item) =>
      item.trim().split(' ')
    )

    winningNumbers.forEach((item) => {
      if (item === '') return
      set.add(item)
    })

    let idx = i + 1
    scratchNumbers.forEach((item) => {
      if (!set.has(item)) return
      instances[idx++] += instances[i]
    })
  }

  return instances.reduce((acc, curr) => acc + curr)
}
