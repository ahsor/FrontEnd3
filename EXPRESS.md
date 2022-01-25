# winston 모듈로 로그 남기기

# nodemon 설치 
서버를 껏다켰다 하기 귀찮은 관계로 자동으로 갱신 시켜주는 util 사용
```
// 노드몬 설치
npm install -g nodemon

// 노드몬 버전
nodemon -v

// 노드몬으로 서버실행 
nodemon server.js
nodemon app.js

```

# node로 서버 실행 설정 
package.json 에 다음 코드 설정 

```
"scripts": {
	//"start": "node ./bin/www"
	"start": "nodemon ./bin/www"
}
```
실행은 다음과 같이
```
$ npm start
또는
$ nodemon ./bin/www
```

# powershell 셋팅 바꾸기
## 윈도우에서 바꾸기 
설정 > settings > terminal.integrated.shell.windows 검색 > 드롭다운 메뉴에서 bash 선택

## JSON 설정 바꾸기
ctrl + shift + p 
Preferences: Open Settings (JSON) 에서 다음 항목 추가

``
"terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe",
``

# 익스프레스로 웹서버 만들기 
http모듈만 사용해서 웹서버를 구성할 때는 많은 것들을 직접 만들어야 한다. 
때문에 직접 만들어야 하는 코드가 많아지면 시간과 노력도 많이 든다는 뜻.
익스프레스는 개발자가 다양한 기능을 사용할 수 있도록 미리 만들어 둔 여러가지 미들웨어를 제공 하여 개발자가 쉽게 끼워 넣을 수 있어 편리하게 사용할 수 있다. 

즉, jQuery 라이브러리 처럼 express 를 사용 것이며 
express에서 제공하는 **미들웨어**와 **라우터**를 사용하면 훨씬 편리하게 서버를 구현할 수 있음 

# 미들웨어란 ?
독립된 기능을 가진 함수, 즉 jQuery 라이브러리와 같은 함수
익스프레스는 웹 응답과 요청에 필요한 처리를 진행할 수 있는 함수로 분리한다. 
이렇게 분리된 함수를 미들웨어라고 한다.

클라이언트의 요청에 따라 어떤 일을 하는 함수를 만들었다면  이것을 use()에 등록해두면 
미들웨어가 알아서 처리한다. 

<a href="https://www.redhat.com/ko/topics/middleware/what-is-middleware"> 레드햇 </a>
미들웨어는 공통 서비스 및 기능을 애플리케이션에 제공하는 소프트웨어로
데이터 관리, 애플리케이션 서비스, 메시징, 인증 및 API 관리는 주로 미들웨어를 통해 처리할 수 있다.
미들웨어는 개발자들이 애플리케이션을 보다 효율적으로 구축할 수 있도록 지원하며 애플리케이션, 데이터 및 사용자 사이를 연결하는 요소처럼 작동합니다.
미들웨어를 사용하여 필요한 기능을 순차적으로 실행할 수 있음


# 라우터 
클라이언트의 요청 패스를 보고 이 요청 정보를 처리할 수 있는 곳으로 기능을 전달해 주는 역활로 이러한 역활을 라우팅이라고 한다. 
즉 클라이언트의 요청 패스에 따라 각각 담당하는 함수로 분리시키는 것

# express 설치 
```
npm install express --save
```

# express를 이용한 간단한 샘플

```
// Express 기본 모듈 불러오기
const express = require('express');
 
// 익스프레스 객체 생성
const app = express();
const PORT = process.env.PORT || 3000;

// Express 서버 시작
app.listen( PORT, ()=>{
    console.log('express server start');
})
```

# mjs 실행 

```
import express from 'express';
const app = express();
let port = process.env.port || 3000;

app.get('/', (req, res) => {
    res.send('Hello mjs!');
});

const server = app.listen(port, () => {
    console.log(`server on ${port}`);
});
```
```
// 보통과 같이 출력하면 에러 다음과 같이 추가 할 것 
// package.json 에 다음과 같이 추가 
{
 	...(생략)
	type: "module"
 	...(생략)
}
```

# 익스프레스 서버 객체의 메소드 
|메소드 |설명|
|---|---|
|set(name, value)|서버 환경 설정을 위한 속성을 지정|
|get(name)|set 설정된 속성을 가져옴|
|use([path], function)|미들웨어 함수 사용|
|get([path], function)|특정 패스로 요청된 정보를 처리|
|all|모든 요청 처리를 함|


## set()
웹서버의 환경을 설정하는데 필요한 메소드
app.set('title', 'My App') 와 같은 방법으로 title 속성에 'My App'지정 
이때 속성명이  이미지정된 속성이라면 웹서버 환경에 영향을 미침으로 주의 해야 한다. 

|예약속성 |설명|
|---|---|
|env|서버 모드를 설정|
|views|뷰들이 들어 있는 폴더 또는 폴더 배열|
|view engine|디폴트로 사용할 뷰 엔진을 설정|

### express set메소드를 이용한 PORT 번호 지정
```
// Express 기본 모듈 불러오기
const express = require('express');
 
// 익스프레스 객체 생성
const app = express();

// 기본 포트를 app 객체에 속성으로 설정
app.set('PORT', process.env.PORT || 3000);

// Express 서버 시작
app.listen(app.get('PORT'), function(){
    // set한 PORT 가져와 사용하기 
  console.log('익스프레스 서버를 시작했습니다 : ' + app.get('PORT'));
});

```

# 데이터 전송 방식 
1. GET 
2. POST
3. 요청 파라미터 

## 1. get() : 익스프레스 요청과 응답
|메소드 이름 |설명|
|---|---|
|send([body]) | 클라이언트에 응답을 보낸다. 데이터는 html, buffer, JSON배열, JSON객체|
|status(code) | http 상태 코드를 반환 |
|sendStatus(code) | http 상태 코드를 반환, 상태메시지와 함께 전송 |
|redirect | 웹페이지 경로를 강제로 이동 |
|render( view, [local], [callback]) | 뷰엔진을 사용하여 문서를 만든 후 전송 |


## 상태코드 : status 리턴 종류
|코드 |설명|
|---|---|
|200 | ok, 처리성공 |
|401 | Unauthorized, 인증필요|
|403 | Forbidden, 액세스 거부|
|404 | Not Found, 리퀘스트된 자원이 존재하지 않음|
|500 | Internal Server Error, 내부서버에러|
|503 | Sevice Unavailable, 요구한 서버 이용불가|

### root 설정으로 서버 응답
```
// Express 기본 모듈 불러오기
const express = require('express');
const app = express();

app.set( 'PORT', process.env.PORT || 3000);
// 포트 지정을 함 

// Express 서버 시작
app.listen( app.get('PORT'), ()=>{
    console.log('express server start');
});

app.get('/', (req, res)=>{
    // 요청이 들어 오면 응답 
    res.send('localhost root');
    // 응답 데이터를 좀 더 간단하게 전송하기 위해 익스프레스에 추가된 기능 
})
```

### 객체 응답
path는 지정만 하면 express 가 알아서 함
root 경로와 login 경로를 브라우저 주소창에서 확인 할것 
```
const express = require('express');
const app = express();

app.set( 'PORT', process.env.PORT ||  3000 );

app.listen( app.get('PORT'), ()=>{
    console.log('server start');
})
const PersonAry = [{name:'kim', age:20},{name:'hong', age:20},{name:'park', age:20} ];

// http://localhost:3000/ob 요청
const PersonOB = {name:'kim', age:20};
app.get('/ob', (req, res)=>{
    // 요청이 들어 오면 응답 
    res.send(PersonOB);
})
// http://localhost:3000/login/ary 요청
app.get('/ary', (req, res)=>{
    // 요청이 들어 오면 응답 
    res.send(PersonAry);
})

//http://localhost:3000/ 요청
app.get('/', async (req, res)=>{
    res.send('root');
    // 문자열 전송
})

//http://localhost:3000/login 요청
app.get('/login', async (req, res)=>{
    res.send('login');
})
```
# 링크와 이름으로 요청 
```
const express = require('express');
const app = express();
app.set('PORT', process.env.PORT || 3000);

// localhost:3000/login 접속
app.get('/login', async (req, res)=> {
  res.send('<a href="/goods"> goods 로 가기</a>');
  // 헤더 처리 없이도 한글도 안깨지고
})

// localhost:3000/goods 접속
app.get('/goods', async (req, res)=> {
  res.send('<a href="/login">login 하세요</a>');
})

// 이름으로 접속 할 수도 있음
// localhost:3000/login/이름 접속
app.get('/login/:name', async (req, res)=> {
  res.send('<H1>' + req.params.name + ', Hello !</H1>')
})

//라우팅에 첫번째 매개변수에 전체 선택자 ( * ) 을 사용할 수 있다.
//라우팅은 순서대로 요청을 확인함으로 가장 마지막에 위치해두면 없는 페이지에 접속했을 경우를 대비할 수 있다.
app.get('/*', function (req, res) {
  res.status(404).send('<H1> 404 ERROR </H1>');
  //res.status(403).send('Forbidden');
})


app.listen(app.get('PORT'), async() => {
  console.log(`Server is Running at ${app.get('PORT')}`);
})
```


### html 문서 응답
```
const express = require('express');
const app = express();
app.set( 'PORT', process.env.PORT ||  3000 );

app.get('/', (req, res)=>{
    // 요청이 들어 오면 응답 
    // res.send('This is root');

    const reString = `
    <!DOCTYPE html>
        <html lang="ko">
        <head>
            <meta charset="UTF-8">
            <title>Document</title>
        </head>
        <body>
            <h1>루트</h1>
        </body>
    </html>
    `;
    res.send(reString);
});

app.get('/login', (req, res)=>{
    // login 요청이 들어오면 할일 
        const reString = `
        <!DOCTYPE html>
            <html lang="ko">
            <head>
                <meta charset="UTF-8">
                <title>Document</title>
            </head>
            <body>
                아이디 :  <input type="text"> <br>
                비밀번호 :  <input type="password"> <br>
            </body>
        </html>
        `;
        res.send(reString);
    })

app.listen( app.get('PORT'), ()=>{
  console.log('express server start');
});
```

### 파일로 응답 : 현재 폴더
```
// 현재 폴더 아래에 index.html, login.html 제작
const express = require('express');
const app = express();

app.set( 'PORT', process.env.PORT ||  3000 );

app.listen( app.get('PORT'), ()=>{
    console.log('server start');
})

// http://localhost:3000/  요청
app.get('/', async (req, res)=>{
    res.sendFile(__dirname + req.url);
    // 서버와 같은 폴더에 index.html 생성 
    // **index.html은 자동 인식 **
})

// http://localhost:3000/login 요청
app.get('/login', async (req, res)=>{
    console.log(req.url); // 요청 쿼리  /login 출력 
    res.sendFile(__dirname + req.url + '.html');
    // 그외의 다른 파일들은 정확한 path 만들기
})

```

### file로 응답 : view 단으로 분리 
MVC 모델
현재 폴더 아래에 view 폴더 만든 후 index.html, login.html 제작
```
// 현재 폴더 아래에 view 폴더 만든 후 index.html, login.html 제작
const express = require('express');
const app = express();
const path = require('path');
app.set( 'PORT', process.env.PORT ||  3000 );

app.listen( app.get('PORT'), ()=>{
    console.log('server start');
})

app.get('/', async (req, res)=>{
    res.sendFile(__dirname + '/views' + req.url);
    // 너무 지저분함 
    
   // res.sendFile(path.join(__dirname , '/views')+ req.url);
    // path를 사용한다 해서 경로가 편하지는 않음
	// path를 사용할 때 /와 /login 경로 설정이 다름
    // req.url 하면 경로는 인식하지만 index.html 을 자동으로 인식하지는 않음 
    // 때문에 자동 인식하도록 해주어야 함 
})

app.get('/login', async (req, res)=>{
    res.sendFile(__dirname + '/views' + req.url + '.html');
    console.log(__dirname + '/views' + req.url + '.html');
    // / \ // \\ 를 구분하지 못하는 문제 발생
    //res.sendFile(path.join(__dirname , '/views', req.url) + '.html');
    console.log(path.join(__dirname , '/views', req.url) + '.html');
    //경로가 있다면 req.url이 파일명이든 경로명이든 상관 없이 사용할 수 있음 
})
```

### path 모듈 사용법 : 다음 use로 넘거갈 것 
```
0. 모듈 추출 방법
const path = require('path');
 
1.  path.sep 
  "현 운영체제의 경로 구분자" 확인 - 맥 /, 윈도우 \
console.log('path.sep:', path.sep);
// path.sep: /

2.  path.dirname('파일경로.확장자') 
  "파일이 위치한 폴더경로" 확인
console.log(path.dirname(__filename));
// /Users/jemicom/dev/VS_Code_Projects/TestProject
 
3-1.  path.basename('파일경로.확장자') 
  "파일명.확장자" 확인
console.log(path.basename(__filename));
// test.js
 
3-2.  path.basename('파일경로.확장자', '.확장자') 
 "파일 이름(확장자 제거)" 확인
console.log(path.basename(__filename, '.js'));
// test
 
4.  path.extname('파일경로.확장자') 
  "확장자" 확인
console.log(path.extname(__filename));
// .js
 
5.  path.parse(__filename) 
  파일을 root(루트경로), dir(디렉터리경로), base(파일명.확장자), ext(.확장자), name(파일명) 으로 파싱한 객체 생성
console.log(path.parse(__filename));
/*
{
  root: '/',
  dir: '/Users/curryyou/dev/VS_Code_Projects/TestProject',
  base: 'test.js',
  ext: '.js',
  name: 'test'
}
*/

6.  path.format(객체) 
 파싱된 파일 경로 객체를 다시 '문자열'로 합침
console.log(path.format(path.parse(__filename)));

// path.parse(__filename)로 파싱한 객체를 parth.format()으로 문자열로 변환
// /Users/curryyou/dev/VS_Code_Projects/TestProject/test.js
 
7.  path.normalize('경로') 
 //나 \ 등으로 경로 구분자를 잘못 사용해도, 알아서 정상 경로로 변환해줌
console.log(path.normalize('/user///hello/////ok/index.js'));

// /user/hello/ok/index.js
 
8.  path.join('경로', '경로', ...) 
** join 메서드는 자주 사용**

 여러개의 경로를 알아서 합쳐줌 
 상위경로(..), 현재경로(.)도 알아서 처리
 중간에 /를 만나면 앞의 경로에 이어서 '상대경로'로 처리

console.log(path.join(__dirname, '/a/b', '..', './b', 'c', '/d')); 
// /Users/hello/VS_Code_Projects/TestProject/a/b/c/d

9.  path.resolve('경로', '경로', ...) 
 여러개의 경로를 알아서 합쳐줌 
 상위경로(..), 현재경로(.)도 알아서 처리
 join()과 차이점: 중간에 /를 만나면 앞에 경로 다 무시하고, '맨 처음부터' 다시 시작

console.log(path.resolve(__dirname, '/a/b', '..', './b', 'c', '/d')); 
// /d
 
```

## 1. get() : 익스프레스 요청과 응답
|메소드 이름 |설명|
|---|---|
|send([body]) | 클라이언트에 응답을 보낸다. 데이터는 html, buffer, JSON배열, JSON객체|
|status(code) | http 상태 코드를 반환 |
|sendStatus(code) | http 상태 코드를 반환, 상태메시지와 함께 전송 |
|redirect | 웹페이지 경로를 강제로 이동 |
|render( view, [local], [callback]) | 뷰엔진을 사용하여 문서를 만든 후 전송 |


## 상태코드 : status 리턴 종류
|코드 |설명|
|---|---|
|200 | ok, 처리성공 |
|401 | Unauthorized, 인증필요|
|403 | Forbidden, 액세스 거부|
|404 | Not Found, 리퀘스트된 자원이 존재하지 않음|
|500 | Internal Server Error, 내부서버에러|
|503 | Sevice Unavailable, 요구한 서버 이용불가|

## express use() 
- path을 불편함도 해결할 수 있고
- get, post, put, delete 등 다양한 처리가 가능 하고 
- express는 static 등 다양한 미들웨어를 포함하고 있고 
- 라우팅 기능도 내장 하고 있고
.get() 특정패스로 요청된 query를 실행하지만 use() 미들웨어를 사용하는 것임 
노드에서는 웹 요청과 응답에 관한 정보를 사용해 필요한 처리를 진행할 수 있도록 함수를 분리하며 use()에 등록해 두면 클라이언트 요청에 따라 알아서 use()가 처리함

http://expressjs.com/ko/guide/using-middleware.html

/를 "마운트"경로로 지정하면 app.use()는 /로 시작하는 모든 요청에 응답한다.
GET /
PUT /foo
POST /foo/bar
기타

반면 app.get()는 Express 'application routing'의 일부이며 
GET HTTP 동사로 요청 될 때 특정 경로를 일치시키고 처리하기위한 것.
GET /


|메서드|	설명|
|---|---|
|get(path, callback, callback...)|	GET 요청이 발생했을 때의 이벤트 리스너|
|post(path, callback, callback...)	|POST 요청이 발생했을 때의 이벤트 리스너|
|put(path, callback, callback...)	|put 요청이 발생했을 때의 이벤트 리스너|
|delete(path, callback, callback...)	|delete 요청이 발생했을 때의 이벤트 리스너|
|all(path, callback, callback...)	|all 요청이 발생했을 때의 이벤트 리스너|

# use()가 자동으로 get() 으로 동작하고 
express 에서 사용하는 요청객체와 응답객체는 http 모듈에서 사용하는 객체와 같다. 
```
const express = require('express');
const app = express();

app.set( 'PORT', process.env.PORT ||  3000 );

app.listen( app.get('PORT'), ()=>{
    console.log('server start');
})
const PersonAry = [{name:'kim', age:20},{name:'hong', age:20},{name:'park', age:20} ];

// http://localhost:3000/ob 요청
const PersonOB = {name:'kim', age:20};
app.use('/ob', (req, res)=>{
    // 요청이 들어 오면 응답 
    res.send(PersonOB);
})
// http://localhost:3000/login/ary 요청
app.use('/ary', (req, res)=>{
    // 요청이 들어 오면 응답 
    res.send(PersonAry);
})

//http://localhost:3000/ 요청
app.use('/', async (req, res)=>{
    res.send('root');
    // 문자열 전송
})

//http://localhost:3000/login 요청
app.use('/login', async (req, res)=>{
    res.send('login');
})
```



# redirect, error처리
```
const express = require('express');
const path = require('path');
const app = express();

app.set( 'PORT', process.env.PORT ||  3000 );
//app.use( '/views', path.join(__dirname, 'views'));

app.listen( app.get('PORT'), ()=>{
    console.log('server start');
})
// 요청 경로 '/' , 'views' 등을 생략할 수도 있고 
app.use((req, res)=>{
  // 요청이 들어오면 자동으로 미들웨어가 동작함 
  console.log('express middleware');

  // 미들웨어가 동작할 때 자동으로 이동
  // res.redirect('http://www.naver.com');

  // status()와 sendStatus()메소드를 사용하여 상태코드를 전송할 수도 있다.
  // res.status(403).send('Forbidden');

  // 코드만 파라미터로 전달할 수도 있고 
  res.sendStatus(403);
});
```

# static 미들웨어를 이용한 경로 설정
특정 폴더의 파일들을 특정 패스로 접근할 수 있도록 만들어 준다. 
그러나 express는 static도 가지고 있다. 
```
// 예를 들어 public폴더에 있는 모든 파일을 웹서버의 루트 패스로 접근 할 수 있도록 만들고 싶다면 다음 2줄을 추가하면 된다.
const static = require('serve-static');
app.use(static(path.join(__dirname, 'public')));
또는
app.use('/public' ,static(path.join(__dirname, 'public')));

//예를 들어 /public/images 폴더에 들어 있는 이미지를 웹브라우저에서 본다면
res.send('<img src="images/house.png" width="50%">');

또는 브라우저 단에서 다음과 같이 확인할 수 있다. 
http://localhost:3000/images/bg1.jpg
```

```
npm install serve-static --save
```
|변환전|변환후|
|---|---|
|express/public/index.html   |http://localhost:3000/index.html|
|express/public/images/bg.png|http://localhost:3000/images/bg.png|
|express/public/js/index.js  |http://localhost:3000/js/index.js|
|express/public/css/style.css|http://localhost:3000/css/style.css|


``` 
// 아래와 같이 불편했던 path를 다음 예제 use에서 개선할 수 있고
const express = require('express');
const path = require('path');
const app = express();
app.set('PORT', process.env.PORT || 3000);

/*
브라우저 url 요청 
http://localhost:3000/login
http://localhost:3000/
*/
app.get('/', (req, res) => {
    res.sendFile( path.join(__dirname, 'views') + req.url);
    /// 불편했던 
})

app.get('/login', (req, res)=>{
      res.sendFile(path.join(__dirname, 'views') + req.url + '.html');
   // 불편했던 
})

app.listen( app.get('PORT'), ()=>{
    console.log('server start');
})
```

## serve-static path 개선
```
const express = require('express');
const path = require('path');
const app = express();
app.set('PORT', process.env.PORT || 3000);

// path.join 효과적으로  
const static = require('serve-static');
app.use(static(path.join(__dirname, 'public')));
app.use('/views', static(path.join(__dirname, 'views')));
/*
http://localhost:3000/views/
http://localhost:3000/views/login.html
확장자 반드시 입력해야 함 
*/

app.listen( app.get('PORT'), ()=>{
    console.log('server start' , app.get('PORT'));
})

app.get('/', (req, res)=>{
    res.sendFile(req.url);
})

app.get('/login', (req, res)=>{
    res.sendFile(req.url);
})
```

## express는 serve-static 도 내장하고 있다. 
http모듈을 사용했을 때는 if문을 사용해 라우팅을 구현했지만, express의 router미들웨어를 이용하면 더욱 쉽게 페이지 라우팅을 구현할 수 있다.
// 저번 주 error 였던 부분 복습해서 보여 줄것 ?

```
const static = require('serve-static');
//모듈을 읽어 오지 않아도 다음과 같이 처리할 수 있다. 
app.use(express.static(path.join(__dirname, 'views')));
app.use('/views', express.static(path.join(__dirname, 'views')));

```
```
const express = require('express');
const path = require('path');
const app = express();
app.set('PORT', process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, '/views')));
app.use('/views', express.static(path.join(__dirname, 'views')));

app.listen( app.get('PORT'), ()=>{
    console.log('server start' , app.get('PORT'));
})
```

``` public 단으로 분리
const express = require('express');
const path = require('path');
const app = express();
app.set('PORT', process.env.PORT || 3000);

// path.join 효과적으로  
app.use(express.static(path.join(__dirname, 'public')));
// 페이지 라우팅은 클라이언트의 요청에 따라 적절한 페이지로 응답하는 기술
/*
// 기본 경로 접근
// http://localhost:3000/login.html 확장자 반드시 입력해야 함 
*/

app.use('/public', express.static(path.join(__dirname, 'public')));
//페이지 라우팅은 클라이언트의 요청에 따라 적절한 페이지로 응답하는 기술
/*
http://localhost:3000/public/
http://localhost:3000/public/login.html
확장자 반드시 입력해야 함 
*/
app.use('/views', express.static(path.join(__dirname, 'views')));
// 경로설정 http://localhost:3000/views/login.html
// 즉 내가 원하는 경로로 이동하기 편리함 

app.listen( app.get('PORT'), ()=>{
    console.log('server start' , app.get('PORT'));
})
```

## express use는 세번째 매개변수로 next를 사용할 수 있다.
유저 요청에 응답하기 전, 단계를 나눠 일을 처리할 수 있다. 

```
const express = require('express');
const app = express();
app.set( 'PORT' , process.env.PORT || 3000);

//세번째 매개변수로 next를 사용할 수 있다.
//유저 요청에 응답하기 전, 단계를 나눠 일을 처리할 수 있다. 
app.use( function (req, res, next) {
  req.numb = 2;
  res.numb = 3;
  console.log('첫번째 미들웨어 입니다.');
  next();
})

app.use( function (req, res, next) {
  console.log('두번째 미들웨어 입니다.');
  console.log(req.numb + ' + ' + res.numb + ' = ' + (req.numb + res.numb) );
  // 재사용성도 제공하기 때문에 더욱 구조적이고 재사용성 높음
  next();
})

app.use( function (req, res) {
  console.log('세번째 미들웨어 입니다.');
  res.sendStatus(200);
  res.end();
})

app.listen(app.get('PORT'), function() {
  console.log(`Server is Running at ${app.get('PORT')}`);
})
```

```
# express 미들웨어
express는 개발자가 다양한 기능을 사용할 수 있도록 미리 만들어 둔 여러가지 미들웨어를 제공
페이지 라우팅은 클라이언트의 요청에 따라 적절한 페이지로 응답하는 기술
|모듈|설명|
|---|---|
|static| 특정폴더의 파일들을 특정 패스로 접근할 수 있도록 만들어 준다.|
|body-parser||
|router||
|cookie-parser||
|express-session||

# static
특정폴더의 파일들을 특정 패스로 접근할 수 있도록 만들어 준다.
public 폴더에 있느 모든 파일을 웹서버의 루트 패스로 접근할 수 있도록 만들고 싶을때 사용

# 데이터 전송 방식 
1. GET 
2. POST
3. 요청 파라미터 

# express에서 요청객체의 헤더와 파라미터 확인
|요청객체 헤더 |설명|
|---|---|
|query| 클라이언트에서 GET 방식으로 전송한 요청 파라미터 확인|
|body| 클라이언트에서 POST 방식으로 전송한 요청 파라미터, body-parser와 같은 외장모듈 필요 |
|header(name)| 클라이언트 HEADER 확인 |


## query 객체 확인, 파라미터 확인
```
const express = require('express');
const app = express();
app.set( 'PORT' , process.env.post || 3000);

// 2. 이요청을 아래로 내리면 동작하지 않음 
// 요청 파라미터 =>  http://lcocalhost:3000?name=kim 
app.use((req, res)=>{
    // 미들웨어 동작
    const userAgent = req.header('User-Agent');
    const paramName = req.query.name;

    // res.writeHead('200', {'Content-Type' : 'text/html;charset=utf-8'});
    console.log(`userAgent = ${userAgent}`);
    console.log(`paramName = ${paramName}`);
	//// 요청이 들어올때마다 자동으로 호출됨
	// 콘솔창에도 내용을 뿌림
});
// 다음의 1, 2번 use 순서에 따라 실행 결과는 달라짐 
// 1.
// 요청 파라미터 =>  http://lcocalhost:3000?name=kim 
app.use('/*',(req, res)=>{
    // 미들웨어 동작
    const userAgent = req.header('User-Agent');
    const paramName = req.query.name;
   
    // res.send(`<div>userAgent = ${userAgent}</div>`);
    // res.send(`<div>paramName = ${paramName}</div>`);
     res.send(`userAgent = ${userAgent}   paramName = ${paramName}`);
});

app.listen(app.get('PORT'), function(){
  console.log('Express server listening on port ' + app.get('PORT'));
});

```

# post 방식 : route 분리전 
```
const express = require('express')
const app = express()
app.set( 'PORT' , process.env.post || 3000);

app.use(express.json())
app.use(express.urlencoded({extended:false}));

app.get('/', (req,res) => {
  res.send(`
    <form action="/" method="post">
        userid : <input type="text" name="id" id="id"/> <br />
        email : <input type="text" name="email" id="email"/> <br />
        password : <input type="text" name="password" id="password"/> <br />
        <input type="submit">
    </form>
  `)
})

app.post('/', (req,res)=> {
  var name = req.body.id;
  var email = req.body.email;

  res.send(`Hi ${name}, your email is ${email}`)
})

app.listen(app.get('PORT'), function(){
  console.log('Express server listening on port ' + app.get('PORT'));
});
```

# post 라우트 분리 후 : body-parser 모듈 사용

```
const express = require('express');
const app = express();
const path = require('path');
app.set( 'PORT' , process.env.post || 3000);
const bodyPaser = require('body-parser');


app.use(bodyPaser.json())
// body-parser를 대신 express 이용해 application/json 파싱
app.use(bodyPaser.urlencoded({ extended: false }))
// body-parser를 대신 express로 application/x-www-form-urlencoded 파싱
app.use(express.static(path.join(__dirname)));

app.get('/', (req,res) => {
  res.sendFile(req.url)
})
app.post('/', (req,res)=> {
	var name = req.body.id;
	res.send(`${name}님, 반갑습니다.`);
  });
app.listen(app.get('PORT'), function(){
  console.log('Express server listening on port ' + app.get('PORT'));
});

```

# route 분리 : body-parser 모듈 대신 express 사용
```
const express = require('express');
const path = require('path');
const app = express()
app.set( 'PORT' , process.env.post || 3000);


// body-parser를 대신 express로 application/x-www-form-urlencoded 파싱
app.use(express.urlencoded({ extended: false }));
// body-parser를 대신 express 이용해 application/json 파싱
app.use(express.json());
app.use(express.static(path.join(__dirname)));
// path 개선

app.get('/', (req,res) => {
  res.sendFile( req.url);
})
app.post('/', (req,res)=> {
	var name = req.body.id;
	res.send(`${name}님, 반갑습니다.`);
})

app.listen(app.get('PORT'), function(){
  console.log('Express server listening on port ' + app.get('PORT'));
});
```


```
const express = require('express')
const app = express()
const path = require('path');
const static = require('serve-static');

// http://localhost:3000/userCheck_post.html
app.use(static(path.join(__dirname, '/views')))
app.use(express.json())
app.use(express.urlencoded({extended:false}));

app.get('/', (req,res) => {
  // 분리된 userCheck_post.html 을 views 폴더 안에 만들기
  res.sendFile( req.url);
})

app.post('/', (req,res)=> {
  var name = req.body.name;
  var email = req.body.email;
  res.send(`Hi ${name}, your email is ${email}`)
})

app.listen(3000, function() {
  console.log("start");
})
```


# 자동 라우트
```
const express = require('express');
const app = express();
app.set('PORT', process.env.PORT || 3000);

const routerMobile = express.Router();
const routerDesktop = express.Router();

routerMobile.get('/index', function (req, res) {
  res.send('<h1>router Mobile</h1>');
})

routerDesktop.get('/index', function (req, res) {
  res.send('<h1>router Desktop</h1>');
})

app.use('/mobile', routerMobile);
app.use('/desktop', routerDesktop);
// localhost:3000/mobile/index
// localhost:3000/desktop/index

app.listen(app.get('PORT'), function () {
  console.log(`server is Running at ${app.get('PORT')}`);
})
```

# 라우트 파일 분리
```
// rounte.js
const express = require('express');

const routerMobile = express.Router();
const routerDesktop = express.Router();

routerMobile.get('/index', function (req, res) {
  res.send('<h1>router Mobile</h1>');
})

routerDesktop.get('/index', function (req, res) {
  res.send('<h1>router Desktop</h1>');
})

exports.routerMobile = routerMobile;
exports.routerDesktop = routerDesktop;
```
```
//  app.js
const express = require('express');
const app = express();
app.set('PORT', process.env.PORT || 3000);

app.use('/mobile', require('./router').routerMobile);
app.use('/desktop', require('./router').routerDesktop);

//app.use('/mobile', routerMobile);
//app.use('/desktop', routerDesktop);
// localhost:3000/mobile/index
// localhost:3000/desktop/index

app.listen(app.get('PORT'), function () {
  console.log(`server is Running at ${app.get('PORT')}`);
})


# body-parser
버전에 따라 최근은 express로 직접 접근 
#  use를 사용한 로그인 확인 

/**
 * POST 방식으로 전달된 파라미터 확인하기
 * 
 * (1) 웹 브라우저에서 http://localhost:3000/login.html 페이지 열고 요청
 *      serve-static 모듈로 셋팅 한 상태 
 * 
 * (2) 크롬 브라우저의 Postman 앱이나 기타 POST 요청 도구를 사용하여 POST 방식으로 요청
 *     GET 방식으로 요청 시에는 웹브라우저에서 아래 URL로 요청해야 함
 *         http://localhost:3000?id=test1&password=123456
 *
 *  post 방식 테스트 => postman
 *  https://www.postman.com/downloads/?utm_source=postman-home
 */
```
// Express 기본 모듈 불러오기
const express = require('express');
const path = require('path');
const static = require('serve-static');
// 특정폴더의 파일들을 특정 패스로 접근할 수 있도록 만들어 준다.
// public 폴더에 있느 모든 파일을 웹서버의 루트 패스로 접근할 수 있도록 만들고 싶을때 사용

const app = express();
app.use(static(path.join(__dirname, 'public')));
app.set('PORT', process.env.PORT || 3000);

// body-parser를 대신 express로 application/x-www-form-urlencoded 파싱
app.use(express.urlencoded({ extended: false }))
// body-parser를 대신 express 이용해 application/json 파싱
app.use(express.json())


// 미들웨어에서 파라미터 확인
app.use('/*',(req, res)=>{
	console.log('첫번째 미들웨어에서 요청을 처리함.');

	const paramId = req.body.id || req.query.id;
	const paramPassword = req.body.password || req.query.password;
	
	res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
	res.write('<h1>Express 서버에서 응답한 결과입니다.</h1>');
	res.write('<div><p>Param id : ' + paramId + '</p></div>');
	res.write('<div><p>Param password : ' + paramPassword + '</p></div>');
	res.end();
});


// Express 서버 시작
app.listen(app.get('PORT'), function(){
  console.log('Express server listening on port ' + app.get('PORT'));
});
```


# 요청 파라미터 

# 에러 처리 
express example>app8_02.js
express-error-handler 를 이용한 자세한 처리


# 쿠키와 세션 
로그인을 하지 않은 경우 특정 페이지(구매정보)를 볼수 없음 
express의 passport 모듈 사용

## 쿠키 
브라우저에 저장되는 정보 
한번 접속하고 난 후 데이터가 사라지면 
app11.js


cookie-parser를 설치 
npm install cookie-parser --save
cookie-parser를 import 한후 미들웨어에 등록
cookieParser = require('cookie-parser') // 쿠키 파서 불러오기
app.use(cookieParser()); // 미들웨어 등록

## 세션 
서버에 저장되는 파일 
브라우저와 데이터를 주고 받으면서 


# 라우트 분리 
페이지 라우팅은 클라이언트의 요청에 따라 적절한 페이지로 응답하는 기술
|메서드|	설명|
|get(path, callback, callback...)|	GET 요청이 발생했을 때의 이벤트 리스너|
|post(path, callback, callback...)|	POST 요청이 발생했을 때의 이벤트 리스너|
|put(path, callback, callback...) |	put 요청이 발생했을 때의 이벤트 리스너 |
|delete(path, callback, callback...)|	delete 요청이 발생했을 때의 이벤트 리스너|
|all(path, callback, callback...)|	all 요청이 발생했을 때의 이벤트 리스너|

```
const express = require('express');
const path = require('path');
const app = express();
const static = require('serve-static');

/*
    현재 경로에 ./routes/home 다음 폴더를 만든 후 
    index.js를 추가하여 라우트 분리 

    const express = require('express');
    const router = express.Router();
    // router를 이용하여 app 대신 라우터 사용 

    router.get('/', (req, res)=>{
        console.log( 'router root ')
        res.sendFile(req.url);
    })

    router.get('/login', (req, res)=>{
        console.log( 'router login ')
        res.sendFile(req.url);
    })

    module.exports = router; 

*/
app.set('PORT', process.env.PORT || 3000);
//app.use('/public', path.join(__dirname, '/public')); // error
app.use(static(path.join(__dirname, 'public')));

// 분리한 라우트 연결
const home = require('./routes/home');  // 라우트
app.use( '/', home); // 모듈

app.listen( app.get('PORT'), ()=>{
    console.log('server start' , app.get('PORT'));
})

```

```
// 분리한 라우트 index.js 

const express = require('express');
const router = express.Router();
// router를 이용하여 app 대신 라우터 사용 

router.get('/', (req, res)=>{
    console.log( 'router root ')
    res.sendFile(req.url);
})

router.get('/login', (req, res)=>{
    console.log( 'router login ')
    res.sendFile(req.url);
})

module.exports = router; 
```

# 데이터 베이스 사용 순위
https://db-engines.com/en/ranking
mysql 설치 : https://m.blog.naver.com/bjh7007/221829548634
mariadb 설치 : 

# 데이터 베이스
## 데이터 베이스 이해 
데이터베이스 : 테이블의 집함
테이블  : 엑셀 시트와 같은 구조 
레코드  : 정보의 집합, 한줄

## 관계형 데이터 베이스 다루기
1. 데이터베이스 연결 : 아이디, 비번 등을 가지고 연결
2. 테이블 생성 : create table 테이블명(속성 타입, 속성 타입)
3. 레코드 추가 : insert int 테이블명(속성, 속성) values ( '값' , 10)
4. 데이터 조회 : select 속성 from 속성 where 조건식

## 몽고디비
nosql 
관계형 데이터 베이스 테이블 -> 컬렉션
레코드 -> document 문서객체 { object 1개 }  


# npm init 
package.json을 만든다.
# npm i date-fns
날짜를 사용할 수 있는 모듈 
package-lock.json을 만든다.


# 뷰 템플릿 적용 ejs
뷰 : 눈에 보이는 부분으로 사용자에게 결과를 보여주기 위해 만든 파일로 
자바스크립트로 처리하기보다 웹문서를 미리 만들어  두고  사용하는 것이 좋음 
응답 웹문서의 기본 형태를 뷰템플릿 파일로 만들어 두고 사용함
뷰템플릿을 사용하면 웹문서의 기본 형태는 템플릿으로 만들어 두고 데이터베이스를 조회하여 템플릿의 적다아한 위치에 넣어 웹문서를 만듬, 이때 뷰 템플릿을 자동으로 생성후 응답을 보내는 역활을 뷰엔진이 함

모델 : 데이터를 제공하는 것으로 데이터베이스를 저장하거나 조회하는 함수
컨트롤러 : 처리되는 과정을 담당하는 것으로 사용자 요청을 처리하는 라우팅 함수 


