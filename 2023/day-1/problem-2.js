import fs from "fs";

const numsAsStrings = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

function replaceStrWithNum(match) {
  let matchIndex =
    numsAsStrings.indexOf(match) >= 0
      ? numsAsStrings.indexOf(match)
      : numsAsStrings.indexOf(match.split("").reverse().join(""));
  return matchIndex + 1;
}

const inputLines = fs
  .readFileSync("./example-2.txt", "utf8")
  .trim()
  .split("\n");

let linesWithFirstStrConverted = inputLines.map((line) => {
  return line.replace(new RegExp(numsAsStrings.join("|")), replaceStrWithNum);
});

let linesWithLastStrConverted = linesWithFirstStrConverted.map((line) => {
  const reversedLine = line.split("").reverse().join("");
  const reversedNumsAsStrings = numsAsStrings
    .join("|")
    .split("")
    .reverse()
    .join("");

  return reversedLine
    .replace(new RegExp(reversedNumsAsStrings), replaceStrWithNum)
    .split("")
    .reverse()
    .join("");
});

console.log(linesWithLastStrConverted);

let combinedFirstAndLastNums = linesWithLastStrConverted.map((line) => {
  const currentNumbers = line.match(/[0-9]/g);
  const firstNumber = currentNumbers[0];
  const secondNumber =
    currentNumbers.length <= 1 ? currentNumbers[0] : currentNumbers.at(-1);
  return Number([firstNumber, secondNumber].join(""));
});

const sum = combinedFirstAndLastNums.reduce((acc, cur) => acc + cur, 0);

console.log(sum);
