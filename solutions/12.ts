/*
 * https://projecteuler.net/problem=12
 *
 * The sequence of triangle numbers is generated by adding the natural numbers.
 * So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:
 *   1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...
 * Let us list the factors of the first seven triangle numbers:
 *   1: 1
 *   3: 1,3
 *   6: 1,2,3,6
 *   10: 1,2,5,10
 *   15: 1,3,5,15
 *   21: 1,3,7,21
 *   28: 1,2,4,7,14,28
 * We can see that 28 is the first triangle number to have over five divisors.
 * What is the value of the first triangle number to have over five hundred divisors?
 *
 */
function firstTriangleNumberByDivisors(divisors: number) {
  let triangleNumber = 1;
  let nth = 1;
  while (true) {
    let factors = 1; // every number is a factor of itself
    for (let i = 1; i <= triangleNumber / 2; i++) {
      if (triangleNumber % i === 0) {
        factors += 1;
      }
    }
    if (factors > divisors) {
      return triangleNumber;
    }
    nth += 1;
    triangleNumber = triangleNumber + nth;
  }
}

console.log(firstTriangleNumberByDivisors(500)); // output: 76576500
