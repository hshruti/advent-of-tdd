import {data} from './input';
export function getSumOfNumberPartOfSchematic (input:string): number {
    let total = 0;
    const checkPos= [[-1, -1], [-1, 0], [-1 , 1],
                     [0, -1],           [0, 1],
                     [1, -1], [1, 0], [1, 1] ];
    if (input) {
        const schematicArr = input.split('\n').map(line => line.trim().split(''));
        for (let i = 0; i < schematicArr.length; i++) {
            let numberStart = '';
            let isAdjacentSymbol = false;
            for (let j = 0; j < schematicArr[i].length; j++) {
                if(schematicArr[i][j].search(/[0-9]/) > -1) {
                    numberStart += schematicArr[i][j];
                    if(!isAdjacentSymbol){
                        for (let k = 0; k < checkPos.length; k++) {
                            const adjI = i + checkPos[k][0];
                            const adjJ = j + checkPos[k][1];
                            if (schematicArr[adjI] && schematicArr[adjI][adjJ] !== undefined
                                && schematicArr[adjI][adjJ].search(/[0-9]/) === -1 && schematicArr[adjI][adjJ] !== '.') {
                                isAdjacentSymbol = true;
                                k = checkPos.length;
                            }
                        }
                    }
                }
                else { 
                    if(numberStart && isAdjacentSymbol) {
                        total += Number(numberStart);
                    }
                    numberStart = '';
                    isAdjacentSymbol= false;
                    
                }
            
            }
        }
    }
    return total;
    
}

console.log('Day 3 excerise 1 o/p :', getSumOfNumberPartOfSchematic(data));
