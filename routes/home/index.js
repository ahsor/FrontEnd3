const express = require('express');
const router = express.Router();
// router를 이용하여 app 대신 라우터 사용 

// const { append } = require('vary');

router.get('/', (req, res)=>{
    console.log( 'req /')
    res.sendFile(req.url);
})

router.get('/login', (req, res)=>{
    console.log( 'req login')
    res.sendFile(req.url);
})

router.post('/login', (req, res)=>{
    console.log( 'req.body');
    //res.send(req.body); //?
    res.send(`Hi ${req.body.id}, your email is ${'tt'}`)
})
module.exports = router; 