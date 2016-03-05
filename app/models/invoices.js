// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var invoiceSchema = new Schema({
  taskName: String,
  taskDescription: String,
  platform: String,
  clientName: String,
  url: String,
  hours: Number,
  workDone: String,
  monthFilter: String,
  yearFilter: String, 
  assignedBy: String,
  dateAssigned: Date,
  dateCompleted: Date,
  comments: String
});

// the schema is useless so far
// we need to create a model using it
var invoice = mongoose.model('Invoice', invoiceSchema);

// make this available to our users in our Node applications
module.exports = invoice;