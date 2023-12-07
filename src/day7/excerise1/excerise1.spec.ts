import {describe, fdescribe, expect, test} from '@jest/globals';
import { getTotalWinings } from './excerise1';

describe('Day 7 --> Excerise 1', () => {
  test('should returns 0 when string is empty', () => {
    expect(getTotalWinings(''))
      .toBe(0);
  });
  test('should returns the sum of all of the part numbers in the engine schematic', () => {
    expect(getTotalWinings(`32T3K 765
    T55J5 684
    KK677 28
    KTJJT 220
    QQQJA 483`))
      .toBe(5905);
  });


});