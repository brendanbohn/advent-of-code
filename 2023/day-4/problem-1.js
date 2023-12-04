import { match } from "assert";
import fs from "fs";

const inputLines = fs
  .readFileSync("./example-1.txt", "utf8")
  .trim()
  .split("\n");

let totalPoints = 0;

for (let i = 0; i < inputLines.length; i++) {
  let matchedWinningNumbers = [];
  const card = inputLines[i];
  const cardNumbers = card
    .split(":")[1]
    .split("|")
    .map((numbers) => numbers.trim().split(" "));
  const winningNumbers = cardNumbers[0];
  const candidateNumbers = cardNumbers[1];

  for (let j = 0; j < winningNumbers.length; j++) {
    if (candidateNumbers.includes(winningNumbers[j])) {
      matchedWinningNumbers.push(winningNumbers[j]);
    }
  }

  let cardPoints = 0;

  if (matchedWinningNumbers.length > 1) {
    cardPoints = 2 ** (matchedWinningNumbers.length - 1);
  } else {
    cardPoints = matchedWinningNumbers.length;
  }

  totalPoints = totalPoints + cardPoints;
}

console.log(totalPoints);
