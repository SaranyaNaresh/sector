
var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('admin:admin@ds145289.mlab.com:45289/sampledb', ['sectors']);

var bodyParser = require('body-parser');

app.use(express.static(__dirname));
app.use(bodyParser.json());

app.get('/sectors', function(req, res){
	console.log('Received find all persons request');
	db.sectors.find(function(err, docs){
		console.log(docs);
		res.json(docs);
	})
});

app.get('/sector/:id', function(req, res){
	console.log('Received findOne person request');
	db.sectors.findOne({_id: new mongojs.ObjectId(req.params.id)}, function(err, docs){
		console.log(docs);
		res.json(docs);
	})
});

app.post('/addSector', function(req, res){
	console.log(req.body);
	db.sectors.insert(req.body, function(docs){
		console.log(docs);
		res.json(docs);
	})
});

app.delete('/deleteSector/:id', function(req, res){
	console.log("Received delete one person request...");
	db.sectors.remove({_id: new mongojs.ObjectId(req.params.id)}, function(err, docs){
		console.log(docs);
		res.json(docs);
	});
});

app.put('/updateSector', function(req, res){
	console.log("Received update sector request");
	db.sectors.findAndModify({query: {"_id": new mongojs.ObjectId(req.body._id)},
										update: {$set: {name: req.body.name}}
										}, function(err, docs){
											console.log(docs);
											res.json(docs);
										})
	});

//app.use(express.static(__dirname + "/app/views"));
app.listen(3000);
console.log("server running on port 3000");