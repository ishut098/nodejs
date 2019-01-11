console.log(process);
setImmediate(function(){
    console.log('inside setImmediate Function');
});

setTimeout(function(){
    console.log('inside setTimeout function');
},0);

process.nextTick(function(){
    console.log('inside process.nextTick() function');
});

console.log('last line of this file');