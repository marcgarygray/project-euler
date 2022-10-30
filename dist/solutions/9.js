"use strict";
/*
 * https://projecteuler.net/problem=9
 *
 * A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
 *   a2 + b2 = c2
 * For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
 * There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 * Find the product abc.
 *
 */
function pythagoreanTripletBySum(sum) {
    let a = 1;
    let b = 2;
    let c = sum - 3;
    while (a <= sum / 2) {
        while (c >= (sum - a) / 2) {
            if (a ** 2 + b ** 2 === c ** 2) {
                return a * b * c;
            }
            c--;
            b++;
        }
        a++;
        b = a + 1;
        c = sum - a - b;
    }
}
console.log(pythagoreanTripletBySum(1000)); // output: 31875000
