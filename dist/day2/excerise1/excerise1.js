"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSumOfPossibleGameIDs = void 0;
const input_1 = require("./input");
function getSumOfPossibleGameIDs(input, configuration) {
    const color = Object.keys(configuration);
    if (input.trim() && configuration && Object.keys(color).length > 0) {
        let sum = 0;
        return input.split('\n').reduce((total, currentValue) => {
            const [gameId, ballsDrawn] = currentValue.split(':');
            let isPossible = true;
            const rounds = ballsDrawn.split(';');
            for (let i = 0; i < rounds.length; i++) {
                const balls = rounds[i].split(',');
                for (let j = 0; j < balls.length; j++) {
                    let isColorMatched = false;
                    for (let k = 0; k < color.length; k++) {
                        if (balls[j].search(new RegExp(color[k], 'gi')) > -1) {
                            isColorMatched = true;
                            if (Number(balls[j].replace(/[A-z]/gi, '').trim()) > configuration[color[k]]) {
                                isPossible = false;
                                k = color.length;
                                j = balls.length;
                                i = rounds.length;
                            }
                        }
                    }
                    if (!isColorMatched) {
                        isPossible = false;
                        j = balls.length;
                        i = rounds.length;
                    }
                }
            }
            ;
            if (isPossible) {
                total += Number(gameId.replace(/[A-z]/gi, '').trim());
            }
            return total;
        }, 0);
    }
    return 0;
}
exports.getSumOfPossibleGameIDs = getSumOfPossibleGameIDs;
console.log('Day 2 excerise 1 o/p :', getSumOfPossibleGameIDs(input_1.data, {
    red: 12, green: 13, blue: 14
}));
