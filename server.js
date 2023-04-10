var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
var mongoose = require('mongoose')
var Task = require('mongodb://127.0.0.1:27017')
var bodyParser = require('body-parser');
//mongoose instance connection url connectin
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var routes = require('./api/routes/todoListRoutes');
routes(app);
app.listen(port, () => {
    console.log(`todo list  RESTful API server started en: ${port}`)
});


