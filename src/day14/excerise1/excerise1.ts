import {data} from './input';
export function getTotalLoad (input:string): number {
   
    if (input.trim()) {
     let total = 0;
     const pattern = input.trim().split('\n').map((line:string) => {
        return line.trim().split('');
     });
     let count  = 1;        
     const value = pattern.length;
     let prevPattern = '';
     while (count <= 10000000 && prevPattern !== pattern.join('\n')) {
        prevPattern = pattern.join('\n'); total = 0;
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
                } else  {
                    emptyIndex = [];
                }
            }
            emptyIndex = [];
        }

        emptyIndex = [];
        for (let row = 0;  row < value; row++) {
            for (let col = 0;  col < pattern[0].length; col++) {
                if (pattern[row][col] === '.') {
                    emptyIndex.push(col);
                } else if (pattern[row][col] === 'O') {
                    let newCol;
                    if (emptyIndex.length > 0) {
                        newCol = emptyIndex.shift() as number;
                        emptyIndex.push(col);
                        pattern[row][newCol] = 'O';
                        pattern[row][col] = '.';
                    }
                } else  {
                    emptyIndex = [];
                }
            }
            emptyIndex = [];
        }

        emptyIndex = [];
        for (let col = 0;  col < pattern[0].length; col++) {
            for (let row = value - 1;  row >= 0; row--) {
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
                } else  {
                    emptyIndex = [];
                }
            }
            emptyIndex = [];
        }
            
        emptyIndex = [];
        for (let row = 0;  row < value; row++) {
            for (let col = pattern[0].length - 1;  col >= 0; col--) {
                if (pattern[row][col] === '.') {
                    emptyIndex.push(col);
                } else if (pattern[row][col] === 'O') {
                    let newCol;
                    if (emptyIndex.length > 0) {
                        newCol = emptyIndex.shift() as number;
                        emptyIndex.push(col);
                        pattern[row][newCol] = 'O';
                        pattern[row][col] = '.';
                    }
                } else  {
                    emptyIndex = [];
                }
            }
            emptyIndex = [];
        }
        count++;
          
    for (let col = 0;  col < pattern[0].length; col++) {
        for (let row = 0;  row < value; row++) { 
            if (pattern[row][col] === 'O') {
                total += (value - row);
            }
        }
    }
    }
  

        return total;
    }
    return 0;
}



//console.log('Day 14 excerise 1 o/p :', getTotalLoad(data));

