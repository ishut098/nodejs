const http = require('http');
    fs = require('fs');
    const server= http.createServer(function(request,response){
        response.writeHeader(200, {"Content-Type": "text/html"});
    switch(request.url){
    case '/index': 
    {
        fs.readFile('./index.html', function (err, html) {
            if (err) {
                throw err; 
            }         
                response.write(html);  
                response.end();  
            });
            
        break;
    }
    case '/contact': 
    {
        fs.readFile('./contact.html', function (err, html) {
            if (err) {
                throw err; 
            }       
                response.write(html);  
                response.end();  
            });
            
        break;
    }
    default:
        {
                response.end('Hello Everyone') 
        }   
    }
});
server.listen(9500,function(error) {
    if(error){
        console.log('server could not be started| error='+error.message);
        return;
    }
    console.log("Server created- check http://localhost:9500/");
});
