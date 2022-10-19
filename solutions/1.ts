/*
 * https://projecteuler.net/problem=1
 *
 * If we list all the natural numbers below 10 that are
 * multiples of 3 or 5, we get 3, 5, 6 and 9.
 * The sum of these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below 1000.
 *
 */
function accumulator(max: number, multiples: [number, number]) {
  let sum = 0;
  for (let i = 0; i < max; i++) {
    for (let j = 0; j < multiples.length; j++) {
      if (i % multiples[j] === 0) {
        sum += i;
        break;
      }
    }
  }
  return sum;
}
console.log(accumulator(10, [3, 5])); // output: 23
console.log(accumulator(1000, [3, 5])); // output: 233168
