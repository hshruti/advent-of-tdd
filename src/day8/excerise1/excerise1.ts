import {data} from './input';
export function getSteps (input:string): number {
    if (input) { 
        let direction: any = [];
        let map:any = {};
        input.trim().split('\n').forEach((val, i) => {
            if (i === 0) {
                direction = val.trim().split('');
            } else if (val.trim()) {
                const [key, L, R] = val.trim().replace('=', ',').replace(new RegExp(/[\s()]/, 'gi'), '').split(',');
                map[key] = {L, R};
            }
        });
        let start = 'AAA', end = 'ZZZ', index = 0, length = direction.length;
         while (start !== end) {
            start = map[start][direction[index%length]];
            index++;
         }
         return index;
    }
    return 0;
    
}

console.log('Day 8 excerise 1 o/p :', getSteps(data));
