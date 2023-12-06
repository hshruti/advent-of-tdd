import {data} from './input';
export function getLowestLocation (input:string): number {
    let min = Number.POSITIVE_INFINITY;
    if (input) {
        let activeText = '',  sourceObj:any = {}, destObj:any = {},
        ranges= [], oldRanges= [];
        input.split('\n').forEach(line => {
            if(!!line.trim()) {
                 let previousText = activeText;
                 activeText = line.includes(':') ? line.split(':')[0].trim() : activeText; 
                 let values =  (line.includes(':') ? line.split(':')[1].trim() : line.trim()).split(' ');   
                if (values.length > 0) {
                    let destType = '', sourceType ='';
                    switch  (activeText) {
                        case 'seeds':
                            for (let i = 0; i < values.length; i+=2){
                                let val =Number(values[i]);
                                let endVal = val + Number(values[i + 1]);
                                ranges.push({min: val, max: endVal -1})
                                while (val < endVal){
                                    destObj[val] = {seed: val};
                                    val++;
                                }
                            }
                        break;
                        case 'seed-to-soil map': 
                            destType = 'soil', sourceType ='seed';
                            break;
                        case 'soil-to-fertilizer map':
                            destType = 'fertilizer', sourceType ='soil';
                            break;  
                        case 'fertilizer-to-water map':
                            destType = 'water', sourceType ='fertilizer';
                            break;  
                        case 'water-to-light map':
                            destType = 'light', sourceType ='water';
                            break;  
                        case 'light-to-temperature map':
                            destType = 'temperature', sourceType ='light';
                            break;  
                        case 'temperature-to-humidity map':
                            destType = 'humidity', sourceType ='temperature';
                            break;  
                        case 'humidity-to-location map':
                            destType = 'location', sourceType ='humidity';
                            break;  
                        
                    }

                    if (activeText !== 'seeds') {
                        let [dest, source, length] = values.map(val => Number(val));
                        if (previousText !== activeText) {
                            sourceObj = {...destObj};
                            previousText = activeText;
                        }
                        const keys = Object.keys(sourceObj);
                        while (length > 0) {
                            if (Number(keys[keys.length - 1]) >= source && (Number(keys[0]) < (source +length))  ) {
                                if (sourceObj[source]) {
                                    if (destObj[source][sourceType] === undefined ||destObj[source][sourceType] === source) {
                                        delete destObj[source];
                                    }
                                    destObj[dest] = {...sourceObj[source]};
                                    destObj[dest][destType] = dest;
                                }
                                source++;
                                dest++;
                                length--;
                                
                            }else {
                                length =0;
                            }
    
                        } 
                    }
                }
            }
        });
      return Number(Object.keys(destObj)[0]);
    }
    return min;
    
}

//console.log('Day 5 excerise 1 o/p :', getLowestLocation(data));
