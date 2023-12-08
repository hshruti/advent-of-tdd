"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGhostSteps = void 0;
const input_1 = require("./input");
function getGhostSteps(input) {
    let startArr = [];
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
                if (key.charAt(key.length - 1) === 'A') {
                    startArr.push(key);
                }
            }
        });
        return startArr.map((start) => {
            let index = 0, length = direction.length;
            while (start.charAt(start.length - 1) !== 'Z') {
                start = map[start][direction[index % length]];
                index++;
            }
            return index;
        }).reduce((a, val) => {
            let index = 2;
            let lcm = 1;
            while (!(val === 1 && a === 1)) {
                if (val % index == 0 || a % index === 0) {
                    val = val % index == 0 ? val / index : val;
                    a = a % index == 0 ? a / index : a;
                    lcm *= index;
                }
                else {
                    index++;
                }
            }
            return lcm;
        }, 1);
    }
    return 0;
}
exports.getGhostSteps = getGhostSteps;
console.log('Day 8 excerise 2 o/p :', getGhostSteps(input_1.data));
