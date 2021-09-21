import { join } from "path"
import { readLines } from "../helpers/fileIO"
import { zip } from "../helpers/misc"
import { State } from "../types"
import * as MathOperation from '../operations/MathOperation'
import * as WriteOperation from '../operations/WriteOperation'

export const runLine = (state: State, line: string) => {
  const splitted = line.split(' ')
  const command = splitted.shift()
  const args = splitted

  if (MathOperation.isMathCommand(command)) {
    MathOperation.execute(state, command, args)
  } else {
    switch(command) {
      case 'copy':
        WriteOperation.execute(state, args)
        break
    }
  }
}

export const run = (itemDir: string) => {
  const input = readLines(join(itemDir, 'input')).map(v => parseInt(v))
  const codeLines = readLines(join(itemDir, 'code'))
  const expectedOutputs = readLines(join(itemDir, 'solution')).map(v => parseInt(v))
  const state: State = {
    input,
    output: [],
    x: 0,
    y: 0
  }
  console.log("Initial state: ", state)
  codeLines.forEach(line => {
    runLine(state, line)
    console.log(state)
  })
  const result = zip(expectedOutputs, state.output).every(([a, b]) => a === b)
  console.log(result ? 'Passed' : 'Failed')
}
