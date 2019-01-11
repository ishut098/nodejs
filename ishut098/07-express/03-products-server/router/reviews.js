const express= require('express');
const router=express.Router();
const data=require('../data/seed.json');


router.get('/reviews',function(req,res){
    res.json(data.reviews);
}); //To get all the products in JSON format

router.get('/products/:productId/reviews',function(req,res){
    const productId=parseInt(req.params.productId);
    if(isNaN(productId)){
        res.status( 400 ).json({
            message: 'Product ID is not a number'
        });
        return;
    }

    else{
            const rproduct=data.reviews.filter(function(reviews){
            return reviews.productId === productId;
        });
        if(rproduct !==undefined){
            res.json(rproduct);
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