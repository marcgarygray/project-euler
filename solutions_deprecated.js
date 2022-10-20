/*
 * https://projecteuler.net/problem=3
 *
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143 ?
 *
 */
class LargestPrimeFactor {
  constructor(number) {
    this.number = number;
  }

  get largest() {
    let number = this.number;
    let divisor = 2;
    while (number > 1) {
      if (number % divisor === 0) {
        number /= divisor;
        divisor--;
      }
      divisor++;
    }
    return divisor;
  }
}

const largestPrimeFactorOne = new LargestPrimeFactor(13195);
const largestPrimeFactorTwo = new LargestPrimeFactor(600851475143);
console.log(largestPrimeFactorOne.largest); // output: 29
console.log(largestPrimeFactorTwo.largest); // output: 6857

/*******************************************************************/

/*
 * https://projecteuler.net/problem=4
 *
 * A palindromic number reads the same both ways.
 * The largest palindrome made from the product
 * of two 2-digit numbers is 9009 = 91 × 99.
 * Find the largest palindrome made from the product
 * of two 3-digit numbers.
 *
 */
class Palindromer {
  isPalindrome(product) {
    return (
      product.toString() === product.toString().split('').reverse().join('')
    );
  }

  get largest() {
    let max = 0;
    let i = 999;
    while (i > 99) {
      let j = 999;
      while (j >= i) {
        const product = i * j;
        if (this.isPalindrome(product) && product > max) max = product;
        j--;
      }
      i--;
    }
    return max;
  }
}

const palindromer = new Palindromer();
console.log(palindromer.largest); // output: 906609

/*******************************************************************/

/*
 * https://projecteuler.net/problem=5
 *
 * 2520 is the smallest number that can be divided by
 * each of the numbers from 1 to 10 without any remainder.
 * What is the smallest positive number that is evenly divisible
 * by all of the numbers from 1 to 20?
 *
 */
class SmallestMultiple {
  constructor(max) {
    this.max = max;
  }

  get value() {
    let match = false;
    let value = this.max;
    while (!match) {
      value++;
      let counter = this.max;
      while (counter > 0) {
        match = true;
        if (value % counter !== 0) {
          match = false;
          break;
        }
        counter--;
      }
    }
    return value;
  }
}
const smallestMultipleTen = new SmallestMultiple(10);
const smallestMultipleTwenty = new SmallestMultiple(20);
console.log(smallestMultipleTen.value); // output: 2520
console.log(smallestMultipleTwenty.value); // output: 232792560

/*******************************************************************/

/*
 * https://projecteuler.net/problem=6
 *
 * The sum of the squares of the first ten natural numbers is:
 *   1^2 + 2^2 + ... + 10^2 = 385
 * The square of the sum of the first ten natural numbers is:
 *   (1 + 2 + ... + 10)^2 = 55^2 = 3025
 * Hence the difference between the sum of the squares of
 * the first ten natural numbers and the square of the sum is
 * 3025 − 385 = 2640.
 * Find the difference between the sum of the squares of the first
 * one hundred natural numbers and the square of the sum.
 *
 */
class SquareSumDifferencer {
  constructor(max) {
    this.max = max;
  }

  squareOfSum() {
    let number = this.max;
    let sum = 0;
    while (number > 0) {
      sum += number;
      number--;
    }
    return sum * sum;
  }

  sumOfSquares() {
    let number = this.max;
    let sum = 0;
    while (number > 0) {
      sum += number * number;
      number--;
    }
    return sum;
  }

  get difference() {
    return this.squareOfSum() - this.sumOfSquares();
  }
}

const squareSumDifferencerTen = new SquareSumDifferencer(10);
const squareSumDifferencerHundred = new SquareSumDifferencer(100);
console.log(squareSumDifferencerTen.difference); // output: 2640
console.log(squareSumDifferencerHundred.difference); // output: 25164150

/*******************************************************************/

/*
 * https://projecteuler.net/problem=36
 *
 * The decimal number, 585 = 1001001001 (binary),
 * is palindromic in both bases.
 * Find the sum of all numbers, less than one million,
 * which are palindromic in base 10 and base 2.
 *
 */
class TwoBasePalindromer {
  constructor(max) {
    this.max = max;
  }

  isPalindrome(number, base) {
    return (
      number.toString(base) ===
      number.toString(base).split('').reverse().join('')
    );
  }

  get sum() {
    let sum = 0;
    let number = this.max;
    while (number > 0) {
      if (this.isPalindrome(number, 10) && this.isPalindrome(number, 2))
        sum += number;
      number--;
    }
    return sum;
  }
}

const twoBasePalindromer = new TwoBasePalindromer(1000000);
console.log(twoBasePalindromer.sum); // output: 872187

/*******************************************************************/

/*
 * https://projecteuler.net/problem=8
 * 
 * The four adjacent digits in the 1000-digit number that have 
 * the greatest product are 9 × 9 × 8 × 9 = 5832.

    73167176531330624919225119674426574742355349194934
    96983520312774506326239578318016984801869478851843
    85861560789112949495459501737958331952853208805511
    12540698747158523863050715693290963295227443043557
    66896648950445244523161731856403098711121722383113
    62229893423380308135336276614282806444486645238749
    30358907296290491560440772390713810515859307960866
    70172427121883998797908792274921901699720888093776
    65727333001053367881220235421809751254540594752243
    52584907711670556013604839586446706324415722155397
    53697817977846174064955149290862569321978468622482
    83972241375657056057490261407972968652414535100474
    82166370484403199890008895243450658541227588666881
    16427171479924442928230863465674813919123162824586
    17866458359124566529476545682848912883142607690042
    24219022671055626321111109370544217506941658960408
    07198403850962455444362981230987879927244284909188
    84580156166097919133875499200524063689912560717606
    05886116467109405077541002256983155200055935729725
    71636269561882670428252483600823257530420752963450

 * Find the thirteen adjacent digits in the 1000-digit number 
 * that have the greatest product. 
 * What is the value of this product?
 *
 */
class LargestProduct {
  constructor(length) {
    this.length = length;
    this.hugeNumberAsString =
      '7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450';
  }
  get product() {
    let remainingString = this.hugeNumberAsString;
    let largestProduct = 0;
    while (remainingString.length >= this.length) {
      const currentGroup = remainingString.slice(this.length * -1).split('');
      const currentProduct = currentGroup.reduce((product, current) => {
        return parseInt(product) * parseInt(current);
      });
      if (currentProduct > largestProduct) largestProduct = currentProduct;
      remainingString = remainingString.substring(
        0,
        remainingString.length - 1
      );
    }
    return largestProduct;
  }
}

const largestProductFour = new LargestProduct(4);
const largestProductThirteen = new LargestProduct(13);
console.log(largestProductFour.product); // output: 5832
console.log(largestProductThirteen.product); // output: 23514624000
