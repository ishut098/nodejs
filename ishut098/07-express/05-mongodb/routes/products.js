const express = require( 'express' );
const mongoose = require( 'mongoose' );
const review
const Product = mongoose.model( 'Product' );

const router = express.Router();

router.get( '/', function( req, res ) {
    Product.find(function( error, products ) {
        if( error ) {
            res.json({
                message: 'Error retrieving products from DB'
            });
            return;
        }

        res.status(200).json( products );
    });
});

// to retrieve one product
router.get( '/:productId', function( req, res ) {
    const productId = req.params.productId;
    Product
        .findOne( { _id: productId } )
        .exec(function( error, product ) {
        if( error ) {
            res.json({
                message: 'Error retrieving product details from DB : ' + error.message
            });
            return;
        }

        res.status(200).json( product );
    })
});

router.post( '/', function( req, res ) {
    const product = req.body;

    if( !req.body ) { // false, undefined, null, '',
        res.json({
            message: 'No product details - request body is empty'
        });
        return;
    }

    // add the product (DB query)
    let productObj = new Product( product );
    productObj.save(function( error, savedProduct ) {
        if( error ) {
            res.json({
                message: 'Some error occured saving product'
            });
            return;
        }
        res.status( 201 ).json( savedProduct );
    });
});

router.put( '/:productId', function( req, res ) {
    const body = req.body;
    const id = req.params.productId;
    
    if( req.body === undefined ) {
        res.status(400).json({"message":"No Product details"});
        return;
    }
    
    Product.findByIdAndUpdate( id, body, { new: true }, function( err, doc ) {
        if(err) {
            res.status(400).json({
                "message": "Bad server request product id not found","product_id":`${id}`
            });
            return;
        }

        res.status( 200 ).json( doc );
    });
});

router.delete( '/:productId', function( req, res ) {
    const productId = req.params.productId;

    Product.findByIdAndDelete( productId, function( error, doc ) {
        if( error ) {
            res.status( 404 ).json({
                message: error.message
            });
            return;
        }

        res.status( 204 ).end();
    });
});

router.delete( '/:productId', function( req, res ) {
    Product.findByI
});
router.get( '/:productId/reviews', function( req, res ) {
    const productId = req.params.productId;
    Review
        .find({productId:productId})
        .select('reviewer title text starRating')
        //for sorting the output results we can use 
        .sort('starRating -title')
        .exec(function(error,reviews){
            if(error){
                res.status(404).json({
                    message:error.message
                });
                return;
            }
        });
});

router.get( '/:productId/reviews', function( req, res ) {
    const productId = req.params.productId;
    const page=parseInt(req.query.page) || 1;
    const pageSize=req.query.pageSize || 10;
    Review
        .find({productId:productId})
        .select('reviewer title text starRating')
        //for sorting the output results we can use 
        .sort('starRating -title')
        .skip((page-1)*pageSize)
        .exec(function(error,reviews){
            if(error){
                res.status(404).json({
                    message:error.message
                });
                return;
            }
        });
});





module.exports = router;