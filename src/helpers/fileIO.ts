import { readFileSync } from 'fs'

export const read = (path: string) => readFileSync(path).toString('utf-8')
export const readLines = (path: string) => read(path).split('\n')