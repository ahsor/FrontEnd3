const nconf = require('nconf');
nconf.env();

console.log(`OS 환경변수 값 : ${nconf.get('OS')}`);