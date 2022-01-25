const express = require('express');

const routerMobile = express.Router();
const routerDesktop = express.Router();

routerMobile.get('/index', async (req, res) =>{
  res.send('<h1>router Mobile</h1>');
  //res.sendFile('index.html');
})

routerDesktop.get('/index', async (req, res) =>{
  res.send('<h1>router Desktop</h1>');
  //res.sendFile('login.html');
})

exports.routerMobile = routerMobile;
exports.routerDesktop = routerDesktop;