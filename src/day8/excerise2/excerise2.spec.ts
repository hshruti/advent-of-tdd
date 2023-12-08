import {describe, fdescribe, expect, test} from '@jest/globals';
import { getGhostSteps } from './excerise2';

describe('Day 8 --> Excerise 2', () => {
  test('should returns 0 when string is empty', () => {
    expect(getGhostSteps(''))
      .toBe(0);
  });
  test('should returns the steps', () => {
    expect(getGhostSteps(`LR

    11A = (11B, XXX)
    11B = (XXX, 11Z)
    11Z = (11B, XXX)
    22A = (22B, XXX)
    22B = (22C, 22C)
    22C = (22Z, 22Z)
    22Z = (22B, 22B)
    XXX = (XXX, XXX)`))
      .toBe(6);
  });



});