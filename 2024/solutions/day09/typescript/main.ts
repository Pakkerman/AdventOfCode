function parse(input: string): string {
  return input.trim();
}

export function partOne(input: string): number {
  const data = parse(input);
  const blocks = constructDataBlocks(data);

  let emptyPtr = 0;
  for (let i = blocks.length - 1; i > 0; i--) {
    while (blocks[emptyPtr] != ".") emptyPtr++;
    // console.log("i", i);
    // console.log("emptySlotIdx", emptySlotIdx);
    if (i <= emptyPtr) break;

    const curr = blocks[i];
    if (curr === ".") continue;

    blocks[emptyPtr] = blocks[i];
    blocks[i] = ".";

    // console.log(blocks.join(""));
  }

  return checkSum(blocks);
}

export function partTwo(input: string): number {
  const data = parse(input);
  const blocks = constructDataBlocks(data);

  // console.log(blocks.join("|"));

  const emptySlots: [ptr: number, size: number][] = [];
  for (let i = 0; i < blocks.length; i++) {
    if (blocks[i] !== ".") continue;

    let size = 0;
    for (let k = i; k < blocks.length; k++) {
      if (blocks[k] !== ".") break;
      size++;
    }

    emptySlots.push([i, size]);
    i += size;
  }

  const dataBlocks: [ptr: number, size: number][] = [];
  for (let i = 0; i < blocks.length; i++) {
    if (blocks[i] === ".") continue;

    let size = 0;
    while (blocks[i] === blocks[i + size]) {
      size++;
    }

    dataBlocks.push([i, size]);
    i += size - 1;
  }

  // console.log(emptySlots);
  // console.log(dataBlocks);
  while (dataBlocks.length) {
    const [blockPtr, blockSize] = dataBlocks.pop()!;

    for (let i = 0; i < emptySlots.length; i++) {
      const [slotPtr, slotSize] = emptySlots[i];
      if (slotSize === 0) continue;
      if (slotSize < blockSize) continue;
      if (blockPtr < slotPtr) continue;

      // console.log("match", blockPtr, blockSize, slotPtr, slotSize);
      emptySlots[i][0] = slotPtr + blockSize;
      emptySlots[i][1] = slotSize - blockSize;

      // swap the elements
      for (let k = 0; k < blockSize; k++) {
        blocks[slotPtr + k] = blocks[blockPtr + k];
        blocks[blockPtr + k] = ".";
      }

      break;
    }
  }

  // console.log(blocks.join("|"));
  return checkSum(blocks);
}

function checkSum(blocks: string[]): number {
  let out = 0;
  for (let i = 0; i < blocks.length; i++) {
    if (blocks[i] === ".") continue;
    out += i * +blocks[i];
  }
  return out;
}

function constructDataBlocks(data: string): string[] {
  const blocks: string[] = [];
  let id = 0;
  for (let i = 0; i < data.length; i++) {
    const amount = +data[i];
    if (i % 2 === 0) {
      const block = String(id);
      for (let i = 0; i < amount; i++) {
        blocks.push(block);
      }
      id++;
    } else {
      blocks.push(...".".repeat(amount).split(""));
    }
  }
  return blocks;
}
