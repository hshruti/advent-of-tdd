import {data} from './input';
export function getCalibrationSum (input:string): number {
    return input.replace(/[A-z]/gi, '').split('\n')
                    .reduce( (accumulator: number, currentValue: string) => accumulator + Number(currentValue),
            0) || 0;
}

console.log('Day 1 excerise 1 o/p :', getCalibrationSum(data));
