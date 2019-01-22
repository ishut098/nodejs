const express= require('express');
const mongoose=require('mongoose');
const productsSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    code:{
        type:String,
        required:true
    },
    releaseDate:{
        type:Date,
        default:Date.now
    },
    description:String,
    price:{
        type:Number,
        required:true
    },
    starRating:Number,
    imageUrl:String

});
mongoose.model('Product',productsSchema);
