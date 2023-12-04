import fs from "fs";

const inputLines = fs.readFileSync("./input.txt", "utf8").trim().split("\n");

let totalPoints = 0;

for (let i = 0; i < inputLines.length; i++) {
  let cardPoints = 0;
  let matchedWinningNumbers = [];

  const card = inputLines[i];
  const cardNumbers = card
    .split(":")[1]
    .split("|")
    .map((numbers) => numbers.trim().split(" "));
  const winningNumbers = cardNumbers[0].filter((num) => num !== "");
  const candidateNumbers = cardNumbers[1].filter((num) => num !== "");

  for (let j = 0; j < winningNumbers.length; j++) {
    if (candidateNumbers.includes(winningNumbers[j])) {
      matchedWinningNumbers.push(winningNumbers[j]);
    }
  }

  if (matchedWinningNumbers.length > 1) {
    cardPoints = 2 ** (matchedWinningNumbers.length - 1);
  } else {
    cardPoints = matchedWinningNumbers.length;
  }

  totalPoints = totalPoints + cardPoints;
}

console.log(totalPoints);
