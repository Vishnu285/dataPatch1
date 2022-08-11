var express=require('express'); 
var https=require('https'); 
var dotenv = require('dotenv'); 
var bodyParser=require('body-parser'); 


dotenv.config()
var app=express(); 
app.use(express.static("public")); 

app.use(bodyParser.urlencoded({extended:true})); 

 
app.get('/', function(req,res){
    res.sendFile(__dirname + "/home.html");
}) 

app.post('/', function(req,res){
    console.log(req.body);
    res.send(req.body);
})
 

app.listen(3000,function(){ 
    console.log('server started listening on port 3000'); 
}); 

 