function game() {
  const scoringBoard = {
    frame_01: {
      firstRoll: 1,
      secondRoll: 4,
      score: 5,
      totalScore: 5
    },
    frame_02: {
      firstRoll: 4,
      secondRoll: 5,
      score: 9,
      totalScore: 14
    },
    frame_03: {
      firstRoll: 6,
      secondRoll: 4,
      score: 10,
      totalScore: 24
    },
    frame_04: {
      firstRoll: 5,
      secondRoll: 5,
      score: 10
    }
  };

  const scoreBoard = [];
  for(let i = 1; i <= 11; i++) {
    score(i, scoreBoard);
  }

  return scoreBoard;
}

function roll(pinsLeft) {
  return Math.round(Math.random() * pinsLeft);
}

function score(frameNumber, scoreArray) {
  let score = 0;
  let rollCount = 0;
  let strike = 0;
  let spare = 0;
  let firstRoll = 0;
  let secondRoll = 0;
  const currentFrame = frameNumber -1;
  const frame = {};
  frame.id = frameNumber;
  frame.isStrike = 'no';
  frame.isSpare = 'no';
  while (score < 10 & rollCount < 2) {
    rollCount++;
    score = score + roll(10 - score);
    if (rollCount === 1) {
      firstRoll = score;
      frame.firstRoll = firstRoll;
      // console.log(`First Roll ${firstRoll}`)
    }
    if (rollCount === 2) {
      secondRoll = score - firstRoll;
      frame.secondRoll = secondRoll;
      // console.log(`Second Roll ${secondRoll}`)
    }
  }

  if (score === 10 && rollCount === 1) {
    strike = 1;
    // console.log(`It's a strike!!`)
    frame.isStrike = 'yes';
  }
  if (score == 10 && rollCount === 2) {
    spare = 1;
    frame.isSpare = 'yes';
    // console.log(`It's a spare!!`)
  }
  frame.frameScore = score;

  // console.log(scoreArray);

  scoreArray.push(frame);

  if (currentFrame === 0 || currentFrame === 11) {
    scoreArray[currentFrame].totalScore = scoreArray[currentFrame].frameScore;
  } else if (currentFrame >= 1 && currentFrame < 2) {
    const prevFrame = scoreArray[currentFrame - 1];
    // console.log(scoreArray[currentFrame - 1].frameScore)
    // console.log(scoreArray[currentFrame].frameScore)
    // console.log(scoreArray[currentFrame - 1].isSpare)
    if (scoreArray[currentFrame - 1].isSpare === 'yes') {
      // console.log(`Spare Roll ${firstRoll}`)
      scoreArray[currentFrame - 1].totalScore = scoreArray[currentFrame - 1].totalScore + firstRoll;
      // console.log(`Spare Score ${scoreArray[currentFrame - 1].totalScore}`);
      scoreArray[currentFrame].totalScore = scoreArray[currentFrame - 1].totalScore + scoreArray[currentFrame].frameScore;
    } else if (scoreArray[currentFrame - 1].isSpare === 'no' && scoreArray[currentFrame - 1].isStrike === 'no') {
      scoreArray[currentFrame].totalScore = scoreArray[currentFrame - 1].frameScore + scoreArray[currentFrame].frameScore;
      // console.log(scoreArray[currentFrame].totalScore);
    }

    if (scoreArray[currentFrame - 1].isStrike === 'yes') {
      // console.log(`Strike Roll 1 ${firstRoll}`);
      // console.log(`Strike Roll 2 ${secondRoll}`);
      scoreArray[currentFrame - 1].totalScore = scoreArray[currentFrame - 1].totalScore + firstRoll + secondRoll;
      // console.log(`Strike Score ${scoreArray[currentFrame - 1].totalScore}`);
      scoreArray[currentFrame].totalScore = scoreArray[currentFrame - 1].totalScore + scoreArray[currentFrame].frameScore;
    }
    
  } else if (currentFrame >= 2) {
    // console.log(scoreArray[currentFrame - 1].totalScore)
    // console.log(scoreArray[currentFrame].frameScore)
    // console.log(scoreArray[currentFrame - 1].isSpare)
    if (scoreArray[currentFrame - 1].isSpare === 'yes') {
      // console.log(`Spare Roll ${firstRoll}`)
      scoreArray[currentFrame - 1].totalScore = scoreArray[currentFrame - 1].totalScore + firstRoll;
      // console.log(`Spare Score ${scoreArray[currentFrame - 1].totalScore}`);
      scoreArray[currentFrame].totalScore = scoreArray[currentFrame - 1].totalScore + scoreArray[currentFrame].frameScore;
    } else if (scoreArray[currentFrame - 1].isSpare === 'no' && scoreArray[currentFrame - 1].isStrike === 'no') {
      scoreArray[currentFrame].totalScore = scoreArray[currentFrame - 1].totalScore + scoreArray[currentFrame].frameScore;
      // console.log(scoreArray[currentFrame].totalScore);
    }

    if (scoreArray[currentFrame - 1].isStrike === 'yes') {
      // console.log(`Strike Roll 1 ${firstRoll}`);
      // console.log(`Strike Roll 2 ${secondRoll}`);
      scoreArray[currentFrame - 1].totalScore = scoreArray[currentFrame - 1].totalScore + firstRoll + secondRoll;
      // console.log(`Strike Score ${scoreArray[currentFrame - 1].totalScore}`);
      scoreArray[currentFrame].totalScore = scoreArray[currentFrame - 1].totalScore + scoreArray[currentFrame].frameScore;
    }
    
  } 

  // console.log(`Frame ${frameNumber} Score ${score}`);
  // console.log(`Frame ${frameNumber} Total Score ${scoreArray[currentFrame].totalScore}`);
}

const dataGame = game();
console.log(dataGame);
const frameScores = document.querySelectorAll('.frame-score');
const firstRolls = document.querySelectorAll('.roll-1');
const secondRolls = document.querySelectorAll('.roll-2');


frameScores.forEach((framescore, index) => {
  framescore.innerHTML = dataGame[index].totalScore;
  firstRolls[index].innerHTML = dataGame[index].firstRoll;
  secondRolls[index].innerHTML = dataGame[index].secondRoll;
  if (dataGame[index].isStrike === 'yes') {
    secondRolls[index].classList.add('roll-strike');
    secondRolls[index].innerHTML = '';
  }
  if (dataGame[index].isSpare === 'yes') {
    secondRolls[index].classList.add('roll-spare');
    secondRolls[index].innerHTML = '';
  }
})