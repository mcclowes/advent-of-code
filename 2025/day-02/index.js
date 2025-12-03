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
      ? -nextAmount
      : nextAmount
  const normalizedValue = (current + nextValue) % (max + 1)

  let crossedZero = 0 
  if(normalizedValue === 0) crossedZero++ 
  if(current > 0 && nextValue > 100) crossedZero++ 
  if(current > 0 && nextValue < 0) crossedZero++ 

  const nextNext = Number(turnDial(normalizedValue, sequence))
  return crossedZero + nextNext
}

console.log(turnDial(start, sequence))
console.log(turnDial(start, input))
