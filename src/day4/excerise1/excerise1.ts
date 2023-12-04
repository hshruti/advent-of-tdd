import {data} from './input';
export function getPoints (input:string): number {
    let total = 0;
    if (input.trim()) {
        const cards = input.split('\n');
        cards.forEach(card => {
            const [name, numbers] = card.split(':');
            const [winingNumber, yourNumber] = numbers.trim().split('|').map((val: string) => val.trim().split(' '));
            const numberPresent = winingNumber.filter(num => num.trim() !== '' && yourNumber.indexOf(num) > -1);
            let score = 0;
            for (let i  = 0; i <numberPresent.length; i++ ) {
                if ( i === 0) {
                    score = 1
                } else {
                    score *= 2
                }
                
            }
            total += score; 
            
        });

    }
    return total;
    
}

console.log('Day 4 excerise 1 o/p :', getPoints(data));
