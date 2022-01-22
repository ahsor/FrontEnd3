
process.on('hello', function() {
	console.log('hello 이벤트 발생함.');
});

setTimeout(function() {
	console.log('2초 후에 시스템 종료 시도함.');
	
	process.emit('hello');
}, 2000);

