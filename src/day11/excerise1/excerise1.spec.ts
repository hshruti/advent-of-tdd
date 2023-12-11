import {describe, expect, test} from '@jest/globals';
import { getSumOfTheLength } from './excerise1';

describe('Day 11 --> Excerise 1', () => {
  test('should returns 0 when string is empty', () => {
    expect(getSumOfTheLength(''))
      .toBe(0);
  });
  test('should returns 0 when string doesnt contain any number', () => {
    expect(getSumOfTheLength(`...#......
    .......#..
    #.........
    ..........
    ......#...
    .#........
    .........#
    ..........
    .......#..
    #...#.....`))
      .toBe(374);
  });

});