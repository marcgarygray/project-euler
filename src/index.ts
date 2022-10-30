#!/usr/bin/env node
import { sumOfMultiples } from './solutions/1';
console.log(sumOfMultiples({ below: 10, divisors: [3, 5] })); // output: 23
console.log(sumOfMultiples({ below: 1000, divisors: [3, 5] })); // output: 233168
