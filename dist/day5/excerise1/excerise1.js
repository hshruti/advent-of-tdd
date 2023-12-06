"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLowestLocation = void 0;
const input_1 = require("./input");
function getLowestLocation(input) {
    let min = Number.POSITIVE_INFINITY;
    if (input) {
        let activeText = '', sourceObj = {}, destObj = {}, ranges = [], oldRanges = [];
        input.split('\n').forEach(line => {
            if (!!line.trim()) {
                let previousText = activeText;
                activeText = line.includes(':') ? line.split(':')[0].trim() : activeText;
                let values = (line.includes(':') ? line.split(':')[1].trim() : line.trim()).split(' ');
                if (values.length > 0) {
                    let destType = '', sourceType = '';
                    switch (activeText) {
                        case 'seeds':
                            for (let i = 0; i < values.length; i += 2) {
                                let val = Number(values[i]);
                                let endVal = val + Number(values[i + 1]);
                                ranges.push({ min: val, max: endVal - 1 });
                                while (val < endVal) {
                                    destObj[val] = { seed: val };
                                    val++;
                                }
                            }
                            break;
                        case 'seed-to-soil map':
                            destType = 'soil', sourceType = 'seed';
                            break;
                        case 'soil-to-fertilizer map':
                            destType = 'fertilizer', sourceType = 'soil';
                            break;
                        case 'fertilizer-to-water map':
                            destType = 'water', sourceType = 'fertilizer';
                            break;
                        case 'water-to-light map':
                            destType = 'light', sourceType = 'water';
                            break;
                        case 'light-to-temperature map':
                            destType = 'temperature', sourceType = 'light';
                            break;
                        case 'temperature-to-humidity map':
                            destType = 'humidity', sourceType = 'temperature';
                            break;
                        case 'humidity-to-location map':
                            destType = 'location', sourceType = 'humidity';
                            break;
                    }
                    if (activeText !== 'seeds') {
                        let [dest, source, length] = values.map(val => Number(val));
                        if (previousText !== activeText) {
                            sourceObj = Object.assign({}, destObj);
                            previousText = activeText;
                            oldRanges = [...ranges];
                        }
                        oldRanges.forEach((val) => {
                            if (val.max >= source && val.min < source + length) {
                                ranges.push({ min: source, max: source + length - 1 });
                                while (length > 0) {
                                    if (sourceObj[source]) {
                                        if (destObj[source][sourceType] === undefined || destObj[source][sourceType] === source) {
                                            delete destObj[source];
                                        }
                                        destObj[dest] = Object.assign({}, sourceObj[source]);
                                        destObj[dest][destType] = dest;
                                    }
                                    source++;
                                    dest++;
                                    length--;
                                }
                            }
                        });
                    }
                }
            }
        });
        return Number(Object.keys(destObj)[0]);
    }
    return min;
}
exports.getLowestLocation = getLowestLocation;
console.log('Day 5 excerise 1 o/p :', getLowestLocation(input_1.data));
