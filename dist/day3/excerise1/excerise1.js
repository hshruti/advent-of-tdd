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
                else {
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
        numbers.forEach((val, key) => {
            let toBeInclude = false;
            symbols.forEach((symbol, symbolKey) => {
                if ((key.x - 1) <= symbolKey.x && (key.x + 1) >= symbolKey.x &&
                    (key.y - 1) <= symbolKey.y && (key.y + val.toString().length) >= symbolKey.y) {
                    toBeInclude = true;
                }
            });
            if (toBeInclude) {
                total += val;
            }
        });
    }
    return total;
}
exports.getSumOfNumberPartOfSchematic = getSumOfNumberPartOfSchematic;
console.log('Day 3 excerise 1 o/p  560670:', getSumOfNumberPartOfSchematic(input_1.data));
