import fs from "fs";

const inputLines = fs.readFileSync("./input.txt", "utf8").trim().split("\n");

const cards = {};

for (let i = 0; i < inputLines.length; i++) {
  let matchedWinningNumbers = [];

  const card = inputLines[i];
  const cardInfo = card.split(":")[0].split(" ");
  const cardId = parseInt(cardInfo[cardInfo.length - 1]);

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

  const matchCount = matchedWinningNumbers.length;
  cards[cardId] = cards[cardId] + 1 || 1;

  for (let j = 0; j < cards[cardId]; j++) {
    for (let k = 1; k <= matchCount; k++) {
      if (cards[cardId + k]) {
        cards[cardId + k] = cards[cardId + k] + 1;
      } else {
        cards[cardId + k] = 1;
      }
    }
  }
}

const countOfEachCard = Object.values(cards).slice(0, inputLines.length);
const totalCards = countOfEachCard.reduce((acc, cur) => acc + cur, 0);

console.log("total cards: ", totalCards);
