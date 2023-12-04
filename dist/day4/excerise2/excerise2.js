"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTotalScorecards = void 0;
const input_1 = require("./input");
function getTotalScorecards(input) {
    let total = 0;
    if (input.trim()) {
        const cards = input.split('\n');
        const winingCards = [];
        cards.forEach((card, index) => {
            const [name, numbers] = card.split(':');
            const [winingNumber, yourNumber] = numbers.trim().split('|').map((val) => val.trim().split(' '));
            const numberPresent = winingNumber.filter(num => num.trim() !== '' && yourNumber.indexOf(num) > -1);
            const incrementBy = (winingCards[index] || 0) + 1;
            for (let i = 1; i <= numberPresent.length; i++) {
                winingCards[index + i] = winingCards[index + i] ? (winingCards[index + i] + incrementBy) : incrementBy;
            }
            total += incrementBy;
        });
    }
    return total;
}
exports.getTotalScorecards = getTotalScorecards;
console.log('Day 4 excerise 1 o/p :', getTotalScorecards(input_1.data));
