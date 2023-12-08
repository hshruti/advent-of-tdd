"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSteps = void 0;
const input_1 = require("./input");
function getSteps(input) {
    if (input) {
        let direction = [];
        let map = {};
        input.trim().split('\n').forEach((val, i) => {
            if (i === 0) {
                direction = val.trim().split('');
            }
            else if (val.trim()) {
                const [key, L, R] = val.trim().replace('=', ',').replace(new RegExp(/[\s()]/, 'gi'), '').split(',');
                map[key] = { L, R };
            }
        });
        let start = 'AAA', end = 'ZZZ', index = 0, length = direction.length;
        while (start !== end) {
            start = map[start][direction[index % length]];
            index++;
        }
        return index;
    }
    return 0;
}
exports.getSteps = getSteps;
console.log('Day 8 excerise 1 o/p :', getSteps(input_1.data));
