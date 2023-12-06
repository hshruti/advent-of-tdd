import {data} from './input';
export function getLowestLocation (input:string): number {
    let min = Number.POSITIVE_INFINITY;
    const mapText = ['seeds', 'seed-to-soil map', 'soil-to-fertilizer map', 'fertilizer-to-water map', 'water-to-light map', 
    'light-to-temperature map', 'temperature-to-humidity map', 'humidity-to-location map'];
    if (input) {
        let activeText = '',  seeds:any = {};
        input.split('\n').forEach(line => {
            if(!!line.trim()) {
                 activeText = line.includes(':') ? line.split(':')[0].trim() : activeText; 
                 let values =  (line.includes(':') ? line.split(':')[1].trim() : line.trim()).split(' ');   
                if (values.length > 0) {
                    let destType = '', sourceType ='';
                    switch  (activeText) {
                        case 'seeds':
                            values.forEach(val => seeds[val] = {seed: Number(val)});
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

                    if (activeText !== 'seed') {
                        const [dest, source, length] = values.map(val => Number(val));
                        Object.keys(seeds).forEach(key => {
                           seeds[key][destType] =  seeds[key][destType] || seeds[key][sourceType] ;
                            if (source <= seeds[key][sourceType] && seeds[key][sourceType] <= (source + length)) {
                                const diff = seeds[key][sourceType] - source;
                                seeds[key][destType] = dest + diff;
                            }
                            
                        })
                    }
                }
            }
        });
        Object.keys(seeds).forEach(key => { 
            if (seeds[key].location < min) {
                min = seeds[key].location
            }
        })
    }
    return min;
    
}

console.log('Day 5 excerise 1 o/p :', getLowestLocation(data));
