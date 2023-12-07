import {data} from './input';
export function getTotalWinings (input:string): number {
    let total = 0;
    const strength= [ 'A', 'K', 'Q', 'T', '9', '8', '7', '6', '5', '4', '3', '2', 'J']
    const cardGroup: any = [];
    if (input) {
      const rounds = input.trim().split('\n');
      rounds.forEach(line => {
        const [cards, bid]  = line.trim().split(' ');
        const cardWithoutJ = cards.trim().replace(new RegExp('J', 'gi'), '').trim(); //J622K -> 622k
        const firstReplace = cardWithoutJ.trim().replace(new RegExp(cardWithoutJ.trim().charAt(0), 'gi'), '').trim(); // 22k
        const secondReplace = firstReplace.trim().replace(new RegExp(firstReplace.charAt(0), 'gi'), '').trim(); //k
        const thirdReplace = secondReplace.trim().replace(new RegExp(secondReplace.charAt(0), 'gi'), '').trim();
        const fourthReplace = thirdReplace.trim().replace(new RegExp(thirdReplace.charAt(0), 'gi'), '').trim();
        const totalJ = cards.trim().length - cardWithoutJ.length;
        let index = -1;
        if (firstReplace.length === 0) {
            index = 0;
        } else if (secondReplace.length === 0  && (firstReplace.length === 1 || (firstReplace.length + totalJ) === 4)) {
            index = 1;
        } else if (secondReplace.length === 0) {
            index = 2;
        } else if (thirdReplace.length === 0 && (
            (firstReplace.length === 2 && secondReplace.length === 1)
            || ((firstReplace.length + totalJ) === 4 && secondReplace.length === 1)
            || ((firstReplace.length + totalJ) === 4 && (secondReplace.length + totalJ) === 3)
        )) {
            index = 3;
        } else if (thirdReplace.length === 0) {
            index = 4;
        } else if (fourthReplace.length === 0) {
            index = 5;
        } else {
            index = 6
        }
        if (!cardGroup[index]) {
            cardGroup[index] = {};
        } 
        const value  = cards.trim().split('').map(val => {
           const num = strength.length - (strength.indexOf(val) + 1);
           return num <=9 ? '0'+num : num
        } ).join('');
        cardGroup[index][Number(value)]= {
            cards: cards.trim(),
            bid: Number(bid.trim())
        };
      });
      let rank = 1;
      for (let i = cardGroup.length - 1; i >= 0; i--) {
            if (cardGroup[i]) {
                Object.keys(cardGroup[i]).forEach((key: any) => {
                    total +=  (rank * cardGroup[i][key].bid);
                    rank++;
                })
            }
      }
        
    }
    return total;
    
}

console.log('Day 7 excerise 1 o/p :', getTotalWinings(data));
