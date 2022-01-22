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

server.on('connection', function(socket){  // 확인
    // 기본적인 서버는 socket
    const addr = socket.address();
    console.log('클라이언트 접속', addr);
})

server.on('close', function(){
    // 호출되지 않은 상태로 emmiter를 이용하여 종료 해야함
    console.log('서버종료');
})

/*
// 요청 이벤트 처리
res 객체의 응답 메소드 
writeHead | 헤더에 응답 보낼때
write | 응답 본문, 여러번 호출 할 수도 있음 
end | 응답이 전송된 후 호출
*/
server.on('request', function(req, res){
    console.log('request end')
})