import fs from "fs";

const input = fs.readFileSync("./example-1.txt", "utf8").trim().split("\n");

let seeds;
let seedsToSoilMap = [];
let soilToFertilizerMap = [];
let fertilizerToWaterMap = [];
let waterToLightMap = [];
let lightToTemperatureMap = [];
let temperatureToHumidityMap = [];
let humidityToLocationMap = [];

let mapKey = null;

function parseInput(input) {
  for (let i = 0; i < input.length; i++) {
    if (i === 0) {
      seeds = input[i]
        .split(":")[1]
        .split(" ")
        .filter((num) => num !== "")
        .map((num) => parseInt(num));
    }

    if (!input[i].length) {
      mapKey = null;
    }

    if (mapKey === "seed-to-soil map:") {
      seedsToSoilMap.push(input[i].split(" ").map((num) => parseInt(num)));
    }
    if (input[i].includes("seed-to-soil map:")) {
      mapKey = "seed-to-soil map:";
    }

    if (mapKey === "soil-to-fertilizer map:") {
      soilToFertilizerMap.push(input[i].split(" ").map((num) => parseInt(num)));
    }
    if (input[i].includes("soil-to-fertilizer map:")) {
      mapKey = "soil-to-fertilizer map:";
    }

    if (mapKey === "fertilizer-to-water map:") {
      fertilizerToWaterMap.push(
        input[i].split(" ").map((num) => parseInt(num))
      );
    }
    if (input[i].includes("fertilizer-to-water map:")) {
      mapKey = "fertilizer-to-water map:";
    }

    if (mapKey === "water-to-light map:") {
      waterToLightMap.push(input[i].split(" ").map((num) => parseInt(num)));
    }
    if (input[i].includes("water-to-light map:")) {
      mapKey = "water-to-light map:";
    }

    if (mapKey === "light-to-temperature map:") {
      lightToTemperatureMap.push(
        input[i].split(" ").map((num) => parseInt(num))
      );
    }
    if (input[i].includes("light-to-temperature map:")) {
      mapKey = "light-to-temperature map:";
    }

    if (mapKey === "temperature-to-humidity map:") {
      temperatureToHumidityMap.push(
        input[i].split(" ").map((num) => parseInt(num))
      );
    }
    if (input[i].includes("temperature-to-humidity map:")) {
      mapKey = "temperature-to-humidity map:";
    }

    if (mapKey === "humidity-to-location map:") {
      humidityToLocationMap.push(
        input[i].split(" ").map((num) => parseInt(num))
      );
    }
    if (input[i].includes("humidity-to-location map:")) {
      mapKey = "humidity-to-location map:";
    }
  }
}

parseInput(input);

console.log("seeds: ", seeds);
console.log("seedsToSoilMap: ", seedsToSoilMap);
// console.log("soilToFertilizerMap: ", soilToFertilizerMap);
// console.log("fertilizerToWaterMap: ", fertilizerToWaterMap);
// console.log("waterToLightMap", waterToLightMap);
// console.log("lightToTemperatureMap", lightToTemperatureMap);
// console.log("temperatureToHumidityMap", temperatureToHumidityMap);
// console.log("humidityToLocationMap", humidityToLocationMap);

let seedsToSoilOutput = new Map();

for (let i = 0; i < seedsToSoilMap.length; i++) {
  let destination = seedsToSoilMap[i][0];
  let source = seedsToSoilMap[i][1];
  let rangeLength = seedsToSoilMap[i][2];
  console.log(destination, source, rangeLength);
  let counter = 0;

  while (rangeLength > 0) {
    seedsToSoilOutput.set(source + counter, destination + counter);
    counter++;
    rangeLength--;
  }
}

console.log(
  seeds.map((seed) => {
    if (seedsToSoilOutput.has(seed)) {
      return seedsToSoilOutput.get(seed);
    }

    return seed;
  })
);
