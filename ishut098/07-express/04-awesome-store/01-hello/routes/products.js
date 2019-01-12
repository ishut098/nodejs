const express=require('express');
const data=require('../data/seed.json');

const router=express.Router();

router.get('/products',function(req,res){
    res.render('products',{
        title:'Stored Catalog',
        products:data.products
    });
});

module.exports=router;