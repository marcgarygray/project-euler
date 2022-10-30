/*
 * https://projecteuler.net/problem=7
 *
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
 * What is the 10 001st prime number?
 *
 */
function nthPrime(n: number) {
  let workingPrime = 2;
  let nth = 1;
  while (nth < n) {
    workingPrime += 1;
    if (workingPrime % 2 !== 0) {
      let divisorFound = false;
      for (let i = 2; i < workingPrime / 2; i++) {
        if (workingPrime % i === 0) {
          divisorFound = true;
          break;
        }
      }
      if (!divisorFound) {
        nth += 1;
      }
    }
  }
  return workingPrime;
}

console.log(nthPrime(10001)); // output: 104743
