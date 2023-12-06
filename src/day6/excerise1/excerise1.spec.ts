import {describe, fdescribe, expect, test} from '@jest/globals';
import { getNumberOfWays } from './excerise1';

fdescribe('Day 6 --> Excerise 1', () => {
  test('should returns 0 when string is empty', () => {
    expect(getNumberOfWays(''))
      .toBe(1);
  });
  test('should returns the sum of all of the part numbers in the engine schematic', () => {
    expect(getNumberOfWays(`Time:      7  15   30
    Distance:  9  40  200`))
      .toBe(71503);
  });


});