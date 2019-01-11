const express= require('express');
const app = express();

/**App is an express Application Object- also a web server */

app.get('/contacts',function(req,res){
    res.sendFile(__dirname',./contacts.json');

});


app.get('/',function(req,res){
    res.end('Hello World');
});
console.log(__filename,__dirname);
app.listen(8060, function(error){
    if(error){
        console.log('Problem starting the server:', error.message)
        return;
    }
    console.log('Catch the actio on http://localhost:8060/');
});