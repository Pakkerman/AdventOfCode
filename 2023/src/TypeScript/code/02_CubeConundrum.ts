export function cubeConundrum(
  games: string,
  red: number,
  green: number,
  blue: number
): number {
  // get line by line
  // get gameId, red, green, blue
  // rule out 'impossible' games
  // add id to sum

  const lines: string[] = games.split('\n')
  const limit: Record<string, number> = { red, green, blue }

  let sum: number = 0
  gameloop: for (let i = 0; i < lines.length - 1; i++) {
    const game: string = lines[i]
    const id: number = +game.split(':')[0].split(' ')[1]

    const rounds: string[] = game.split(':')[1].split(';')
    for (let round of rounds) {
      const sets: string[] = round.split(',')
      for (let set of sets) {
        const cube: string[] = set.split(' ')
        const color: string = cube[2]
        const count: number = +cube[1]
        if (count <= limit[color]) continue

        continue gameloop
      }
    }

    sum += id
  }

  return sum
}

// part 2
export function powerOfCubes(input: string): number {
  let sumOfpowers = 0
  const lines = input.split('\n')
  for (let i = 0; i < lines.length - 1; i++) {
    const game = lines[i].split(':')[1]
    const sets = game.split(';')
    let gameMax = 1
    const power = [1, 1, 1]
    for (let set of sets) {
      const round = set.split(' ')
      round.shift()

      for (let i = 0; i < round.length; i += 2) {
        const color = round[i + 1].replace(',', '')
        const count = round[i]
        if (color === 'green') {
          power[0] = Math.max(+count, power[0])
        } else if (color === 'blue') {
          power[1] = Math.max(+count, power[1])
        } else if (color === 'red') {
          power[2] = Math.max(+count, power[2])
        }
      }

      gameMax = Math.max(
        power.reduce((acc, curr) => acc * curr),
        gameMax
      )
    }
    sumOfpowers += gameMax
  }

  return sumOfpowers
}
