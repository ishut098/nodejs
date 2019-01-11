//Order of log, when does 2,3,4,5 appear??
console.log('1');
setTimeout(function(){
    console.log('2');
},2000);

console.log('3')
setTimeout(function(){
    console.log('4');
},1000);
console.log('5')

// 1
// 3
// 5
// 2
// 4