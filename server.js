var express = require('express'),
    user = require('./users.js'),
    bodyParser = require('body-parser')

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
user.connect(function() {
   app.get('/users', user.findAll);
   app.get('/users/:id', user.findById);
   app.post('/users', user.addUser);
   app.put('/users/:id', user.updateUser);
   app.delete('/users/:id', user.deleteUser);
   app.listen(9000);
   console.log('Listening on port 9000...');
});
