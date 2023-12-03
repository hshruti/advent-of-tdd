import {data} from './input';
export function getSumOfPowerOfSets (input:string): number {
    if(input.trim()) {
        return input.split('\n').reduce((total, currentValue) => {
            const [gameId,  ballsDrawn] = currentValue.split(':');
            const minBalls: any = {};
            const rounds = ballsDrawn.split(';');
            for (let i= 0; i < rounds.length; i++) {
                const balls = rounds[i].split(',');
                for(let j= 0; j < balls.length; j++) {
                   const [count, color] = balls[j].trim().split(' ');
                   if (!minBalls[color] || (minBalls[color] < Number(count))) {
                    minBalls[color] = Number(count);
                   }
                   
                }
            };

            const powerOfSets =  Object.keys(minBalls).reduce((_total, currentValue) => {
                return _total * minBalls[currentValue]
            }, 1)
            return total +  powerOfSets;

        }, 0)
    }

    return 0;
}

console.log('Day 2 excerise 2 o/p :', getSumOfPowerOfSets(data));
