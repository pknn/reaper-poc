export type IOStream = number[]
export type Input = {
  input: IOStream
}
export type Output = {
  output: IOStream
}
export type IO = Input & Output

export type Register = {
  x: number
  y: number
}

export type Readable = Input & Register
export type Writable = Output & Register
export type Literal = number

export type State = IO & Register