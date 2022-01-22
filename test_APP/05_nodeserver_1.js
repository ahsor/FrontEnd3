const http = require('http');
const server = http.createServer();
const PORT = process.env.PORT || 3000;

server.listen(PORT, function(){
    console.log('start server');
})

// 브라우저에서 localhost:3000 
// 탭의 로딩이 움직인단는 소리는 서버가 동작하고 있다는 뜻
// 만약 서버를 끄면 브라우저에 바로 호스트를 찾을 수 없다는 메시지가 뜸