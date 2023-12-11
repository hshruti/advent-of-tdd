import {describe, expect, test} from '@jest/globals';
import { getStepsFromStartingPoint } from './excerise1';

describe('Day 10 --> Excerise 1', () => {
  test('should returns 0 when string is empty', () => {
    expect(getStepsFromStartingPoint(''))
      .toBe(0);
  });
  

    
  test('should returns fartest distance for sample data 1', () => {
    expect(getStepsFromStartingPoint(`.....
    .S-7.
    .|.|.
    .L-J.
    .....`))
      .toBe(4);
  });
    
  test('should returns fartest distance for sample data 1', () => {
    expect(getStepsFromStartingPoint(`..F7.
    .FJ|.
    SJ.L7
    |F--J
    LJ...`))
      .toBe(8);
  });

});