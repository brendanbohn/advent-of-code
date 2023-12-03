import fs from "fs";

const inputLines = fs.readFileSync("./input.txt", "utf8").trim().split("\n");

const cubeLegend = {
  red: 12,
  green: 13,
  blue: 14,
};

const games = inputLines.map((game) => {
  let isPossible = true;
  const splitAtCol = game.split(":");
  const gameId = splitAtCol[0].split(" ")[1];
  const sets = splitAtCol[1].split(";");

  for (let i = 0; i < sets.length; i++) {
    if (!isPossible) break;

    const cubes = sets[i].split(",");

    for (let i = 0; i < cubes.length; i++) {
      const cube = cubes[i].trim().split(" ");
      if (cube[0] > cubeLegend[cube[1]]) {
        isPossible = false;
      }
    }
  }

  return {
    gameId,
    isPossible,
  };
});

const sumOfPossibleGameIDs = games.reduce(
  (acc, cur) => (cur.isPossible ? acc + Number(cur.gameId) : acc),
  0
);

console.log(sumOfPossibleGameIDs);
