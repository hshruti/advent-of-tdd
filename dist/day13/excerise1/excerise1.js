"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNumberOfReflectionNode = void 0;
const input_1 = require("./input");
function getNumberOfReflectionNode(input) {
    if (input.trim()) {
        let total = 0, isVertical = 0, verticalPattern = [], pattern = [], index = 0, startIndex = undefined, endIndex = undefined;
        input.trim().split('\n').forEach((line) => {
            line = line.trim();
            index = 0;
            if (line !== '') {
                pattern.push(line);
                if (verticalPattern.length === 0) {
                    verticalPattern = line.split('');
                }
                else {
                    verticalPattern = verticalPattern.map((val, index) => val + line.charAt(index));
                }
            }
            else {
                isVertical = isRefection(verticalPattern);
                if (isVertical > 0) {
                    total += isVertical;
                }
                else {
                    total += (100 * isRefection(pattern));
                }
                pattern = [];
                verticalPattern = [];
            }
        });
        isVertical = isRefection(verticalPattern);
        if (isVertical > 0) {
            total += isVertical;
        }
        else {
            total += (100 * isRefection(pattern));
        }
        return total;
    }
    return 0;
}
exports.getNumberOfReflectionNode = getNumberOfReflectionNode;
function isRefection(pattern) {
    let patternLength = 0;
    let startPattern = [...pattern], endPattern = [...pattern];
    let index = 0;
    while (index < pattern.length && (startPattern.join('\n') !== [...startPattern].reverse().join('\n')
        && endPattern.join('\n') !== [...endPattern].reverse().join('\n'))) {
        index++;
        startPattern.shift();
        endPattern.pop();
        if (startPattern.length % 2 !== 0) {
            index++;
            startPattern.shift();
            endPattern.pop();
        }
    }
    if (startPattern.length > 1) {
        if (startPattern.join('\n') === [...startPattern].reverse().join('\n')) {
            patternLength = ((pattern.length - index) / 2) + index;
        }
        else {
            patternLength = ((pattern.length - index) / 2);
        }
    }
    return Math.floor(patternLength);
}
console.log('Day 13 excerise 1 o/p :', getNumberOfReflectionNode(input_1.data));
