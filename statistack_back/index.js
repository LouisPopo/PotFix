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

mongoose.connect(CONNECTION_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: true,
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => res.send('You reached the get endpoint'));

app.post('/', async (req, res) => {
  const options = { new: true, upsert: true };

  for (let i = 0; i < req.body.length; i++) {
    const iteration = {
      index: i,
      datapoints: req.body[i],
    };
    const filter = { index: i };
    await Iteration.findOneAndUpdate(filter, iteration, options);
  }

  res.send('You reached the post endpoint');
});

app.listen(PORT, () => {
  console.log(`statistack_back listening on port ${PORT}`);
});
