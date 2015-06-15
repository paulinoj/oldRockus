module.exports=function(app)
{

var bodyParser = require('body-parser');

app.use(bodyParser());

app.get('/',function(req,res){
res.render('index.html');
});

app.post('/', function(req, res) {
  console.log(req.body);
  if (req.body.text === "Password") {
    result = "Right";
  }
  else
  {
    result = "Wrong";
  }
  res.end(result);
});


// app.get('/about',function(req,res){
// res.render('about.html');
// });
};