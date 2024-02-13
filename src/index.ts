#!/usr/bin/env node
import chalk from 'chalk';
import promptsync from 'prompt-sync';
import { sumOfMultiples } from './solutions/1';
import { evenFibonacciSum } from './solutions/2';
import { largestPrimeFactor } from './solutions/3';

const solutions: Record<number, () => number> = {
  1: () => sumOfMultiples({ below: 1000, divisors: [3, 5] }), // 233168
  2: () => evenFibonacciSum({ max: 4000000 }), // 4613732
  3: () => largestPrimeFactor({ value: 600851475143 }), // 6857
};

const prompt = promptsync({ sigint: true });
const makeMagenta = (message: string) => chalk.magentaBright(message);
const logGreen = (message: string) => console.log(chalk.greenBright(message));
const logMagenta = (message: string) => console.log(makeMagenta(message));
const logRed = (message: string) => console.log(chalk.redBright(message));

function promptUser() {
  const input = prompt(
    chalk.whiteBright(
      `Enter a number from 1 to ${
        Object.keys(solutions).length
      }, or Q to quit: `
    )
  );
  if (input.toLowerCase() === 'q') {
    console.log('test the ol bot');
    return;
  }
  const inputAsNumber = Number(input);
  if (Number.isNaN(inputAsNumber) || inputAsNumber < 1) {
    logRed('  Invalid input! Please try again.\n');
  } else {
    const solution = solutions[Number(input)];
    if (!solution) {
      logRed("  I haven't solved that one yet! Please try again.\n");
    } else {
      logGreen(
        ` The answer to problem ${chalk.underline(
          makeMagenta(input)
        )} is ${chalk.underline(makeMagenta(String(solution())))}.\n`
      );
    }
  }
  promptUser();
}

logMagenta('\nProject Euler\n');
promptUser();
