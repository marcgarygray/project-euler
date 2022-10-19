"use strict";
/*
 * https://projecteuler.net/problem=1
 *
 * If we list all the natural numbers below 10 that are
 * multiples of 3 or 5, we get 3, 5, 6 and 9.
 * The sum of these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below 1000.
 *
 */
function accumulator(max, multiples) {
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
console.log(accumulator(1000, [3, 5])); // output:
/*
 * https://projecteuler.net/problem=7
 *
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
 * What is the 10 001st prime number?
 *
 */
function nthPrime(n) {
    var workingPrime = 2;
    var nth = 1;
    while (nth < n) {
        workingPrime += 1;
        if (workingPrime % 2 !== 0) {
            var divisorFound = false;
            for (var i = 2; i < workingPrime / 2; i++) {
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
