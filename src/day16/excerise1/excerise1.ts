import {data} from './input';
const map:any = {};
var count = 0;
var energizedArr: any;
export function getEnergizedTiles (input:string): number {
    count = 0;
    energizedArr = [];
    var arr =  input.trim().split('\n').map(line => line.trim().split(''));
      energizedArr = input.trim().split('\n').map(line => line.trim().split(''));

      entryPath(arr, 0,0, 0,1);
      return count;
}


function entryPath(arr: any, x: number, y: number, incrementXBy = 0, incrementYBy = 1 ) {
  
    while (x >=0 && y >= 0 && x < arr.length && y < arr.length) {
      if (energizedArr[x][y] === '#' &&  map[x+'-'+ y] && map[x+'-'+ y].search('dir: '+ incrementXBy + ' ' + incrementYBy)> -1) {
        return;
      }
      if (energizedArr[x][y] !== '#') {
          count++;
          }
      
        energizedArr[x][y] = '#';
      if(! map[x+'-'+ y] ) {
                map[x+'-'+ y] = '';
               }
      map[x+'-'+ y] += 'dir: '+ incrementXBy + ' ' + incrementYBy; 
      if (arr[x][y] == '.') {
       x += incrementXBy; 
       y += incrementYBy;
     } else if (arr[x][y] == '|') {
        if (incrementXBy === 0) {
          entryPath(arr, x - 1, y, -1, 0);
          entryPath(arr, x + 1, y, 1, 0);
          return;
        }
         x += incrementXBy; 
       y += incrementYBy;
     } else if (arr[x][y] == '-') {
        if (incrementYBy === 0) {
          entryPath(arr, x, y - 1, 0, -1);
          entryPath(arr, x, y + 1, 0, 1);
          return;
        }
         x += incrementXBy; 
       y += incrementYBy;
     }  else if (arr[x][y] === '\\') {
        entryPath(arr, x + incrementYBy, y + incrementXBy, incrementYBy, incrementXBy)
         return;
      
     } else if (arr[x][y] == '/') {
        entryPath(arr, x + (incrementYBy * -1), y + (incrementXBy * -1), (incrementYBy * -1), (incrementXBy * -1))
         return;
      
     }
    }
    
    
    
    
  }

console.log('Day 16 excerise 1 o/p :', getEnergizedTiles(data));

