# 참고 사이트 
<a src="https://gatudy.com/npm%ED%8C%A8%ED%82%A4%EC%A7%80-%EC%82%AC%EC%9A%A9%EB%B0%A9%EB%B2%95%EA%B3%BC-%EC%9B%90%EB%A6%AC">

# npm ls
모듈 목록 확인 
```
% npm list
% npm ls
% npm ll
% npm la
```
옵션값이 Boolean인 경우
값을 주지 않으면 true 로 동작함.
값을 false로 주면 옵션을 주지 않은 것과 동일하게 동작함.

# json 형식으로 보기
npm list --json
npm list --json=true
npm list --json=false

# 자세한 정보까지 보기
npm list --long
npm list --long=true
npm list --long=false

# 트리형식이 아닌 실제 물리 경로로 보기
npm list --parseable
npm list --parseable=true
npm list --parseable=false

# 현재 프로젝트가 아닌 global로 설치한 패키지(npm install g 패키지) 보기
npm list --global
npm list --global=true
npm list --global=false

# 레벨별로 출력
npm list --depth=0
npm list --depth=1
npm list --depth=2

# 현재 프로젝트에 package.json 이 있는 경우
dev 는 devdependency 에 있는 package 조회
prod 는 dependency 에 있는 package 조회

npm list --dev
npm list --dev=true
npm list --dev=false
npm list --development
npm list --development=true
npm list --development=false
npm list --prod
npm list --prod=true
npm list --prod=false
npm list --production=true
npm list --production=false
npm list --only=dev
npm list --only=prod
# unicode 형식으로 트리 나열
npm list --depth=0
npm list --depth=1
npm list --depth=2
# unicode 형식으로 트리 나열
npm list --unicode
npm list --unicode=true
npm list --unicode=false
# 옵션은 하나 이상 한번에 사용할 수 있다.
npm list --depth=1 --unicode=true
