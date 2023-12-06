"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNumberOfWays = void 0;
const input_1 = require("./input");
function getNumberOfWays(input) {
    let product = 1;
    if (input) {
        let lines = input.trim().split('\n');
        lines = lines.map((line) => {
            return Number(line.replace(/[A-z:\s]/gi, ''));
        });
        const distance = lines[1];
        const time = lines[0];
        let start = Math.ceil(distance / time);
        if (start > 0 && start < time) {
            while (((time - start) * start) <= distance && start < time) {
                start++;
            }
            let end = time - start;
            product *= (end - start + 1);
        }
    }
    return product;
}
exports.getNumberOfWays = getNumberOfWays;
console.log('Day 6 excerise 1 o/p :', getNumberOfWays(input_1.data));
