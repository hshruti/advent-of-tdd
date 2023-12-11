import {data} from './input';
export function getSumOfExtrapolatedValues (input:string, inEnd = true): number {
 if (input.trim()) {
    let count = 0;
    input.trim().split('\n').forEach((line: any, x: number) => {
        const arr = [];
        arr[0] = line.trim().split(' ').map((value: string) => Number(value));
        let isDiffZero = false;
        let row = -1;
        while (!isDiffZero) {
            isDiffZero = true;
            row++;
             arr[row+1] = [];
            for (let i = 0; i < arr[row].length - 1; i++) {
                const diff = arr[row][i+1] - arr[row][i];
                arr[row+1].push(diff); 
                if(diff !== 0) {
                    isDiffZero = false;
                }
            }
        }
        let diff = 0;

        for (let i = arr.length -2; i >= 0; i--) {
            if (inEnd) {
            diff = arr[i][arr[i].length - 1] + diff;
            } else {
                diff = arr[i][0] - diff;
            }
        }
        count += diff;

    });

    return count;

 }
 return 0;
}

console.log('Day 9 excerise 1 o/p :', getSumOfExtrapolatedValues(data));
console.log('Day 9 excerise 2 o/p :', getSumOfExtrapolatedValues(data, false));
