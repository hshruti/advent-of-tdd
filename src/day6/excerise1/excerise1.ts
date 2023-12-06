import {data} from './input';
export function getNumberOfWays (input:string): number {
    let product = 1;
    if (input) {
        let lines: any = input.trim().split('\n');
        lines = lines.map((line: any) => {
            return Number(line.replace(/[A-z:\s]/gi, ''));
        })
        const distance = lines[1];
        const time = lines[0];
            let start = Math.ceil(distance/time);
            if (start > 0 && start < time) {
                while (((time - start) * start) <= distance && start < time) {
                    start++;
                }
                let end = time - start;
                
                product *= (end -start + 1);
            }
        
    }
    return product;
    
}

console.log('Day 6 excerise 1 o/p :', getNumberOfWays(data));
