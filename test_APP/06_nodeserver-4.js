const fs = require('fs');
const http = require('http');
const server = http.createServer();
const PORT = process.env.PORT || 3000;
let path = require('path');

server.listen(PORT,  function(){
    console.log(`start server ${PORT}`);
})

// 요청 이벤트 처리
server.on('request', function(req, res){
    // http는 send를 갖고 있지 않으므로 if 처리 
    
    // 비정상 동작으로 확인 필요 
    // TypeError: path.join is not a function
    switch(req.url){
        case '/':
            
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            path = path.join(__dirname, 'view', 'index.html');
            // view 폴더인지 views 폴더인지 확인하고 사용할 것 
            fs.readFile(path, 'utf-8', (err, data)=>{
                res.end(data);
            });
            break;
    }
    
})