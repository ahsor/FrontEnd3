// urlExmaple.js
 
// var url = require('url');
// var parsedObject = url.parse('http://user:pass@host.com:8080/p/a/t/h?query=string#hash');
 
// console.log(parsedObject); // url 객체 정보 출력
// console.log(url.format(parsedObject)); // url 객체를 문자열로 출력

 var url = require('url');

// 주소 문자열을 URL 객체로 만들기
var curURL = url.parse('https://search.naver.com/search.naver?where=nexearch&sm=top_sug.mbk&fbm=1&acr=1&acq=%EC%9E%90%EB%B0%94%EC%8A%A4%E3%85%A1&qdt=0&ie=utf8&query=%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8');

// URL 객체를 주소 문자열로 만들기
var curStr = url.format(curURL);

console.log(`주소 문자열 : ${curStr}` );
console.dir(curURL);


// 요청 파라미터 구분하기
var querystring = require('querystring');
var param = querystring.parse(curURL.query);

console.log('요청 파라미터 중 query의 값 : %s', param.query);
// 검색어 찾아서 출력
console.log('원본 요청 파라미터 : %s', querystring.stringify(param));
// 원본 URL 출력