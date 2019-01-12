
const express= require('express');
const indexRouter=require('./router/index.js');
const chalk=require('chalk');
const reviewRouter=require('./router/reviews.js')
var morgan = require('morgan');
const fs= require('fs');
var path=require('path')
const app=express();

console.log(app.get('env')); //same as process.env.NODE_ENV (this is NOT for setting up route)


const productRouter=require('./router/products.js');

//Setup the logger
//we use the morgan in production environment, and custom console logger otherwise
if(process.env.NODE_ENV==='production'){
    var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });
    app.use(morgan('combined', { stream: accessLogStream }));

}


if(process.env.NODE_ENV!=='production'){
    app.use(function(req,res,next){
        req.recievedAt=new Date();
        next();
    });

}


app.use(function(req,res,next){
    req.recievedAt=new Date();

    //to pass control to next middleware
    next();  //very important before creating server
});

//Writing a middleware that logs recievedAt to the console

app.use(function(req,res,next){
    console.log(chalk.red('Request was received at '+req.recievedAt));
    next();
});

app.use(express.json()); //enables to form json data
app.use(express.urlencoded({extended:false}));// enables to pass form data

app.use(indexRouter); //Associating the app with the router.
app.use('/products',productRouter);
app.use(reviewRouter);

const port=process.env.PORT || 8090;
app.listen(port,function(error){
    if(error){
        console.log('error starting server');
        return;
    }
    console.log('Check http://localhost:8090');
});

