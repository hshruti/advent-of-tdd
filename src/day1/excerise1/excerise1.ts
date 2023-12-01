import {data} from './input';
export function getCalibrationSum (input:string): number {
    return input.replace(/[A-z]/gi, '')
                .split('\n')
                .reduce((accumulator, currentValue) => {
                    const numbers = currentValue.trim().split('');
                    const newNumber = numbers.length > 0 ? numbers[0] + numbers[numbers.length - 1] : 0;
                    return accumulator + Number(newNumber)
                }, 0) || 0;
}

console.log('Day 1 excerise 1 o/p :', getCalibrationSum(data));
