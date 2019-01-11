
const express= require('express');
const indexRouter=require('./router/index.js');
const reviewRouter=require('./router/reviews.js')
const app=express();
const productRouter=require('./router/products.js');


app.use(indexRouter); //Associating the app with the router.
app.use(productRouter);
app.use(reviewRouter);

app.listen(8091,function(error){
    if(error){
        console.log('error starting server');
        
        return;
    }
    console.log('Check http://localhost:8091');
});

