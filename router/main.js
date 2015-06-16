module.exports=function(app)
{

var bodyParser = require('body-parser');
// var classicalSongs = {
//     song1: {
//         title: 'https://s3-us-west-1.amazonaws.com/hr-mytunes/data/04+One+In+A+Million.mp3',
//         artist: '',
//         start: 30,
//         volume: 0.4
//     },
//     song2: {
//         title: 'https://s3-us-west-1.amazonaws.com/hr-mytunes/data/03+Age+Ain%27t+Nothing+But+A+Number.mp3',
//         artist: '',
//         start: 30,
//         volume: 0.4
//     },
//     song3: {
//         title: 'https://s3-us-west-1.amazonaws.com/hr-mytunes/data/05+Hot+Like+Fire.mp3',
//         artist: '',
//         start: 30,
//         volume: 0.4
//     },
//     song4: {
//         title: 'https://s3-us-west-1.amazonaws.com/hr-mytunes/data/06+If+Your+Girl+Only+Knew.mp3',
//         artist: '',
//         start: 30,
//         volume: 0.4
//     }};



var classicalSongs = [
    {
        title: 'https://s3-us-west-1.amazonaws.com/hr-mytunes/data/04+One+In+A+Million.mp3',
        artist: '',
        start: 30,
        volume: 0.4
    },
    {
        title: 'https://s3-us-west-1.amazonaws.com/hr-mytunes/data/03+Age+Ain%27t+Nothing+But+A+Number.mp3',
        artist: '',
        start: 30,
        volume: 0.4
    },
    {
        title: 'https://s3-us-west-1.amazonaws.com/hr-mytunes/data/05+Hot+Like+Fire.mp3',
        artist: '',
        start: 30,
        volume: 0.4
    },
    {
        title: 'https://s3-us-west-1.amazonaws.com/hr-mytunes/data/06+If+Your+Girl+Only+Knew.mp3',
        artist: '',
        start: 30,
        volume: 0.4
    }];


app.use(bodyParser());

app.get('/',function(req,res){
res.render('index.html');
});

app.post('/musicchoice', function(req, res) {
  console.log(req.body);
  if (req.body.text === "classical") {
    res.end(JSON.stringify(classicalSongs));
  }
  else
  {
    res.end(JSON.stringify(eightiesSongs));
  }
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