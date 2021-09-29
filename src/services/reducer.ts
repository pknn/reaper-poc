import { Literal, Readable, State, Writable } from "../types"

export const readFrom = (state: State, fromKey: keyof Readable) => 
  (fromKey === 'input' ? state.input.shift() : state[fromKey]) as number

export const readFromX = (state: State, fromKey: keyof Readable | Literal) =>
  typeof(fromKey) === 'number' ? fromKey : readFrom(state, fromKey)

export const writeTo = (state: State, toKey: keyof Writable, value: number) =>
  toKey === 'output' 
    ? state.output.push(value) 
    : state[toKey] = value