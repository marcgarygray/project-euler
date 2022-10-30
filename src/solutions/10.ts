/*
 * https://projecteuler.net/problem=10
 *
 * The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 * Find the sum of all the primes below two million.
 *
 */
function primeSummation(below: number) {
  let sum = 0;
  const numbers: boolean[] = [];
  for (let i = 2; i < below; i++) {
    if (!numbers[i]) {
      sum += i;
      for (let j = i * 2; j < below; j += i) {
        numbers[j] = true;
      }
    }
  }
  return sum;
}

console.log(primeSummation(2000000)); // output: 142913828922
