import fs from "fs";

// A symbol is not a number and is not a period
function isSymbol(val) {
  // if (typeof val !== "undefined" && Number(val) != val && val !== ".")
  if (Number(val) != val && val !== ".") return true;
  return false;
}

const inputLines = fs.readFileSync("./input.txt", "utf8").trim().split("\n");
let output = 0;

for (let i = 0; i < inputLines.length; i++) {
  let currentNumberCandidates = [];
  let isValidNumberCandidate = false;

  for (let j = 0; j < inputLines[i].length; j++) {
    let currentVal = inputLines[i][j];

    // If current is a number
    // Add digit to number cadidate
    // Chech for adjacent symbols
    if (Number(currentVal) == currentVal) {
      currentNumberCandidates.push(inputLines[i][j]);

      // Check Top Left
      if (i > 0 && j > 0) {
        if (isSymbol(inputLines[i - 1][j - 1])) {
          console.log("Matched top left");
          isValidNumberCandidate = true;
        }
      }
      // Check Top
      if (i > 0) {
        if (isSymbol(inputLines[i - 1][j])) {
          console.log("Matched top");
          isValidNumberCandidate = true;
        }
      }
      // Check Top Right
      if (i > 0 && j < inputLines[i].length - 1) {
        if (isSymbol(inputLines[i - 1][j + 1])) {
          console.log("Matched top right");
          isValidNumberCandidate = true;
        }
      }

      // Check Right
      if (j < inputLines[i].length - 1) {
        if (isSymbol(inputLines[i][j + 1])) {
          console.log("Matched right");
          isValidNumberCandidate = true;
        }
      }
      // Check Bottom Right
      if (i < inputLines.length - 1 && j < inputLines[i].length - 1) {
        if (isSymbol(inputLines[i + 1][j + 1])) {
          console.log("Matched bottom right");
          isValidNumberCandidate = true;
        }
      }
      // Check Bottom
      if (i < inputLines.length - 1) {
        if (isSymbol(inputLines[i + 1][j])) {
          console.log("Matched bottom");
          isValidNumberCandidate = true;
        }
      }
      // Check Bottom Left
      if (i < inputLines.length - 1 && j > 0) {
        if (isSymbol(inputLines[i + 1][j - 1])) {
          console.log("Matched bottom left");
          isValidNumberCandidate = true;
        }
      }
      // Check Left
      if (j > 0) {
        if (isSymbol(inputLines[i][j - 1])) {
          console.log("Matched left");
          isValidNumberCandidate = true;
        }
      }
    }

    // Check if we've reached a value that isn't a number
    if (Number(currentVal) != currentVal || j === inputLines[i].length - 1) {
      if (isValidNumberCandidate) {
        output =
          output +
          Number(currentNumberCandidates.reduce((acc, cur) => acc + cur, 0));
        console.log(
          "Valid: ",
          Number(currentNumberCandidates.reduce((acc, cur) => acc + cur, 0))
        );
      } else if (currentNumberCandidates.length > 0) {
        console.log(
          "Invalid: ",
          Number(currentNumberCandidates.reduce((acc, cur) => acc + cur, 0))
        );
      }

      // reset aggergators
      isValidNumberCandidate = false;
      currentNumberCandidates = [];
    }
  }
}

console.log(output);
