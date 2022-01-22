// Express 기본 모듈 불러오기
const express = require('express');
const path = require('path');
const app = express();

// 등록 처리할 것 
// app.set('views', __dirname+'/view');
app.set('views', path.join(__dirname, 'view'));
// 굳이 path 모듈을 사용해서 사용하는 이유는? ㅠ.ㅠ

app.get('/', (req, res) => {
    console.log( req.url);
    res.sendFile( path.join(__dirname, 'view') + req.url);
})

app.get('/login', (req, res)=>{
   console.log( req.url + '.html');
   res.sendFile(path.join(__dirname, 'view') + req.url + '.html');
})

app.listen(3000, function(){
  console.log('익스프레스 서버를 시작했습니다 : ' );
});


