"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSumOfExtrapolatedValues = void 0;
const input_1 = require("./input");
function getSumOfExtrapolatedValues(input) {
    if (input.trim()) {
        let count = 0;
        input.trim().split('\n').forEach((line, x) => {
            const arr = [];
            arr[0] = line.trim().split(' ').map((value) => Number(value));
            let isDiffZero = false;
            let row = -1;
            while (!isDiffZero) {
                isDiffZero = true;
                row++;
                arr[row + 1] = [];
                for (let i = 0; i < arr[row].length - 1; i++) {
                    const diff = arr[row][i + 1] - arr[row][i];
                    arr[row + 1].push(diff);
                    if (diff !== 0) {
                        isDiffZero = false;
                    }
                }
            }
            let diff = 0;
            for (let i = arr.length - 2; i >= 0; i--) {
                diff = arr[i][arr[i].length - 1] + diff;
            }
            count += diff;
        });
        return count;
    }
    return 0;
}
exports.getSumOfExtrapolatedValues = getSumOfExtrapolatedValues;
console.log('Day 9 excerise 1 o/p :', getSumOfExtrapolatedValues(input_1.data));
