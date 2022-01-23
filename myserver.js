const http = require('http');
const server = http.createServer();

const PORT = process.env.PORT || 3000;
server.listen(PORT, function() {
  console.log('server start', PORT);
});

 var opts = {
     host: 'www.google.com',
     port: 80,
     method: 'POST',
     path: '/',
     headers: {}
 };
 
 var resData = '';
 var req = http.request(opts, function(res) {
   // 응답 처리
   res.on('data', function(chunk) {
     resData += chunk;
   });
   
   res.on('end', function() {
     console.log(resData);
   });
 });
 
 opts.headers['Content-Type'] = 'application/x-www-form-urlencoded';
 req.data = "q=actor";
 opts.headers['Content-Length'] = req.data.length;
 
 req.on('error', err=> console.log('ERROR' + error.message));
 
 // 요청 전송
 req.write(req.data);
 req.end();
 


 