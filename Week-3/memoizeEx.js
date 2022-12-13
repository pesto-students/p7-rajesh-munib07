//Assignment 3.1

//Function add accepts any number of arguments and return the sum of all rcvd args
function add(...args) {
  return args.reduce((prev, curr) => prev + curr, 0);
}

// a custom memoize function which maintains a dictionary called cache
// of result with args
const memoize = (add) => {
  let cache = {};
  return (...args) => {
    if (args.toString() in cache) {
      console.log("in cache");
      return cache[args.toString()];
    } else {
      console.log("calculated");
      let sum = add(...args);
      cache[args.toString()] = sum;
      return sum;
    }
  };
};

let memoizeAdd = memoize(add);

//First time call and the sum will be calculated
console.log("Sum 123 ", memoizeAdd(1, 2, 3));

//Second call and the sum is taken from cache
console.log("Sum 123 rev ", memoizeAdd(1, 2, 3));

//First time call and the sum will be calculated
console.log("Sum 1,2", memoizeAdd(1,2));

//First time call and the sum will be calculated
console.log("Sum 1", memoizeAdd(1));

//Second call and the sum is taken from cache
console.log("Sum 123 rev2", memoizeAdd(1, 2, 3));

//Third call and the sum is taken from cache
console.log("Sum 1,2 rev", memoizeAdd(1, 2));
