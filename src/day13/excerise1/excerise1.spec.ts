import {describe, expect, test} from '@jest/globals';
import { getNumberOfReflectionNode } from './excerise1';

describe('Day 13 --> Excerise 1', () => {
  test('should returns 0 when string is empty', () => {
    expect(getNumberOfReflectionNode(''))
      .toBe(0);
  });
  test('should returns 405 as reflection node', () => {
    expect(getNumberOfReflectionNode(`#.##..##.
    ..#.##.#.
    ##......#
    ##......#
    ..#.##.#.
    ..##..##.
    #.#.##.#.
    
    #...##..#
    #....#..#
    ..##..###
    #####.##.
    #####.##.
    ..##..###
    #....#..#`))
      .toBe(405);
  });
 
});