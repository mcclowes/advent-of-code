const sequence = [
  "L68",
    "L30",
    "R48",
    "L5",
    "R60",
    "L55",
    "L1",
    "L99",
    "R14",
    "L82",
]

const start = 50
const max = 99

const turnDial = (current, seq) => {
    const [next, ...sequence] = seq
    const nextValue = (current + next) % (max + 1)
    return nextValue === 0
        ? 1 + turnDial(nextValue, sequence)
        : turnDial(nextValue, sequence)
}

console.log(turnDial(start, sequence))