
const fs=require('fs');

// fs.readFile('./index.html','utf8',function(error,data)

fs.readFile('./index.html',function(error,data){
    if(error){
        console.log('Error while reading file | error='+error.message);
        return;
    }
    console.log('**** file contents **** ');
    
    console.log(data.toString());
});
