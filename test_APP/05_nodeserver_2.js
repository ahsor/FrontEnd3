const http = require('http');
const server = http.createServer();
const PORT = process.env.PORT || 3000;
//const host = 1.242.14.141; // 자신의 컴퓨터에서 확인할 것 
//const host =  '192.168.0.43'; // 자신의 컴퓨터에서 확인할 것 

server.listen(PORT, host, '5000', function(){
    // 5000은 지정된 host에서 동시 접속자수임
    console.log('start server');
})

/*
 host 번호 확인 
 // 무선인 경우 
 ipconfig /all
 무선 LAN 어댑터 Wi-Fi 항목 아래 있는 IPv4

 - 맥은 ipconfig

  // 유선인 경우
 네이버에서 : 내컴퓨터주소 검색
  // 기타 참고 
 https://mainia.tistory.com/1360
*/

