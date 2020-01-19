var express = require('express');
var bodyParser = require('body-parser'); 
let mongoose = require('mongoose');

const CONNECTION_URL = "mongodb+srv://statistack:statistack@statistack-jpdps.mongodb.net/test?retryWrites=true&w=majority";
const DATABASE_NAME = "statistack";

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true });
var db = mongoose.connection;
// Added check for DB connection
if (!db) {
    console.log("Error connecting db");
}
else {
    console.log("Db connected successfully");
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`statistack_back listening on port ${PORT}`);
});