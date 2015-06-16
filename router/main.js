module.exports=function(app)
{

var bodyParser = require('body-parser');
var FuzzySet = require('fuzzyset.js');

var fuzzyDict = FuzzySet();


var seventiesDisco = [
    {
        title: 'https://s3-us-west-1.amazonaws.com/mvpproject/ABBA+-+Dancing+Queen.mp3',
        realTitle: 'Dancing Queen',
        artist: '',
        start: 30,
        volume: 0.3
    },

    {
        title: 'https://s3-us-west-1.amazonaws.com/mvpproject/Earth+Wind+and+Fire+-+Let%27s+Groove+Tonight.mp3',
        realTitle: "Let's Groove",
        artist: '',
        start: 30,
        volume: 0.5
    },
    {
        title: 'https://s3-us-west-1.amazonaws.com/mvpproject/Fly%2C+Robin+Fly+-+Silver+Convention.mp3',
        realTitle: 'Fly Robin Fly',
        artist: '',
        start: 30,
        volume: 0.4
    },
    {
        title: 'https://s3-us-west-1.amazonaws.com/mvpproject/van+mccoy+-+the+hustle.mp3',
        realTitle: 'The Hustle',
        artist: '',
        start: 30,
        volume: 0.4
    },

    {
        title: 'https://s3-us-west-1.amazonaws.com/mvpproject/Donna+Summer+-+Macarthur+Park.mp3',
        realTitle: 'MacArthur Park',
        artist: '',
        start: 30,
        volume: 0.7
    }

    ];


var eightiesPop = [
    {
        title: 'https://s3-us-west-1.amazonaws.com/mvpproject/TheLookOfLove.mp3',
        realTitle: 'The Look Of Love',
        artist: '',
        start: 30,
        volume: 1.0
    },

    {
        title: 'https://s3-us-west-1.amazonaws.com/mvpproject/Rick+Springfield+-+Jessie%27s+Girl.mp3',
        realTitle: "Jessie's Girl",
        artist: '',
        start: 30,
        volume: 0.3
    },
    {
        title: 'https://s3-us-west-1.amazonaws.com/mvpproject/Jackson+Browne+-+Somebody%27s+Baby.mp3',
        realTitle: "Somebody's Baby",
        artist: '',
        start: 30,
        volume: 0.4
    },
    {
        title: 'https://s3-us-west-1.amazonaws.com/mvpproject/GoGo%27s+-+we+got+the+beat.mp3',
        realTitle: 'We Got The Beat',
        artist: '',
        start: 30,
        volume: 0.35
    },
    {
        title: 'https://s3-us-west-1.amazonaws.com/mvpproject/Cyndi+Lauper+-+Girls+Just+Wanna+Have+Fun.Mp3',
        realTitle: 'Girls Just Wanna Have Fun',
        artist: '',
        start: 30,
        volume: 0.4
    }
    ];



var musicList = [];
var songResponse;

app.use(bodyParser());

app.get('/',function(req,res){
res.render('index.html');
});

app.post('/musicchoice', function(req, res) {
  if (req.body.text === "seventiesDisco") {
    songResponse = seventiesDisco;
  }
  else
  {
    songResponse = eightiesPop;
  }

  for (var i = 0; i < songResponse.length; i++) {
    musicList.push(songResponse[i].realTitle);
  }

  for (var j = 0; j < musicList.length; j++) {
    fuzzyDict.add(musicList[j]);
  }

  res.end(JSON.stringify(songResponse));

});

app.post('/guess', function(req, res) {

  var guess = req.body.text;
  var bestMatchIndex;
  var currentMatchIndex;
  var matchArr = fuzzyDict.get(guess);
  var matchValue = matchArr[0][0];
  var matchName = matchArr[0][1];

  var guessIndex = musicList.indexOf(matchName);

  if ((matchValue > 0.8) && (guessIndex !== -1)) {
    response = musicList[guessIndex];
    musicList.splice(guessIndex, 1);
  }
  else
  {
    response = "";
  }

  res.end(response);

});


app.post('/', function(req, res) {
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