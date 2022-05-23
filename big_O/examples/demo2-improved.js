const { performance } = require("perf_hooks");

const everyone = [
  "dory",
  "bruce",
  "marlin",
  "nemo",
  "gill",
  "bloa",
  "nigel",
  "squirt",
  "darla",
  "hank",
];

function findNemo(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    console.log("running");
    if (array[i] == "nemo") {
      console.log("Found Nemo!");
      break;
    }
  }
  let t1 = performance.now();
  console.log(`The function took ${t1 - t0} milliseconds to finish!`);
}

findNemo(everyone);
