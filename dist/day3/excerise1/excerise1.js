"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSumOfNumberPartOfSchematic = void 0;
const input_1 = require("./input");
function getSumOfNumberPartOfSchematic(input) {
    let total = 0;
    if (input) {
        let numbers = new Map();
        let symbols = new Map();
        let arr = input.trim().split('\n').forEach((row, x) => {
            let numStr = '';
            let numY = undefined;
            row.trim().split('').forEach((col, y) => {
                if (col === '.') {
                }
                else if (col.search(/[0-9]/gi) > -1) {
                    numY = numY == undefined ? y : numY;
                    numStr += col;
                    return;
                }
                else if (col === '*') {
                    symbols.set({ x, y }, col);
                }
                if (numStr != '') {
                    numbers.set({ x, y: numY }, Number(numStr));
                    numStr = '';
                    numY = undefined;
                }
            });
            if (numStr != '') {
                numbers.set({ x, y: numY }, Number(numStr));
                numStr = '';
                numY = undefined;
            }
        });
        symbols.forEach((symbol, symbolKey) => {
            let toBeInclude = [];
            numbers.forEach((val, key) => {
                if ((key.x - 1) <= symbolKey.x && (key.x + 1) >= symbolKey.x &&
                    (key.y - 1) <= symbolKey.y && (key.y + val.toString().length) >= symbolKey.y) {
                    toBeInclude.push(val);
                }
            });
            if (toBeInclude.length > 1) {
                total += toBeInclude.reduce((a, b) => a * b, 1);
            }
            toBeInclude = [];
        });
    }
    return total;
}
exports.getSumOfNumberPartOfSchematic = getSumOfNumberPartOfSchematic;
console.log('Day 3 excerise 1 o/p :', getSumOfNumberPartOfSchematic(input_1.data));
