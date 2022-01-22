// Express 기본 모듈 불러오기
const express = require('express');
 
// 익스프레스 객체 생성
const app = express();

// 기본 포트를 app 객체에 속성으로 설정
app.set('PORT', process.env.PORT || 3000);

// Express 서버 시작
app.listen(app.get('PORT'), function(){
  console.log('익스프레스 서버를 시작했습니다 : ' + app.get('PORT'));
});
