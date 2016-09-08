var express = require('express')
,   app = express();

// Players
var players = require('./lib/players.js');
players.createTable();
app.get('/players', function(req,res){
	players.actions(req.query,res);
});

// Seasons
var seasons = require('./lib/seasons.js');
seasons.createTable();
app.get('/seasons', function(req,res){
	seasons.actions(req.query,res);
});

app.listen(3000);