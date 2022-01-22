// const add = (a,b)=>a+b; 
// const sub = (a,b)=>a-b; 
// const mul = (a,b)=>a*b; 
// const div = (a,b)=>a/b; 

const add = function(a,b){ return a+ b; }
const sub = function(a,b){ return a- b; }
const mul = function(a,b){ return a* b; }
const div = function(a,b){ return a/ b; }

module.exports = { add, sub, mul, div}