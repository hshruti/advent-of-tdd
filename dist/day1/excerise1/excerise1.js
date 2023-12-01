"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCalibrationSum = void 0;
const input_1 = require("./input");
function getCalibrationSum(input) {
    return input.replace(/[A-z]/gi, '').split('\n')
        .reduce((accumulator, currentValue) => accumulator + Number(currentValue), 0) || 0;
}
exports.getCalibrationSum = getCalibrationSum;
console.log('Day 1 excerise 1 o/p :', getCalibrationSum(input_1.data));
