const express= require('express');
const router=express.Router();
const data=require('../data/seed.json');


router.get('/products',function(req,res){
    res.json(data.products);
}); //To get all the products in JSON format


router.get('/products/:productId',function(req,res){
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