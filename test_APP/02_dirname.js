// 전역변수 __dirname

console.log(`현재 실행한 디렉토리명 : ${__dirname}`);
console.log(`현재 실행한 파일명 : ${__filename}`);

const path = require('path');
console.log(`path모듈을 이용한 디렉토리명 : ${path.dirname(__filename)}`);
console.log(`path모듈을 이용한 파일명 : ${path.basename(__filename)}`);
console.log(`path모듈을 이용한 확장자 : ${path.extname(__filename)}`);

