// Express 기본 모듈 불러오기
const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    // 요청이 들어 오면 응답 
    // res.send('This is root');

    const reString = `
    <!DOCTYPE html>
        <html lang="ko">
        <head>
            <meta charset="UTF-8">
            <title>Document</title>
        </head>
        <body>
            연습용 테스트 문서 
        </body>
    </html>
    `;
    res.send(reString);
})
// Express 서버 시작
app.listen(3000, function(){
  console.log('익스프레스 서버를 시작했습니다 : ' );
});


