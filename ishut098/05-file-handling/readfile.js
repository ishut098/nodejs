const fs = require( 'fs' );
// console.log(fs.statSync('./contact.html'));
// var stats=fs.statSync('./contact.html');
// console.log(new Date(stats.atimeMs));

var list=fs.readdirSync('./contacts')
console.log(list);
var rawdata;
console.log(fs.readFileSync(`./contacts/${list[0]}`));
// for(var i=0;i<list.length;i++){
//     rawdata += fs.readFileSync(`./contacts/${list[i]}`,Buffer);  
// }
// console.log(rawdata);
rawdata=fs.readFileSync(`./contacts/${list[0]}`,'utf8');
let student = JSON.stringify(rawdata);
console.log(JSON.parse(rawdata));  
console.log(student);  


////do it when free////