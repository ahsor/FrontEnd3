// Express 기본 모듈 불러오기
const express = require('express');
const fs = require('fs');
const app = express();

app.get('/', (req, res)=>{
    // 요청이 들어 오면 응답 
    res.send('This is root');
})

app.get('/login', (req, res)=>{
    // login 요청이 들어오면 할일 
    const reString = `
    <!DOCTYPE html>
        <html lang="ko">
        <head>
            <meta charset="UTF-8">
            <title>Document</title>
        </head>
        <body>
            아이디 :  <input type="text"> <br>
            비밀번호 :  <input type="password"> <br>
        </body>
    </html>
    `;
    res.send(reString);
})

app.listen(3000, function(){
  console.log('익스프레스 서버를 시작했습니다 : ' );
});


