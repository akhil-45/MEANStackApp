var express = require('express');
var mongoose = require('mongoose');
var authormodel = require('./models/author.js');


var app = express();

app.set('views', __dirname);

app.set('view engine', 'jade');

app.use(express.static(__dirname));

app.get('/api/authors', function(req, res) {
mongoose.model('Author').find({}).exec(function(error, collection) {
res.send(collection);
})
})

app.get('*', function(req,res){
  res.render('index');
});

mongoose.connect('mongodb://localhost/codebabeldashboard');

var con = mongoose.connection;
con.once('open', function() {
console.log('connected to mongodb successfully!!!')
authormodel.seedAuthors();
console.log('updated the database')

});



app.listen(3000);