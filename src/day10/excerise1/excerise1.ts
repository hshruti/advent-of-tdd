import {data} from './input';
const mapIndex = new Map();
mapIndex.set([-1,0].toString(), ['7', 'F', '|']);
mapIndex.set([1,0].toString(), ['J', 'L', '|']);;
mapIndex.set([0,1].toString(), ['J', '-', '7']);;
mapIndex.set([0,-1].toString(), ['L', '-', 'F']);
export function getStepsFromStartingPoint (input:string): number {
 if (input.trim()) {
    let startIndex: any = null;
    const map = input.trim().split('\n').map((line: any, x: number) => {
        if(line.trim().search('S') > -1) {
            startIndex = {
                x,
                y: line.trim().search('S') 
            }
        }
        return line.trim().split('').map((value: string) => ({value}))
    });



 getConnectingNode(startIndex, map);
return map.reduce((max: number, current: any[]) => {
    const dist = current.reduce((_max, _current) => _current.distance && _max < _current.distance ?  _current.distance : _max, -1);
    return max > dist ? max: dist;
}, -1)

 }
 return 0;
}

function getConnectingNode ({x,y}: any, map: any, previousNode ={x: -1, y:-1}, count: number = -1) {
    let pos : any[]=[];
    switch(map[x][y].value) {
        case 'L':
            pos=  [[-1, 0], [0,1]];
            break;
        case 'F':
                pos=  [[1, 0], [0,1]];
            break;
            
        case 'J':
            pos=  [[0, -1], [-1,0]];
            break;
        case '7':
            pos=  [[0, -1], [1,0]];
        break;
        case '|':
            pos = [[-1, 0], [1, 0]];
            break;
        case '-':
            pos = [[0, -1], [0, 1]];
            break;
        case 'S':
            pos=  [[ -1, 0], [1, 0], [0, -1], [0,1]];
        break;
    }
    map[x][y].distance =  map[x][y].distance  && map[x][y].distance  < count + 1 ? map[x][y].distance : count +1;
    pos.forEach(([iX, iY]) => {
        if (!(previousNode.x === x + iX && previousNode.y === y + iY) 
            && map[x + iX] && map[x + iX][y + iY] 
            && ['.', 'S'].indexOf(map[x + iX][y + iY].value) === -1
            && mapIndex.get([iX, iY].toString())?.indexOf(map[x + iX][y + iY].value) > -1) {
            getConnectingNode({ x: x + iX, y: y + iY }, map, { x, y }, map[x][y].distance);
        }
    });
    
    
}


//console.log('Day 1 excerise 1 o/p :', getStepsFromStartingPoint(data));
