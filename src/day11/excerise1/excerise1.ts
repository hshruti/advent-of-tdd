import {data} from './input';
export function getSumOfTheLength (input:string, incrementBy = 2): number {
   
    if (input.trim()) {
        let totalSteps = 0;
        const map: any = {};
        let count:number = 1;
        let x = 0;
        const yArr:any = [];
        input.trim().split('\n').forEach((line) => {
            line.trim().split('')
            .forEach((value, y) => {
                if (value !== '.'){
                    map[count] = {x, y}
                    if (!yArr[y]) {
                        yArr[y] = [];
                    }
                    yArr[y].push(count);
                    count++;
                }
            });
            if(line.search('#')=== -1) {
                x+= incrementBy;
            } else {
                x++;
            }
        });
        let y = 0;
        for(let index = 0; index <yArr.length; index++){
            let val = yArr[index];
            if (!val) {
                y += incrementBy;
                
            } else {
                if (y !== index){
                    val.forEach((key: number) => {
                        map[key].y = y;
                    })
                }
                y++;
            }
        }

        const length = Object.keys(map).length;
        for (let i = 1; i < length; i++) {
            for (let j = i+1; j <= length; j++) {
                totalSteps +=( Math.abs(map[j].x - map[i].x) +  Math.abs(map[j].y - map[i].y))
            }
        }
        return totalSteps;
    }
    return 0;
}

console.log('Day 11 excerise 1 o/p :', getSumOfTheLength(data));
console.log('Day 11 excerise 2 o/p :', getSumOfTheLength(data, 1000000));
