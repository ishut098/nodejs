const http=require('http');
const products=require('/home/nineleaps/git-demo/ishut098/data/products.json');
const server= http.createServer();

server.on('request',requestHandler);
function requestHandler(req,res) {
    console.log(req.url);
    switch(req.url){
        case '/products':
            res.end(JSON.stringify(products));
            break;
        case '/reviews':
            res.end('reviews will be sent');
            break;
        default:res.end('hello world');
    }
}
server.listen(8090);
server.on('listening',startupHandler);

function startupHandler(error) {
    if(error){
        console.log('server could not be started| error='+error.message);
        return;
    }
    console.log("Server created- check http://localhost:8090/");
}