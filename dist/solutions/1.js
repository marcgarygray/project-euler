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
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumOfMultiples = void 0;
function sumOfMultiples({ below, divisors }) {
    let sum = 0;
    for (let i = 0; i < below; i++) {
        divisors.some((divisor) => {
            if (i % divisor === 0) {
                sum += i;
                return true;
            }
            return false;
        });
    }
    return sum;
}
exports.sumOfMultiples = sumOfMultiples;
