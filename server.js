var express = require('express');
var app = express();
var bodyParser = requrie('body-parser');
var path = require("path");

var PORT = process.env.port || 8080;

var jsonParser = bodyParser.json();

var urlencodedParser = bodyParser.urlencoded({ exnteded: true});

app.use(bodyParser.json({ type: 'application*+json' }));

app.use(bodyParser.raw({ type: 'application/vnd.custom-type'}));

app.use(bodyParser.text({ type: 'text/html'}));

require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);

app.listen(PORT, function() {
  console.log = ("app listen to PORT: " + PORT);
});