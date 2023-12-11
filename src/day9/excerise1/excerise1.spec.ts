import {describe, expect, test} from '@jest/globals';
import { getSumOfExtrapolatedValues } from './excerise1';

describe('Day 10 --> Excerise 1', () => {
  test('should returns 0 when string is empty', () => {
    expect(getSumOfExtrapolatedValues(''))
      .toBe(0);
  });
  

    
  test('should returns fartest distance for sample data 1', () => {
    expect(getSumOfExtrapolatedValues(`0 3 6 9 12 15
    1 3 6 10 15 21
    10 13 16 21 30 45`))
      .toBe(114);
  });
    


});