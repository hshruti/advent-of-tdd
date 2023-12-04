import {data} from './input';
export function getTotalScorecards (input:string): number {
    let total = 0;
    if (input.trim()) {
        const cards = input.split('\n');
        const winingCards: number[] = [];
        cards.forEach((card, index) => {
            const [name, numbers] = card.split(':');
            const [winingNumber, yourNumber] = numbers.trim().split('|').map((val: string) => val.trim().split(' '));
            const numberPresent = winingNumber.filter(num => num.trim() !== '' && yourNumber.indexOf(num) > -1);
            const incrementBy = (winingCards[index] || 0) + 1;
            for (let i  = 1; i <= numberPresent.length; i++ ) {
                winingCards[index + i] = winingCards[index + i] ? (winingCards[index + i] + incrementBy ) : incrementBy;
            }
            total += incrementBy;
            
        });

    }
    return total;
    
}

console.log('Day 4 excerise 2 o/p :', getTotalScorecards(data));
