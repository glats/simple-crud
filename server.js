var express = require('express'),
    user = require('./users.js'),
    bodyParser = require('body-parser')

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "DELETE, POST, PUT, GET");
  next();
});
user.connect(function() {
   app.get('/users', user.findAll);
   app.get('/users/:id', user.findById);
   app.post('/users', user.addUser);
   app.put('/users/:id', user.updateUser);
   app.delete('/users/:id', user.deleteUser);
   app.listen(8081);
   console.log('Listening on port 8081...');
});
