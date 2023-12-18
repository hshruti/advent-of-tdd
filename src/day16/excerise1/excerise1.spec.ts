import {describe, expect, test} from '@jest/globals';
import { getEnergizedTiles } from './excerise1';

describe('Day 16 --> Excerise 1', () => {
  test('should returns 0 when string is empty', () => {
    expect(getEnergizedTiles(''))
      .toBe(0);
  });
  test('should returns 46 as energized tile', () => {
    expect(getEnergizedTiles(`.|...\\....
    |.-.\\.....
    .....|-...
    ........|.
    ..........
    .........\\
    ..../.\\\\..
    .-.-/..|..
    .|....-|.\\
    ..//.|....`))
      .toBe(46);
  });
 
});