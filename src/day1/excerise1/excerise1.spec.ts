import {describe, expect, test} from '@jest/globals';
import { getCalibrationSum } from './excerise1';

describe('TEST JEST TYPESCRIPT', () => {
  test('should returns 0 when string is empty', () => {
    expect(getCalibrationSum(''))
      .toBe(0);
  });
  test('should returns 0 when string doesnt contain any number', () => {
    expect(getCalibrationSum('Abc'))
      .toBe(0);
  });

  test('should returns sum of value when string contain any number', () => {
    expect(getCalibrationSum('1Abc4'))
      .toBe(5);
  });

  
  test('should returns sum of value when string contain any number for multile lines', () => {
    expect(getCalibrationSum(`1Abc4
    sdf
    10dd5`))
      .toBe(5);
  });

});