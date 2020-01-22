var express = require ("express");
var mongoose = require ("mongoose");
var exphbs = require ("express-handlebars");

var PORT = process.env.PORT || 3000;

var app = express ();

var routes = require ("./routes");

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static("public"));

app.engine("handlebars", exphbs({defaultLayout:"main"}));
app.set("view engine", "handlebars");

app.use(routes);

var MONGODB_URI =process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI);

app.listen(PORT, function(){
    console.log("Listening on port: " + PORT);
})