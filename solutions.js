/*
 * https://projecteuler.net/problem=1
 * 
 * If we list all the natural numbers below 10 that are 
 * multiples of 3 or 5, we get 3, 5, 6 and 9. 
 * The sum of these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below 1000.
 * 
 */
class Accumulator {
    constructor(max, multiples) {
        this.max = max
        this.multiples = multiples
    }
    getSum() {
        let sum = 0
        for(let i = 0; i < this.max; i++) {
            for(let j = 0; j < this.multiples.length; j++) {
                if(i%this.multiples[j] === 0) {
                    sum += i
                    break
                }
            }
        }
        return sum
    }
    get sum() {
        return this.getSum()
    }
}
const accumulatorOne = new Accumulator(10, [3,5])
const accumulatorTwo = new Accumulator(1000, [3,5])
console.log(accumulatorOne.sum) // output: 23
console.log(accumulatorTwo.sum) // output: 233168

/*******************************************************************/

/*
 * https://projecteuler.net/problem=2
 * 
 * 
 */
class FibSum {
    constructor(max) {
        this.max = max
    }
    getSum() {
        
    }
    get sum() {
        return this.getSum()
    }
}