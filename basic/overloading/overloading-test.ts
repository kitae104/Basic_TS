import {parseCoordinate} from './parseCoodinate';

console.log('출력1 : ', parseCoordinate({x:10, y:20}));

console.log('출력2 : ', parseCoordinate(11, 22));

console.log('출력3 : ', parseCoordinate("x:111,y:222"));