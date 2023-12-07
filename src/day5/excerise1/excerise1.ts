import {data} from './input';
export function getLowestLocation (input:string): number {
    let min = Number.POSITIVE_INFINITY;
    if (input) {
        let activeText = '',  sourceObj:any = [], destObj:any = [],
         newSourceObj: any = [];
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
                                destObj.push({
                                    min: Number(values[i]),
                                    max: Number(values[i]) + Number(values[i + 1]) - 1
                                })
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

                    if (activeText !== 'seeds' ) {
                        let [dest, source, length] = values.map(val => Number(val));
                        if( previousText !== activeText) {
                            sourceObj = [...destObj, ...sourceObj];
                            previousText = activeText;
                            destObj = [];

                        }
                        if (values.length === 3) {
                        
                            for(let i = 0; i < sourceObj.length; i++) {
                                if (sourceObj[i].min >= source && sourceObj[i].min < source+length ) {
                                    if (sourceObj[i].max < source+length) {
                                        destObj.push({
                                            min: dest + (sourceObj[i].min - source),
                                            max: dest + (sourceObj[i].max - source)
                                        });
                                    } else {
                                        destObj.push({
                                            min: dest + (sourceObj[i].min - source),
                                            max: dest + length - 1
                                        });
                                        newSourceObj.push({
                                            min: source + length,
                                            max: sourceObj[i].max
                                        });
                                    }
                                } else  if (sourceObj[i].max >= source && sourceObj[i].max < source+length ) {
                                        destObj.push({
                                            min: dest,
                                            max: dest + (sourceObj[i].max - source)
                                        });
                                        newSourceObj.push({
                                            min: sourceObj[i].min,
                                            max: sourceObj[i].max -1
                                        });
                            
                                }  else  if (sourceObj[i].min < source && sourceObj[i].max >= source+length ) {
                                    destObj.push({
                                        min: dest,
                                        max: dest + length - 1
                                    });
                                    newSourceObj.push({
                                        min: sourceObj[i].min,
                                        max: source - 1
                                    });
                                    newSourceObj.push({
                                        min: source+ length,
                                        max: sourceObj[i].max
                                    });
                        
                                } else {
                                    newSourceObj.push({...sourceObj[i]});
                                }
                            }
                            sourceObj = newSourceObj;
                            newSourceObj = [];
                        }
                    }
                }
            }
        });
        [...destObj, ...sourceObj].forEach((val: any) => {
        if (min > val.min) {
            min = val.min;
        }
      });
    }
    return min;
    
}

console.log('Day 5 excerise 1 o/p :', getLowestLocation(data));
