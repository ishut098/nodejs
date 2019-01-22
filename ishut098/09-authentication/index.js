const express = require( 'express' );
const jwt=require('jsonwebstoken');

const app = express();

const user = [
    {
        username: 'john.doe@example.com',
        password: 'password',
        isAdmin:true
    },
    {
        username: 'mark.smith@example.com',
        password: 'password',
        isAdmin:false
    }
]

app.set( 'view engine', 'ejs' );

// to parse form body
app.use( express.urlencoded( { extended: false } ) );

app.use(session({
    secret: 'shh', // should not be stored in code
    store: new MongoStore({ mongooseConnection: mongoose.connection })
}));

app.get( '/', function( req, res ) {
    res.render( 'login', {
        errorLoggingIn: false
    });
});

app.post( '/login', function( req, res ) {
    // username-password comnination will be checked in DB
    if( req.body && req.body.username === user.username && req.body.password === user.password ) {
        const username = req.body.username;
        const password = req.body.password;
        console.log( username );
        
        //JWT token has details required for authentication (allowed or not) and authorisation (privileges)
        jwt.sign(claims,function(err,token){

        });
});

app.get( '/private', function( req, res ) {
    if( req.session.user === undefined ) {
        // res.status(403).json({
        //     message: 'You are not authorized to view this page'
        // });
        res.redirect( '/' );
        return;
    }

    res.render( 'private' );
});

app.post( '/logout', function( req, res ) {
    req.session.destroy();
    res.redirect( '/' );
});

app.listen( 3100, function( error ) {
    if( error ) {
        console.log( 'error starting server : ' + error.message );
        return;
    }

    console.log( 'started on port 3100' );
})