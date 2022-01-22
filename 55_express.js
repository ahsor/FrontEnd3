// Express 기본 모듈 불러오기
const express = require('express');
const fs = require('fs');
const app = express();

app.get('/', (req, res)=>{
    // 요청이 들어 오면 응답 
    res.send('This is root');
})

// 라우트구분
app.get('/login', (req, res)=>{
    // login 요청이 들어오면 할일 
    res.send('로그인 화면입니다.');
});

app.listen(3000, function(){
  console.log('익스프레스 서버를 시작했습니다 : ' );
});


