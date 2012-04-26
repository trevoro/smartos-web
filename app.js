var path = require('path');
var express = require('express');

var app = express.createServer();
var images = require('./lib/images');

app.configure(function () {
	app.use(express.logger());
  app.use(express.static(path.dirname(__filename) + '/public'));
  app.use('views', path.dirname(__filename) + '/views');
  app.set('view engine', 'ejs');
});

app.get('/', function (req, res) {
  var body = {
    messages: []
  }
  res.render('index.ejs', body);
});


app.get('/images', function (req, res) {
	var body = {};
	res.render('images.ejs', body);
});

app.get('/images.json', function (req, res) {
  images.all(function (error, images) {
    var body = {};
    if (error) {
      body.error = { code: 404, message: "not found" };
      res.json(body, 404);
    }
    else {
      body.images = images;
      return res.json(body, 200);
    }
  });
});

app.listen(4000);
