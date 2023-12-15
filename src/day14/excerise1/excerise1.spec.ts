import {describe, expect, test} from '@jest/globals';
import { getTotalLoad } from './excerise1';

describe('Day 14 --> Excerise 1', () => {
  test('should returns 0 when string is empty', () => {
    expect(getTotalLoad(''))
      .toBe(0);
  });
  test('should returns 136 as total load', () => {
    expect(getTotalLoad(`O....#....
    O.OO#....#
    .....##...
    OO.#O....O
    .O.....O#.
    O.#..O.#.#
    ..O..#O..O
    .......O..
    #....###..
    #OO..#....`))
      .toBe(64);
  });
 
});