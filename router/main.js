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
        realTitle: 'Dancing Queens',
        artist: '',
        start: 30,
        volume: 0.4
    },
    {
        title: 'https://s3-us-west-1.amazonaws.com/hr-mytunes/data/03+Age+Ain%27t+Nothing+But+A+Number.mp3',
        realTitle: 'Born To Run',
        artist: '',
        start: 30,
        volume: 0.4
    },
    {
        title: 'https://s3-us-west-1.amazonaws.com/hr-mytunes/data/05+Hot+Like+Fire.mp3',
        realTitle: 'Karma Chameleon',
        artist: '',
        start: 30,
        volume: 0.4
    },
    {
        title: 'https://s3-us-west-1.amazonaws.com/hr-mytunes/data/06+If+Your+Girl+Only+Knew.mp3',
        realTitle: 'Xanadu',
        artist: '',
        start: 30,
        volume: 0.4
    }];

var musicList = [];
var songResponse;

app.use(bodyParser());

app.get('/',function(req,res){
res.render('index.html');
});

app.post('/musicchoice', function(req, res) {
  console.log(req.body);
  if (req.body.text === "classical") {
    songResponse = classicalSongs;
  }
  else
  {
    songResponse = eightiesSongs;
  }

  for (var i = 0; i < songResponse.length; i++) {
    musicList.push(songResponse[i].realTitle);
  }
  console.log(musicList);
  res.end(JSON.stringify(songResponse));

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

};