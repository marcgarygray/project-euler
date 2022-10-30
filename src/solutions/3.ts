/*
 * https://projecteuler.net/problem=3
 *
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143 ?
 *
 */
function largestPrimeFactor({ value }: { value: number }) {
  let primeFactorCandidate = 2;
  while (value > 1) {
    if (value % primeFactorCandidate === 0) {
      value /= primeFactorCandidate;
    } else {
      primeFactorCandidate++;
    }
  }
  return primeFactorCandidate;
}

console.log(largestPrimeFactor({ value: 13195 })); // output: 29
console.log(largestPrimeFactor({ value: 600851475143 })); // output: 6857
