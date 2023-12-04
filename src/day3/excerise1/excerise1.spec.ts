import {describe, expect, test} from '@jest/globals';
import { getSumOfNumberPartOfSchematic } from './excerise1';

describe('Day 3 --> Excerise 1', () => {
  test('should returns 0 when string is empty', () => {
    expect(getSumOfNumberPartOfSchematic(''))
      .toBe(0);
  });
  test('should returns the sum of all of the part numbers in the engine schematic', () => {
    expect(getSumOfNumberPartOfSchematic(`467..114..
    ...*......
    ..35..633.
    ......#...
    617*......
    .....+.58.
    ..592.....
    ......755.
    ...$.*....
    .664.598..`))
      .toBe(4361);
  });


});