const express = require('express');
const path = require('path');
const app = express();
app.set( 'PORT' , process.env.post || 3000);

const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host:'127.0.0.1',
    user:'root', 
    database:'study',
    password:'12345',
    connectionLimit:5
})

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

app.get('/', async(req, res)=>{
    let conn;
    try{
        conn = await pool.getConnection();
        const query = 'select * from user_info';
        const rows = await conn.query(query);
        res.json(rows);

        console.log(rows);
    }catch(err){
        throw err;
    }finally{
        if(conn){
            conn.end();
        }
    }
    //res.send('hello')
});
app.get('/*', (req,res)=>{
    // 로걸주소 확인하기
    res.sendFile(__dirname + req.url);
})


app.listen(app.get('PORT'), function(){
  console.log('Express server listening on port ' + app.get('PORT'));
});
