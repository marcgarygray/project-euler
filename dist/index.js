#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1_1 = require("./solutions/1");
console.log((0, _1_1.sumOfMultiples)({ below: 10, divisors: [3, 5] })); // output: 23
console.log((0, _1_1.sumOfMultiples)({ below: 1000, divisors: [3, 5] })); // output: 233168
