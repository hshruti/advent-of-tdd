"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTotalLoad = void 0;
const input_1 = require("./input");
function getTotalLoad(input) {
    if (input.trim()) {
        let total = 0;
        const pattern = input.trim().split('\n').map((line) => {
            return line.trim().split('');
        });
        console.log(pattern.join('\n'));
        const value = pattern.length;
        let emptyIndex = [];
        for (let col = 0; col < pattern[0].length; col++) {
            for (let row = 0; row < value; row++) {
                if (pattern[row][col] === '.') {
                    emptyIndex.push(row);
                }
                else if (pattern[row][col] === 'O') {
                    let newrow;
                    if (emptyIndex.length > 0) {
                        newrow = emptyIndex.shift();
                        emptyIndex.push(row);
                        pattern[newrow][col] = 'O';
                        pattern[row][col] = '.';
                    }
                    total += (value - (newrow === undefined ? row : newrow));
                }
                else {
                    emptyIndex = [];
                }
            }
            emptyIndex = [];
        }
        console.log(pattern.join('\n'));
        return total;
    }
    return 0;
}
exports.getTotalLoad = getTotalLoad;
console.log('Day 14 excerise 1 o/p :', getTotalLoad(input_1.data));
