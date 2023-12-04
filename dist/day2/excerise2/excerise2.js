"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSumOfPowerOfSets = void 0;
const input_1 = require("./input");
function getSumOfPowerOfSets(input) {
    if (input.trim()) {
        return input.split('\n').reduce((total, currentValue) => {
            const [gameId, ballsDrawn] = currentValue.split(':');
            const minBalls = {};
            const rounds = ballsDrawn.split(';');
            for (let i = 0; i < rounds.length; i++) {
                const balls = rounds[i].split(',');
                for (let j = 0; j < balls.length; j++) {
                    const [count, color] = balls[j].trim().split(' ');
                    if (!minBalls[color] || (minBalls[color] < Number(count))) {
                        minBalls[color] = Number(count);
                    }
                }
            }
            ;
            const powerOfSets = Object.keys(minBalls).reduce((_total, currentValue) => {
                return _total * minBalls[currentValue];
            }, 1);
            return total + powerOfSets;
        }, 0);
    }
    return 0;
}
exports.getSumOfPowerOfSets = getSumOfPowerOfSets;
console.log('Day 2 excerise 2 o/p :', getSumOfPowerOfSets(input_1.data));
