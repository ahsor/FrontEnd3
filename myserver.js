const express = require('express');
const path = require('path');
const app = express();
const static = require('serve-static');


app.set('PORT', process.env.PORT || 3000);
//app.use('/public', path.join(__dirname, '/public')); // error
app.use(static(path.join(__dirname, 'public')));

// 분리한 라우트 연결
const home = require('./routes/home');  // 라우트
app.use( '/', home); // 모듈

/* 라우트로 분리하여 깔끔하게 정리 
app.get('/', (req, res)=>{
    console.log( 'router root ')
    res.sendFile(req.url);
})

app.get('/login', (req, res)=>{
    console.log( 'router login ')
    res.sendFile(req.url);
})
*/
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true}));
// url을 통해 들어온 공백, 한글등 문자가 포함될 경우 인식을 원할히 할수 있도록 함 

app.listen( app.get('PORT'), ()=>{
    console.log('server start' , app.get('PORT'));
})


