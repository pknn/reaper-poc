import { Readable, State, Writable } from "../types"
import { readFrom, writeTo } from '../services/reducer'

const getWriteOpsArgs = ([p, q]: any[]): [keyof Readable, keyof Writable] =>
  [p as keyof Readable, q as keyof Writable]

export const execute = (state: State, args: any[]) => {
  const [from, to] = getWriteOpsArgs(args)
  const fromValue = readFrom(state, from)
  writeTo(state, to, fromValue)
}
