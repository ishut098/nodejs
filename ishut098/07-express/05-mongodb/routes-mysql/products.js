const express = require( 'express' );
const con = require( '../init/db' );

const router = express.Router();

router.get( '/', function( req, res ) {
    const query = 'SELECT * FROM products';
    con.query( query, function( error, products ) {
        if( error ) {
            res.json({
                message: 'Error retrieving products from DB : ' + error.message
            });
            return;
        }

        res.status(200).json( products );
    });
});

module.exports = router;

// Exercise: COnvert all of the endpoints to use MySQL DB
// to retrieve one product