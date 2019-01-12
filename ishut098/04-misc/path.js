const path=require('path');
const dataFolderPath=path.join(__dirname,'../..','data');
const dataFolderPath1=path.resolve(__dirname,'data');
console.log(dataFolderPath);

console.log(dataFolderPath1);

const pathParts=path.parse(__filename);
console.dir(pathParts);