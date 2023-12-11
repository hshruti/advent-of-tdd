"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSumOfTheLength = void 0;
const input_1 = require("./input");
function getSumOfTheLength(input, incrementBy = 1) {
    if (input.trim()) {
        let totalSteps = 0;
        const map = {};
        let count = 1;
        let x = 0;
        const yArr = [];
        input.trim().split('\n').forEach((line) => {
            line.trim().split('')
                .forEach((value, y) => {
                if (value !== '.') {
                    map[count] = { x, y };
                    if (!yArr[y]) {
                        yArr[y] = [];
                    }
                    yArr[y].push(count);
                    count++;
                }
            });
            x++;
            if (line.search('#') === -1) {
                x++;
            }
        });
        let y = 0;
        for (let index = 0; index < yArr.length; index++) {
            let val = yArr[index];
            if (!val) {
                y += 1;
            }
            else {
                if (y !== index) {
                    val.forEach((key) => {
                        map[key].y = y;
                    });
                }
            }
            y++;
        }
        const length = Object.keys(map).length;
        for (let i = 1; i < length; i++) {
            for (let j = i + 1; j <= length; j++) {
                totalSteps += (Math.abs(map[j].x - map[i].x) + Math.abs(map[j].y - map[i].y));
            }
        }
        return totalSteps;
    }
    return 0;
}
exports.getSumOfTheLength = getSumOfTheLength;
console.log('Day 11 excerise 1 o/p :', getSumOfTheLength(input_1.data));
