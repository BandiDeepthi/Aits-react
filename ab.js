var express=require('esxpress');
var app=express();
app.get('/index.html',function(req,res){
    res.sendFile( __dirname + "/" + "index.html");
})
app.get('/get example2', function(req, res){
    res.send('<p>Firstname:'+req.query['firstname']+'</p> <p>lastname:'+req.query['lastname']+'</p><p>password:'+req.query['password']+'</p><p> About You:'+req.query['aboutyou']+'</p>');})
    var server=app.listen(8000, function(){
        var host=server.address().address 
        var port=server.address().port
        console.log("Example app listening at http://%s:%s",host,port)
})