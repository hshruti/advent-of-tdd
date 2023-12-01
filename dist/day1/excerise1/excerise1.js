"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCalibrationSum = void 0;
const input_1 = require("./input");
function getCalibrationSum(input) {
    ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'].forEach((val, index) => {
        input = input.replace(new RegExp(val, 'gi'), (val.charAt(0) + (index + 1) + val.charAt(val.length - 1)));
    });
    return input.replace(/[A-z]/gi, '')
        .split('\n')
        .reduce((accumulator, currentValue) => {
        const numbers = currentValue.trim().split('');
        const newNumber = numbers.length > 0 ? numbers[0] + numbers[numbers.length - 1] : 0;
        return accumulator + Number(newNumber);
    }, 0) || 0;
}
exports.getCalibrationSum = getCalibrationSum;
console.log('Day 1 excerise 1 o/p :', getCalibrationSum(input_1.data));
