const express = require('express');
const path = require('path');
const app = express()
app.set( 'PORT' , process.env.post || 3000);


// body-parser를 대신 express로 application/x-www-form-urlencoded 파싱
app.use(express.urlencoded({ extended: false }));
// body-parser를 대신 express 이용해 application/json 파싱
app.use(express.json());
app.use(express.static(path.join(__dirname)));
// http://localhost:3000/login.html
app.use(express.static(path.join(__dirname, 'views')));
// http://localhost:3000/views/login.html


// http://localhost:3000/login.html
app.get('/login', async  (req,res) => {
	res.sendFile( req.url);
  })

// app.post('/login',  async (req,res)=> {
// 	console.log( req.body);
// 	// // 처리 안됨
// 	var name = req.body.id;
// 	var email = req.body.email;
// 	res.send(`${name}님, email은 ${email} 입니다.`);
// })

app.get('/', async (req,res) => {
	res.sendFile( req.url);
  })

app.post('/', async  (req,res)=> {
	console.log( req.body);
})

app.listen(app.get('PORT'), function(){
  console.log('Express server listening on port ' + app.get('PORT'));
});
