const path = require('path');

// 디렉토리 합치기
const userPath = path.join('/foo', 'bar', 'baz/asdf', 'quux');
console.log(`문서 디렉토리 : ${userPath}` );

const directories = ["users", "kim", "docs"];
const docsDirectory = directories.join(path.sep); // path.sep : / \ 경로 세그먼트의 구분 기호를 인식 
console.log(`문서 디렉토리 : ${docsDirectory}`);

const splitPath =  userPath.split(path.sep); // 분리할 때도 자동 인식
console.log(`분리 디렉토리 : ${splitPath}`);

//디렉토리명과 파일명 합치기
const curPath = path.join('/Users/kim', 'vscode.exe');
console.log(`현재 경로 : ${curPath}` );

// 패스에서 디렉토리, 파일명, 확장자 구분하기
const filename = "C:\\Users\\jemicom\\notepad.exe";
console.log(`디렉토리 : ${path.dirname(filename)}, 
            파일 이름 : ${path.basename(filename)}, 
            확장자 : ${path.extname(filename)}`);

//
