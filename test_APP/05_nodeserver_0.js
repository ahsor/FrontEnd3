const http = require('http');
//const EventEmitter = require('EventEmitter');
const server = http.createServer();
const PORT = process.env.PORT || 3000;

server.listen(PORT,  function(){
    console.log('start server');
})

/*
# 서버의 클라이언트 요청 이벤트 처리
on 메소드로 다음의 이벤트를 각각 콜백으로 등록해 두면 상황에 따라 자동 호출 됨
connection : 클라이언트가 접속하여 연결이 만들어질 때 발생
request : 클라이언트가 요청할 때 발생
close : 서버를 종료할 때 발생 
*/


server.on('connect', function(socket){
    const addr = socket.address();
    console.log('클라이언트 접속', addr);
})

//const server = http.createServer((req, res) => {
server.on('request', function(req, res){
    console.log('클라이언트 요청');
    // 브라우저에는 반응이 없지만 서버 콘솔창에 표시됨
    // 요청은 한번만 하는 것이 아니므로 여러번 출력 될 수 있음 
    
    //console.dir(req);
    //객체를 확인 할 수 있음
})


server.on('close', function(){
    // 호출되지 않은 상태로 emmitter를 이용하여 종료 해야함
    console.log('서버종료');
})

// 요청 이벤트 처리
server.on('request', function(req, res){
   // http는 send를 갖고 있지 않으므로 if 처리 

    if( req.url === '/'){
        res.end('path is root');
    }else if(req.url ==='/login'){
        res.end('path is login')
    }

})