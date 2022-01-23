const express = require('express');
const path = require('path');
const static = require('serve-static');
// 특정폴더의 파일들을 특정 패스로 접근할 수 있도록 만들어 준다.
// public 폴더에 있느 모든 파일을 웹서버의 루트 패스로 접근할 수 있도록 만들고 싶을때 사용

const app = express();
app.use(static(path.join(__dirname, 'public')));
app.set('PORT', process.env.PORT || 3000);

// body-parser를 대신 express로 application/x-www-form-urlencoded 파싱
app.use(express.urlencoded({ extended: false }))
// body-parser를 대신 express 이용해 application/json 파싱
app.use(express.json())


// 미들웨어에서 파라미터 확인
app.use('/*',(req, res)=>{
	console.log('첫번째 미들웨어에서 요청을 처리함.');

	const paramId = req.body.id || req.query.id;
	const paramPassword = req.body.password || req.query.password;
	
	res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
	res.write('<h1>Express 서버에서 응답한 결과입니다.</h1>');
	res.write('<div><p>Param id : ' + paramId + '</p></div>');
	res.write('<div><p>Param password : ' + paramPassword + '</p></div>');
	res.end();
});

app.use('/',(req, res)=>{
	console.log('첫번째 미들웨어에서 요청을 처리함.');

	const paramId = req.body.id || req.query.id;
	const paramPassword = req.body.password || req.query.password;
	
	res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
	res.write('<h1>Express 서버에서 응답한 결과입니다.</h1>');
	res.write('<div><p>Param id : ' + paramId + '</p></div>');
	res.write('<div><p>Param password : ' + paramPassword + '</p></div>');
	res.end();
});

// Express 서버 시작
app.listen(app.get('PORT'), function(){
  console.log('Express server listening on port ' + app.get('PORT'));
});