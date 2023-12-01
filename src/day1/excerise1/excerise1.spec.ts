import {describe, expect, test} from '@jest/globals';
import { getCalibrationSum } from './excerise1';

describe('Day 1 --> Excerise 1', () => {
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
      .toBe(14);
  });

  
  test('should returns sum of value when string contain any number for multile lines', () => {
    expect(getCalibrationSum(`1abc2
    pqr3stu8vwx
    a1b2c3d4e5f
    treb7uchet`))
      .toBe(142);
  });

});