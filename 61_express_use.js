// Express 기본 모듈 불러오기
const express = require('express');
const app = express();

app.use((req, res)=>{
    // 요청이 들어오면 자동으로 미들웨어가 동작함 
    console.log('express middleware');
    // 미들웨어가 동작할 때 자동으로 이동
    // res.redirect('http://www.naver.com');
    // status()와 sendStatus()메소드를 사용하여 상태코드를 전송할 수도 있다.
    // res.status(403).send('Forbidden');
    // 코드만 파라미터로 전달할 수도 있고 
    res.sendStatus(403);

})
app.listen(3000, function(){
    console.log('익스프레스 서버를 시작했습니다 : ' );
});


