var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./app/routes/api-routes.js")(app);
require("./app/routes/html-routes.js")(app);

app.listen(PORT, function () {
    console.log("App listening on: " + PORT);
});