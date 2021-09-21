import { Literal, Readable, State, Writable } from "../types"
import { readFrom, readFromX, writeTo } from '../services/reducer'

type MathOpsKeys = 'addi' | 'subi' | 'muli' | 'divi' | 'modi'
type MathOpsFn = (a: number, b: number) => number

const mathOpsFnMap: Record<MathOpsKeys, MathOpsFn> = {
  "addi": (a: number, b: number) => a + b,
  "subi": (a: number, b: number) => a - b,
  "muli": (a: number, b: number) => a * b,
  "divi": (a: number, b: number) => a / b,
  "modi": (a: number, b: number) => a % b
}

const getMathsOpsArgs = ([p, q, r]: any[]): [keyof Readable, keyof Writable, keyof Readable | Literal] =>
  [p as keyof Readable, q as keyof Writable, r as keyof Readable | Literal]

export const isMathCommand = (command: string) => Object.keys(mathOpsFnMap).includes(command)

export const execute = (state: State, command: string, args: any[]) => {
  const [from, to, withs] = getMathsOpsArgs(args)
  writeTo(state, to, mathOpsFnMap[command](readFrom(state, from), readFromX(state, withs)))
}