const http = require('http');
const server = http.createServer();
const port = 3000;

server.listen(port,  function(){
    console.log('start server');
})

/*
# 서버의 클라이언트 요청 이벤트 처리
connection : 클라이언트가 접속하여 연결이 만들어질 때 발생
request : 클라이언트가 요청할 때 발생
close : 서버를 종료할 때 발생 
*/

server.on('connect', function(socket){
    const addr = socket.address();
    console.log('클라이언트 접속', addr);
})

server.on('close', function(){
    // 호출되지 않은 상태로 emmiter를 이용하여 종료 해야함
    console.log('서버종료');
})

/*
// 요청 이벤트를 res의 문자열이 아닌 html 파일로 응답  
*/
const fs = require('fs');
server.on('request', function(req, res){
    console.log('클라이언트 요청');
    //const filename = 'http://placekitten.com/200/200';
    const filename = 'bg1.jpg';
    fs.readFile(filename, function(error, data){
        res.writeHead(200, {"Content-Type":"image/jpg"});
        res.write(data);
        res.end();
    })
})