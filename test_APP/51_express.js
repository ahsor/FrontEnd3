// Express 기본 모듈 불러오기
const express = require('express');
 
// 익스프레스 객체 생성
const app = express();
const PORT = process.env.PORT || 3000;

// Express 서버 시작
app.listen( PORT, ()=>{
    console.log('express server start');
})