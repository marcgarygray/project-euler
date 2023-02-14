#!/usr/bin/env node
import chalk from 'chalk';
import promptsync from 'prompt-sync';
import { sumOfMultiples } from './solutions/1';
import { evenFibonacciSum } from './solutions/2';

const solutions: Record<number, () => number> = {
  1: () => sumOfMultiples({ below: 1000, divisors: [3, 5] }), // 233168
  2: () => evenFibonacciSum({ max: 4000000 }), // 4613732
};

const prompt = promptsync({ sigint: true });

const makeMagenta = (message: string) => chalk.magentaBright(message);

const logGreen = (message: string) => console.log(chalk.greenBright(message));
const logMagenta = (message: string) => console.log(makeMagenta(message));
const logRed = (message: string) => console.log(chalk.redBright(message));

logMagenta('\nProject Euler\n');

const getInput = () => {
  const input = prompt(
    chalk.whiteBright(
      `Enter a number from 1 to ${
        Object.keys(solutions).length
      }, or Q to quit: `
    )
  );
  if (input.toLowerCase() === 'q') {
    return;
  }
  const inputAsNumber = Number(input);
  if (Number.isNaN(inputAsNumber)) {
    logRed('  Non-numeric value! Please try again.\n');
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
  getInput();
};

getInput();
