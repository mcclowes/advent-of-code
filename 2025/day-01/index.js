import { input } from './input.js'

const sequence = [
  'L68',
  'L30',
  'R48',
  'L5',
  'R60',
  'L55',
  'L1',
  'L99',
  'R14',
  'L82',
]

const start = 50
const max = 99

const turnDial = (current, seq) => {
  if (seq.length === 0) {
    return 0
  }

  const [next, ...sequence] = seq
  const [nextDirection, ...nextChars] = next.split('')

  const nextAmount = Number(nextChars.join(''))
  const nextValue =
    nextDirection === 'L'
      ? (current - nextAmount) % (max + 1)
      : (current + nextAmount) % (max + 1)

  console.log(next, sequence)
  console.log(nextValue)

  const nextNext = Number(turnDial(nextValue, sequence))
  return nextValue === 0 ? 1 + nextNext : nextNext
}

console.log(turnDial(start, sequence))
console.log(turnDial(start, input))
