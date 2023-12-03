import fs from "fs";

const inputLines = fs.readFileSync("./input.txt", "utf8").trim().split("\n");

const games = inputLines.map((game) => {
  const splitAtCol = game.split(":");
  const sets = splitAtCol[1].split(";");

  const currentCubeCount = {
    red: 0,
    green: 0,
    blue: 0,
  };

  for (let i = 0; i < sets.length; i++) {
    const cubes = sets[i].split(",");

    for (let i = 0; i < cubes.length; i++) {
      const cube = cubes[i].trim().split(" ");
      console.log(cube);
      console.log(currentCubeCount);
      if (Number(cube[0]) > currentCubeCount[cube[1]]) {
        currentCubeCount[cube[1]] = Number(cube[0]);
      }
    }
  }

  // The power of a set of cubes is equal to the
  // numbers of red, green, and blue cubes multiplied together
  let power = 1;

  for (const [key, value] of Object.entries(currentCubeCount)) {
    console.log(key, value);
    power = power * value;
  }

  return power;
});

const sumOfPossibleGameIDs = games.reduce((acc, cur) => acc + cur, 0);

console.log(sumOfPossibleGameIDs);
