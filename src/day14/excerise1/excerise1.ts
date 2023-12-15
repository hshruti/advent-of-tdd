import {data} from './input';
export function getTotalLoad (input:string): number {
   
    if (input.trim()) {
     let total = 0;
     const pattern = input.trim().split('\n').map((line:string) => {
        return line.trim().split('');
     });


     const value = pattern.length;
     let emptyIndex: number[] = [];
     for (let col = 0;  col < pattern[0].length; col++) {
        for (let row = 0;  row < value; row++) {
            if (pattern[row][col] === '.') {
                emptyIndex.push(row);
            } else if (pattern[row][col] === 'O') {
                let newrow;
                if (emptyIndex.length > 0) {
                    newrow = emptyIndex.shift() as number;
                    emptyIndex.push(row);
                    pattern[newrow][col] = 'O';
                    pattern[row][col] = '.';
                }
                total += (value - (newrow === undefined ? row : newrow));
            } else  {
                emptyIndex = [];
            }
        }
        emptyIndex = [];
     }
         
     console.log(pattern.join('\n'));       
        
        return total;
    }
    return 0;
}



console.log('Day 14 excerise 1 o/p :', getTotalLoad(data));

