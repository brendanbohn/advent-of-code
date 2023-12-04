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
  console.log(match);
  console.log(numsAsStrings.indexOf(match) + 1 + match);
  return numsAsStrings.indexOf(match) + 1 + " " + match;
}

const inputLines = fs.readFileSync("./input.txt", "utf8").trim().split("\n");

let convertedLines = ["eightwo"].map((line) => {
  console.log(line);
  return line.replaceAll(
    new RegExp(numsAsStrings.join("|"), "g"),
    replaceStrWithNum
  );
});

let combinedFirstAndLastNums = convertedLines.map((line) => {
  const currentNumbers = line.match(/[0-9]/g);
  const firstNumber = currentNumbers[0];
  const secondNumber =
    currentNumbers.length <= 1 ? currentNumbers[0] : currentNumbers.at(-1);
  return Number([firstNumber, secondNumber].join(""));
});

const sum = combinedFirstAndLastNums.reduce((acc, cur) => acc + cur, 0);

console.log(sum);
