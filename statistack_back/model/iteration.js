var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var DatapointSchema = new Schema({ lat: Number, lng: Number, weight: Number });

var IterationSchema = new Schema({
  index: { type: Number, unique: true, index: true },
  datapoints: [DatapointSchema],
});

var Iteration = mongoose.model('Iteration', IterationSchema );

module.exports = Iteration;