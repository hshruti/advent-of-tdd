import {describe, fdescribe, expect, test} from '@jest/globals';
import { getSteps } from './excerise1';

describe('Day 8 --> Excerise 1', () => {
  test('should returns 0 when string is empty', () => {
    expect(getSteps(''))
      .toBe(0);
  });
  test('should returns the steps', () => {
    expect(getSteps(`RL

    AAA = (BBB, CCC)
    BBB = (DDD, EEE)
    CCC = (ZZZ, GGG)
    DDD = (DDD, DDD)
    EEE = (EEE, EEE)
    GGG = (GGG, GGG)
    ZZZ = (ZZZ, ZZZ)`))
      .toBe(2);
  });
  test('should repeat direction returns the steps', () => {
    expect(getSteps(`LLR

    AAA = (BBB, BBB)
    BBB = (AAA, ZZZ)
    ZZZ = (ZZZ, ZZZ)`))
      .toBe(6);
  });



});