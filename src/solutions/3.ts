/*
 * https://projecteuler.net/problem=3
 *
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143 ?
 *
 */

type LargestPrimeFactorArg = {
  value: number;
};

export function largestPrimeFactor({ value }: LargestPrimeFactorArg) {
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
