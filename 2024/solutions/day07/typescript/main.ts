function parse(input: string): Array<[value: number, ...operants: number[]]> {
  const lines = input
    .trim()
    .split("\n")
    .map((item) => item.split(":"));
  return lines.map((item) => [
    +item[0],
    ...item[1]
      .split(" ")
      .filter((a) => a)
      .map((a) => +a),
  ]);
}

export function partOne(input: string): number {
  const operators = ["+", "*"];
  const equations = parse(input);
  return solve(operators, equations);
}
export function partTwo(input: string): number {
  const operators = ["+", "*", "||"];
  const equations = parse(input);
  return solve(operators, equations);
}

function solve(operators: string[], equations: number[][]): number {
  let out = 0;
  for (let i = 0; i < equations.length; i++) {
    const target = equations[i][0];
    const operants = equations[i].slice(1);
    const numberOfOperators = operants.length - 1;
    console.log("calculate wiht length of", numberOfOperators);
    const operatorsCombo = getAllOperatorCombo(operators, numberOfOperators);

    // get all operations to calculate answer
    const operations: (number | string)[][] = [];
    for (let k = 0; k < operatorsCombo.length; k++) {
      const curr: (number | string)[] = [];
      for (let j = 0; j < operatorsCombo[k].length; j++) {
        curr.push(operants[j]);
        curr.push(operatorsCombo[k][j]);
      }
      curr.push(operants[operants.length - 1]);

      operations.push(curr);
    }

    // calculate all operations, if match with target, add target to output
    for (let k = 0; k < operations.length; k++) {
      const operation = operations[k];

      for (let j = 1; j < operation.length; j += 2) {
        const operant = operation[j + 1];
        const operator = operation[j];
        if (operator === "+") {
          operation[0] = +operation[0] + +operant;
        } else if (operator === "*") {
          operation[0] = +operation[0] * +operant;
        } else if (operator === "||") {
          operation[0] = +(operation[0].toString() + operant.toString());
        }
      }

      if (operation[0] === target) {
        out += target;
        break;
      }
    }
  }

  return out;
}

function getAllOperatorCombo(operators: string[], length: number): string[][] {
  if (length === 1) {
    console.log(
      "length === 1, return",
      operators.map((op) => [op]),
    );
    return operators.map((op) => [op]);
  }

  console.log("call fn with", operators, length);
  const smallerCombinations = getAllOperatorCombo(operators, length - 1);
  console.log("\tsmaller: ", smallerCombinations);
  const combos = [];
  for (const c of smallerCombinations) {
    console.log("\tprocessing:", c);
    for (const operator of operators) {
      console.log("\t\tprocessing:", operator);
      console.log("\t\tpushing", [...c, operator]);
      combos.push([...c, operator]);
    }
    console.log("\tresult:", combos);
  }

  console.log("return combos:", combos);
  return combos;
}
