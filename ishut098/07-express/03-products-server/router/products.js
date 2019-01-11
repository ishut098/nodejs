const express= require('express');
const router=express.Router();
const data=require('../data/seed.json');


router.get('/',function(req,res){
    res.json(data.products);
}); //To get all the products in JSON format


router.post('/',function(req,res){
    const product = req.body;
    if(!req.body){
        //false,undefined,null,empty
        res.json({
            message:'Product Details Empty'
        });
        return;
    }
    //for incomplete details
    //test for name price code are compulsory
    //release date to be set to current date if not given

    if(!product.name || !product.price || !product.code){
        res.json({
            message:'Product name, price and code number are missing'
        });
        return;
    }

    if(!product.releaseDate){
        product.releaseDate=(new Date()).toString();
    }
    //generating product ID
    
    product.id = data.products.length+1; //bad logic but DB will do the work
    
    data.products.push(product);
    res.status(201).json(product);

});

router.put('/:productId',function(req,res){
    const productId=parseInt(req.params.productId);
    if(isNaN(productId)){
        res.status( 400 ).json({
            message: 'Product ID is not a number'
        });
        return;
    }
    const product=req.body;
    if(!product){
        res.json({
            message:'No product details- request body is empty'
        });
        return;
    }
    let matchingIndex;
    const matchingProduct= data.products.find(function(product,index){
        if(product.id===productId){
            matchingIndex=index;
        }
        return product.id===productId;
    });

    data.products[matchingIndex]={...matchingProduct,...product};
    res.json(data.products);

});



router.get('/:productId',function(req,res){
    const productId=parseInt(req.params.productId);
    if(isNaN(productId)){
        res.status( 400 ).json({
            message: 'Product ID is not a number'
        });
        return;
    }
    else{
        const product=data.products.find(function(product){
            return product.id === productId;
        });
        if(product !==undefined){
            res.json(product);
            return;
        }
        else{
            res.status( 400 ).json({
                message: 'No products found:'+ productId
            });
            return;
        }
    }

});

module.exports=router;