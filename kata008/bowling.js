export function game() {

}

export function roll(pinsLeft) {
  return Math.round(Math.random() * pinsLeft);
}

export function score() {
  let score = 0;
  let rollCount = 0;
  let firstRoll = 0;
  let secondRoll = 0;

  while (score < 10 & rollCount < 2) {
    rollCount++;
    score = score + roll(10 - score);
    if (rollCount === 1) {
      firstRoll = score;
      // frame.firstRoll = firstRoll;
      console.log(`First Roll ${firstRoll}`)
    }
    if (rollCount === 2) {
      secondRoll = score - firstRoll;
      // frame.secondRoll = secondRoll;
      console.log(`Second Roll ${secondRoll}`)
    }
  }

  return score;
}