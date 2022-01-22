// Express 기본 모듈 불러오기
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + req.url);
    // controls 분리
    // res.sendFile(__dirname+'/view'+ req.url);
})

app.get('/login', (req, res)=>{
    res.sendFile(__dirname + req.url + '.html');
    // controls 분리 
    // res.sendFile(__dirname+'/view' + req.url + '.html');
})

app.listen(3000, function(){
  console.log('익스프레스 서버를 시작했습니다 : ' );
});


