import User, { printname , printage } from "./user.js";
// 객체는 원래이름을 사용할 수도 변경할 수도 있으나 
const arr = Promise.all([User ,  printname , printage ]);

// import U, { printName , printAge } from "./user.js";
// 함수 사용할 수 있고 

//import { printName as printUserName, printAge } from "./user.js";
// 함수는 as로 변경된 이름으로만 사용할 수 있고 

// const User = require('./user');

const user = new User('kim', 11);
console.log(user);

printage(user);
printname(user);