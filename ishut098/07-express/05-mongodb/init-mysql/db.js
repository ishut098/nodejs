// const data = require( '../init/seed.json' );
const mysql = require( 'mysql' );

const con = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password'
});

con.connect(function( error ) {
    if( error ) {
        console.error( 'error on trying to connect to DB : ', error.message );
        throw error;
    }

    console.log( 'connected to the DB' );    
    // loadData();
});

// function loadData() {
//     // generated product id will be stored here
//     const productIdArray = [];
//     let counter = 0;

//     data.products.forEach(function( product ) {
//         let productObj = new Product( product );
//         productObj.save(function( error, savedProduct ) {
//             productIdArray.push( savedProduct._id );
//             console.log( productIdArray );
            
//             if( error ) {
//                 console.error( 'Some error occured when trying to save product with name = ' + product.name );
//                 return;
//             }

//             console.log( 'Product with name = ' + savedProduct.name + ' has been saved with id = ' + savedProduct._id );

//             counter++;
//             if( counter === data.products.length ) {
//                 loadReviews();
//             }
//         });
//     });

//     function loadReviews() {
//         data.reviews.forEach(function( review ) {
//             let reviewObj = new Review( review );
//             reviewObj.productId = new mongoose.Types.ObjectId( productIdArray[ review.productId - 1] );
//             reviewObj.save(function( error, savedReview ) {
//                 if( error ) {
//                     console.error( 'Some error occured when trying to save review with title = ' + review.title );
//                     return;
//                 }

//                 console.log( 'Review with title = ' + savedReview.title + ' has been saved with id = ' + savedReview._id );
//             });
//         });
//     }
// }

module.exports = con;