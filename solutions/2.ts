/*
 * https://projecteuler.net/problem=2
 *
 * Each new term in the Fibonacci sequence is generated by
 * adding the previous two terms. By starting with 1 and 2,
 * the first 10 terms will be:
 * 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
 * By considering the terms in the Fibonacci sequence
 * whose values do not exceed four million,
 * find the sum of the even-valued terms.
 *
 */
function evenFibonacciSum(max: number) {
  let termOne = 1;
  let termTwo = 2;
  let termThree = 0;
  let sum = 2;
  while (termThree < max) {
    termThree = termOne + termTwo;
    if (termThree % 2 === 0) sum += termThree;
    termOne = termTwo;
    termTwo = termThree;
  }
  return sum;
}

console.log(evenFibonacciSum(4000000)); // output: 4613732
