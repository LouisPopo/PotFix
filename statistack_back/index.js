var express = require('express');
var bodyParser = require('body-parser');
let mongoose = require('mongoose');

var Iteration = require('./model/iteration');

const CONNECTION_URL =
  'mongodb+srv://statistack_client:potholes@statistack-q2yt6.gcp.mongodb.net/test?retryWrites=true&w=majority';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(CONNECTION_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => res.send('You reached the get endpoint'));

app.post('/', (req, res) => {
  var iteration = Iteration({
    index: 34,
    datapoints: [
      {
        lat: 124,
        long: 567,
        weight: 25,
      },
    ],
  });
  iteration.save((err) => {
    if (err) throw err;

    console.log('iteration created!');
  });
  res.send('You reached the post endpoint');
});

app.listen(PORT, () => {
  console.log(`statistack_back listening on port ${PORT}`);
});
