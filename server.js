var express=require('express');
var http=require('http');
var app=express();

require('./router/main')(app);
app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
// app.post('/', function(req, res) {
//   console.log(req.body);
//   if (req.body.text === "Password") {
//     result = "Right";
//   }
//   else
//   {
//     result = "Wrong";
//   }
//   res.end(result);
// });
var server=app.listen(3000,function(){
console.log("Express is running on port 3000");
});