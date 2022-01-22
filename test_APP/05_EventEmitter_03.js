let Calc = require('./05_calc');
// import {Calc} from "./calc.js"; // 서버 동작 시켜 보기

let calc = new Calc();
calc.emit('stop');

console.log( Calc.title + '이벤트 전달');