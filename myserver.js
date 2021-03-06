const express = require('express');
const path = require('path');
const app = express()
app.set( 'PORT' , process.env.post || 3000);

app.use(express.urlencoded({ extended:true}));
app.use(express.json());

const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host:'127.0.0.1',
    user:'root', 
    database:'study',
    password:'12345',
    connectionLimit:5
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
