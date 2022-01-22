// Express 기본 모듈 불러오기
const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    // 요청이 들어 오면 응답 
    res.send('This is root');
})
// Express 서버 시작
app.listen(3000, function(){
  console.log('익스프레스 서버를 시작했습니다 : ' );
});
