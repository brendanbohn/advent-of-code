import fs from "fs";

function isStar(val) {
  if (val === "*") return true;
  return false;
}

const inputLines = fs.readFileSync("./input.txt", "utf8").trim().split("\n");

const gears = new Map();

// store i,j for star value when it is adjacent to num
// check if gears already has a key set to i,j
// if key exists, push full num to values array
// if key doesn't exist, create key for i,j then add full num to array

// loop through Map values
// multiply values for each gear
// sum those mupliplied values

for (let i = 0; i < inputLines.length; i++) {
  let currentNumberCandidates = [];
  let currentStars = [];

  for (let j = 0; j < inputLines[i].length; j++) {
    let currentVal = inputLines[i][j];

    // If current is a number
    // Add digit to number cadidate
    // Chech for adjacent symbols
    if (Number(currentVal) == currentVal) {
      currentNumberCandidates.push(inputLines[i][j]);

      // Check Top Left
      if (i > 0 && j > 0) {
        if (isStar(inputLines[i - 1][j - 1])) {
          console.log("Matched top left");
          if (!currentStars.includes(`${i - 1},${j - 1}`)) {
            currentStars.push(`${i - 1},${j - 1}`);
          }
        }
      }
      // Check Top
      if (i > 0) {
        if (isStar(inputLines[i - 1][j])) {
          console.log("Matched top");
          if (!currentStars.includes(`${i - 1},${j}`)) {
            currentStars.push(`${i - 1},${j}`);
          }
        }
      }
      // Check Top Right
      if (i > 0 && j < inputLines[i].length - 1) {
        if (isStar(inputLines[i - 1][j + 1])) {
          console.log("Matched top right");
          if (!currentStars.includes(`${i - 1},${j + 1}`)) {
            currentStars.push(`${i - 1},${j + 1}`);
          }
        }
      }

      // Check Right
      if (j < inputLines[i].length - 1) {
        if (isStar(inputLines[i][j + 1])) {
          console.log("Matched right");
          if (!currentStars.includes(`${i + 1},${j + 1}`)) {
            currentStars.push(`${i},${j + 1}`);
          }
        }
      }
      // Check Bottom Right
      if (i < inputLines.length - 1 && j < inputLines[i].length - 1) {
        if (isStar(inputLines[i + 1][j + 1])) {
          console.log("Matched bottom right");
          if (!currentStars.includes(`${i + 1},${j + 1}`)) {
            currentStars.push(`${i + 1},${j + 1}`);
          }
        }
      }
      // Check Bottom
      if (i < inputLines.length - 1) {
        if (isStar(inputLines[i + 1][j])) {
          console.log("Matched bottom");
          if (!currentStars.includes(`${i + 1},${j}`)) {
            currentStars.push(`${i + 1},${j}`);
          }
        }
      }
      // Check Bottom Left
      if (i < inputLines.length - 1 && j > 0) {
        if (isStar(inputLines[i + 1][j - 1])) {
          console.log("Matched bottom left");
          if (!currentStars.includes(`${i + 1},${j - 1}`)) {
            currentStars.push(`${i + 1},${j - 1}`);
          }
        }
      }
      // Check Left
      if (j > 0) {
        if (isStar(inputLines[i][j - 1])) {
          console.log("Matched left");
          if (!currentStars.includes(`${i},${j - 1}`)) {
            currentStars.push(`${i},${j - 1}`);
          }
        }
      }
    }

    // Check if we've reached a value that isn't a number
    if (Number(currentVal) != currentVal || j === inputLines[i].length - 1) {
      const currentNumber = currentNumberCandidates.reduce(
        (acc, cur) => acc + cur,
        ""
      );
      if (currentStars.length > 0) {
        console.log(currentStars);
        for (let k = 0; k < currentStars.length; k++) {
          console.log("inside star");
          if (gears.has(currentStars[k])) {
            let curGearValues = gears.get(currentStars[k]);
            gears.set(currentStars[k], [...curGearValues, currentNumber]);
          } else {
            gears.set(currentStars[k], [currentNumber]);
          }
        }
      } else if (currentNumberCandidates.length > 0) {
        console.log("No stars found");
      }

      // reset aggergators
      currentStars = [];
      currentNumberCandidates = [];
    }
  }
}

const gearValues = Array.from(gears.values());

let output = 0;

for (let i = 0; i < gearValues.length; i++) {
  if (gearValues[i].length === 2) {
    output = output + gearValues[i].reduce((acc, cur) => acc * Number(cur), 1);
  }
}

console.log(output);
