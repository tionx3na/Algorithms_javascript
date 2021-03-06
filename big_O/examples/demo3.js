const { performance } = require("perf_hooks");

const largeArray = new Array(10000).fill('nemo')

function findNemo(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] == "nemo") {
      console.log("Found Nemo!");
    }
  }
  let t1 = performance.now();
  console.log(`The function took ${t1-t0} milliseconds to finish!`);
}

findNemo(largeArray);
