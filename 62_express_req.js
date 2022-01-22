const express = require('express');
const app = express();

// 다음의 1, 2번 use 순서에 따라 실행 결과는 달라짐 
// 1.
// 요청 파라미터 =>  http://lcocalhost:3000?name=kim 
app.use('/*',(req, res)=>{
    // 미들웨어 동작
    const userAgent = req.header('User-Agent');
    const paramName = req.query.name;
    console.log(paramName);
    // res.send(`<div>userAgent = ${userAgent}</div>`);
    // res.send(`<div>paramName = ${paramName}</div>`);
     res.send(`userAgent = ${userAgent}   paramName = ${paramName}`);
});

// 2.
// 요청 파라미터 =>  http://lcocalhost:3000?name=kim 
app.use((req, res)=>{
    // 미들웨어 동작
    const userAgent = req.header('User-Agent');
    const paramName = req.query.name;

    // res.writeHead('200', {'Content-Type' : 'text/html;charset=utf-8'});
    console.log(`userAgent = ${userAgent}`);
    console.log(`paramName = ${paramName}`);
});


app.listen(3000, function(){
    console.log('익스프레스 서버를 시작했습니다 : ' );
});


