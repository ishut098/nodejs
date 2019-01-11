const anyBody= require('body/any');
const http = require('http');
const userData=require('/home/nineleaps/git-demo/ishut098/data/user.json');

function getSessionID(){
    return Math.random(10000)+1;
}
const server=http.createServer(function(req,res){
    anyBody(req,res,{},function(error,body){
        var found=0;
        res.setHeader('Content-Type','text/html');
        res.setHeader('Set-Cookie','session_id=23');
        for(let i=0;i<userData.length;i++){
           if(body.username===userData[i].username && body.password===userData[i].password){
               found=found+1;
               break;
            }
            else continue;
        }
        if(found){
            res.end(`You are logged in now Mr.${body.username}`)
            return;
        }
        else
            res.end(`Unauthorised User`);
    });
});
server.listen(8095);