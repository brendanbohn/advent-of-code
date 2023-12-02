import fs from "fs";

const inputLines = fs.readFileSync("./input.txt", "utf8").trim().split("\n");

let filteredInputLines = inputLines.map((line) => {
  const currentNumbers = line.match(/[0-9]/g);
  const firstNumber = currentNumbers[0];
  const secondNumber =
    currentNumbers.length <= 1 ? currentNumbers[0] : currentNumbers.at(-1);
  return Number([firstNumber, secondNumber].join(""));
});

const sum = filteredInputLines.reduce((acc, cur) => acc + cur, 0);

console.log(sum);
