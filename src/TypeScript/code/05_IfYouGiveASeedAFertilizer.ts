// Day 05 IfYouGiveASeedAFertilizer
export function IfYouGiveASeedAFertilizerPartOne(input: string): number {
  const lines = input.trim().split('\n')
  const seeds = lines[0]
    .split(': ')[1]
    .split(' ')
    .map((item) => +item)
  // console.log(seeds)

  // parse input and put all sets of ranges in a map<'from-to', ranges>
  const map = new Map()
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('map')) {
      const key = lines[i].split(' ')[0]
      map.set(key, [])

      let ranges = []
      for (let k = i + 1; lines[k] !== '' && k < lines.length; k++) {
        ranges.push(lines[k])
      }
      map.set(key, ranges)
    }
  }

  // process seeds one by one, going through each pairs and compute the next step
  // and keep track of the minimum
  let min = Infinity
  for (let seed of seeds) {
    // console.log('processing', seed)
    let next = seed
    for (let ranges of map.values()) {
      // console.log('looking at range: ', ranges)
      for (let range of ranges) {
        // console.log('looking in', range)
        const [dest, src, offset] = range.split(' ')
        const srcMin = +src
        const srcMax = +src + +offset
        if (srcMin <= next && next <= srcMax) {
          next += +dest - +src
          break
        }
        // console.log('next: ', next)
        // console.log('min', srcMin, 'max', srcMax)
      }
    }
    min = Math.min(min, next)
  }

  return min
}
export function IfYouGiveASeedAFertilizerPartTwo(input: string): number {
  const lines = input.trim().split('\n')
  const seeds = lines[0]
    .split(': ')[1]
    .split(' ')
    .map((item) => +item)

  // parse seeds range

  // parse input and put all sets of ranges in a map<'from-to', ranges>
  const map = new Map()
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('map')) {
      const key = lines[i].split(' ')[0]
      map.set(key, [])

      let ranges = []
      for (let k = i + 1; lines[k] !== '' && k < lines.length; k++) {
        ranges.push(lines[k].split(' ').map((item) => +item))
      }
      map.set(key, ranges)
    }
  }

  const lookup = new Map()
  for (const key of map.keys()) {
    const value = map.get(key)
    let lowerBound = Infinity
    let upperBound = -Infinity

    value.forEach((item) => {
      const input = item[1]
      const range = item[2]
      const lower = input
      const upper = input + range - 1
      lowerBound = Math.min(lower, lowerBound)
      upperBound = Math.max(upper, upperBound)
    })

    const lookupValue = {
      lowerBound,
      upperBound,
      ranges: Array.from({ length: value.length }, (_, idx) => {
        return {
          min: value[idx][1],
          max: value[idx][1] + value[idx][2] - 1,
          delta: value[idx][0] - value[idx][1],
        }
      }).sort((a, b) => a.min - b.min),
    }

    lookup.set(key, lookupValue)
  }

  console.log(lookup)

  let min = Infinity
  let chunks: [start: number, range: number][] = []
  for (let i = 0; i < seeds.length; i += 2) {
    chunks.push([seeds[i], seeds[i + 1]])
  }

  for (let [start, range] of chunks) {
    for (const { lowerBound, upperBound, ranges } of lookup.values()) {
      if (start < lowerBound || upperBound < start + range) continue
      for (const { min, max, delta } of ranges) {
        if (min <= start && start + range <= max) {
          start += delta
          continue
        }

        // if seeds span across the ranges
        // we need to chunk it up by first modify the within range, then push another chunk to the chunks array
      }
    }
  }
  return min
}
