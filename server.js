var express = require('express')
var app = express()
var bodyParser = requrie('body-parser');

var PORT = process.env.port || 8080;

var jsonParser = bodyParser.json()

var urlencodedParser = bodyParser.urlencoded({ exnteded: false})

app.use(bodyParser.json({ type: application*+json }))

app.use(bodyParser.raw({ type: 'application/vnd.custom-type'}))

app.use(bodyParser.text({ type: 'text/html'}))

app.listen(PORT, function() {
  console.log = ("app listen to PORT: " + PORT);
})