"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const excerise1_1 = require("./excerise1");
(0, globals_1.describe)('Day 1 --> Excerise 1', () => {
    (0, globals_1.test)('should returns 0 when string is empty', () => {
        (0, globals_1.expect)((0, excerise1_1.getCalibrationSum)(''))
            .toBe(0);
    });
    (0, globals_1.test)('should returns 0 when string doesnt contain any number', () => {
        (0, globals_1.expect)((0, excerise1_1.getCalibrationSum)('Abc'))
            .toBe(0);
    });
    (0, globals_1.test)('should returns sum of value when string contain any number', () => {
        (0, globals_1.expect)((0, excerise1_1.getCalibrationSum)('1Abc4'))
            .toBe(14);
    });
    (0, globals_1.test)('should returns sum of value when string contain any number for multile lines', () => {
        (0, globals_1.expect)((0, excerise1_1.getCalibrationSum)(`1abc2
    pqr3stu8vwx
    a1b2c3d4e5f
    treb7uchet`))
            .toBe(142);
    });
});
