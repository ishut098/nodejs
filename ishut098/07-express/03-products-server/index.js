
const express= require('express');
const indexRouter=require('./router/index.js');
const reviewRouter=require('./router/reviews.js')
const app=express();
const productRouter=require('./router/products.js');

app.use(express.json()); //enables to form json data
app.use(express.urlencoded({extended:false}));// enables to pass form data

app.use(indexRouter); //Associating the app with the router.
app.use('/products',productRouter);
app.use(reviewRouter);

app.listen(8092,function(error){
    if(error){
        console.log('error starting server');
        
        return;
    }
    console.log('Check http://localhost:8092');
});

