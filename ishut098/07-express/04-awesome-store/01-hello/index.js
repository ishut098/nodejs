const express=require('express');
const indexRouter=require('./routes/index.js');
const path=require('path');
const app=express();


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'./views'));
app.set('app-details',{
    title:'Awesome Store',
    description:'This is a page by Ishu Tiwari',
    version:'1.0.40'
});
app.use(indexRouter);
app.use(express.static(path.join(__dirname,'public')));

const port=process.env.PORT || 8090;
app.listen(port,function(error){
    if(error){
        console.log('Error starting server: '+error.message);
        return;
    }
    console.log('Server started, login to: '+port);
});
