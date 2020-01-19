var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var DatapointSchema = new Schema({ lat: Number, lng: Number, weight: Number });

var AndroidSchema = new Schema({
  datapoint: DatapointSchema,
});

var AndroidModel = mongoose.model('AndroidModel', AndroidSchema );

module.exports = AndroidModel;