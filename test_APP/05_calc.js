var util = require('util');
var EventEmitter = require('events').EventEmitter;
//util 모듈은 node.js의 보조적인 유용한 기능들을 모아놓은 모듈
//console.log() 메소드와 비슷한 기능을 합니다. 차이점이라면 console.log()는 화면에 출력하는 역할을 하지만 util.format은 문자열로 반환합니다.
// https://nodejs.org/api/util.html#utilinheritsconstructor-superconstructor

var Calc = function() {
	var self = this;
	
	this.on('stop', function() {
		console.log('Calc에 stop event 전달됨.');
	});
};

util.inherits(Calc, EventEmitter);
// 이벤트 기능을 사용하기 위해 EventEmitter를 상속함 

Calc.prototype.add = function(a, b) {
	return a + b;
}

module.exports = Calc;
module.exports.title = 'calculator';